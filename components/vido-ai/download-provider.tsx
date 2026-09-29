"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react"
import { track } from "@vercel/analytics"
import { detectBrowserEnv, type BrowserEnv } from "@/lib/in-app-browser"
import { ESCAPE_TIMEOUT_MS, VIDO_SAFARI_ESCAPE_URL } from "@/lib/vido-ai"

interface DownloadContextValue {
  env: BrowserEnv
  /** True once a download tap failed to leave the in-app browser. */
  isStuck: boolean
  dismissStuck: () => void
  handleDownload: (event: MouseEvent<HTMLAnchorElement>, placement: string) => void
}

const DownloadContext = createContext<DownloadContextValue | null>(null)

export function useDownload(): DownloadContextValue {
  const ctx = useContext(DownloadContext)
  if (!ctx) throw new Error("useDownload must be used inside <DownloadProvider>")
  return ctx
}

/**
 * Watches whether the page gets backgrounded/unloaded within the timeout.
 * If it doesn't, the in-app browser swallowed the navigation.
 */
function watchForExit(onBlocked: () => void): () => void {
  let hasLeft = false
  const markLeft = () => {
    if (document.visibilityState === "hidden") hasLeft = true
  }
  // Only a bfcache'd page counts: a real unload kills this timer anyway, and an
  // aborted custom-scheme navigation must not look like a successful exit.
  const markUnload = (e: PageTransitionEvent) => {
    if (e.persisted) hasLeft = true
  }
  document.addEventListener("visibilitychange", markLeft)
  window.addEventListener("pagehide", markUnload)

  const cleanup = () => {
    window.clearTimeout(timer)
    document.removeEventListener("visibilitychange", markLeft)
    window.removeEventListener("pagehide", markUnload)
  }
  const timer = window.setTimeout(() => {
    cleanup()
    if (!hasLeft) onBlocked()
  }, ESCAPE_TIMEOUT_MS)

  return cleanup
}

export function DownloadProvider({
  initialEnv,
  children,
}: {
  initialEnv: BrowserEnv
  children: ReactNode
}) {
  const [env, setEnv] = useState(initialEnv)
  const [isStuck, setIsStuck] = useState(false)
  const cancelWatch = useRef<(() => void) | null>(null)

  // The server only sees the UA; iPadOS in desktop mode needs touch info.
  useEffect(() => {
    setEnv(detectBrowserEnv(navigator.userAgent, navigator.maxTouchPoints))
    return () => cancelWatch.current?.()
  }, [])

  const handleDownload = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, placement: string) => {
      track("vido_download_click", {
        placement,
        inApp: env.inApp ?? "none",
        platform: env.platform,
      })

      // Real browsers and non-iOS devices: let the plain App Store link work.
      if (!env.inApp || env.platform !== "ios") return

      cancelWatch.current?.()
      cancelWatch.current = watchForExit(() => {
        setIsStuck(true)
        track("vido_escape_blocked", { inApp: env.inApp ?? "none" })
      })

      // TikTok blocks App Store universal links outright, so try to hand the
      // URL to Safari instead. Other in-app browsers usually allow the link.
      if (env.inApp === "tiktok") {
        event.preventDefault()
        window.location.href = VIDO_SAFARI_ESCAPE_URL
      }
    },
    [env],
  )

  const dismissStuck = useCallback(() => setIsStuck(false), [])

  const value = useMemo(
    () => ({ env, isStuck, dismissStuck, handleDownload }),
    [env, isStuck, dismissStuck, handleDownload],
  )

  return <DownloadContext.Provider value={value}>{children}</DownloadContext.Provider>
}
