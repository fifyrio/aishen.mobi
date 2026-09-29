"use client"

import { useEffect, useRef } from "react"
import { Compass, MoreHorizontal, Zap } from "lucide-react"
import type { InAppBrowser } from "@/lib/in-app-browser"
import { CopyLinkButton } from "./copy-link-button"
import { useDownload } from "./download-provider"

const APP_LABEL: Record<InAppBrowser, string> = {
  tiktok: "TikTok",
  instagram: "Instagram",
  facebook: "Facebook",
  other: "This app",
}

function Steps() {
  return (
    <ol className="space-y-2.5 text-[15px] text-[var(--vido-muted)]">
      <li className="flex items-center gap-3">
        <span className="vido-step">1</span>
        <span>
          Tap <MoreHorizontal className="inline h-5 w-5 align-[-5px] text-[var(--vido-text)]" strokeWidth={2.6} aria-label="the three dots" />{" "}
          in the top-right corner
        </span>
      </li>
      <li className="flex items-center gap-3">
        <span className="vido-step">2</span>
        <span>
          Choose <strong className="font-semibold text-[var(--vido-text)]">Open in browser</strong>
        </span>
      </li>
    </ol>
  )
}

/** Inline card, rendered only inside social-app webviews. */
export function InAppHelperCard() {
  const { env } = useDownload()
  if (!env.inApp || env.platform !== "ios") return null

  return (
    <section aria-labelledby="stuck-heading" className="vido-helper">
      <div className="mb-3.5 flex flex-wrap items-center gap-2">
        <Zap className="h-5 w-5 fill-[#facc15] text-[#facc15]" strokeWidth={2} aria-hidden="true" />
        <h2 id="stuck-heading" className="text-[18px] font-bold tracking-[-0.01em]">
          Button not opening?
        </h2>
        <span className="rounded-full border border-[var(--vido-line)] bg-[var(--vido-surface-2)] px-2 py-0.5 text-[11px] font-semibold text-[var(--vido-muted)]">
          {APP_LABEL[env.inApp]} blocks App Store links
        </span>
      </div>
      <Steps />
      <div className="mt-4">
        <CopyLinkButton placement="helper-card" />
      </div>
    </section>
  )
}

/** Keep Tab / Shift+Tab cycling inside the dialog panel. */
function trapTab(e: KeyboardEvent, panel: HTMLElement | null) {
  if (!panel) return
  const focusable = panel.querySelectorAll<HTMLElement>("button, input, a[href]")
  if (focusable.length === 0) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  const active = document.activeElement
  if (e.shiftKey && (active === first || active === panel)) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && active === last) {
    e.preventDefault()
    first.focus()
  }
}

/** Full-screen coach mark pointing at the webview's ••• menu after a blocked tap. */
export function StuckOverlay() {
  const { env, isStuck, dismissStuck } = useDownload()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isStuck) return
    const returnFocus = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    panelRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return dismissStuck()
      if (e.key === "Tab") trapTab(e, panelRef.current)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
      returnFocus?.focus()
    }
  }, [isStuck, dismissStuck])

  if (!isStuck) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="stuck-overlay-title"
      className="vido-overlay"
      onClick={dismissStuck}
    >
      <svg
        className="vido-overlay-arrow"
        viewBox="0 0 120 140"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 132 C 30 70, 60 40, 100 14"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="2 12"
        />
        <path d="M78 10 L104 10 L100 36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div
        ref={panelRef}
        tabIndex={-1}
        className="vido-overlay-panel outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--vido-teal)]">
          {APP_LABEL[env.inApp ?? "other"]} kept you inside
        </p>
        <h2 id="stuck-overlay-title" className="mt-1.5 text-[24px] font-extrabold leading-tight tracking-[-0.02em]">
          Open this page in your browser
        </h2>
        <div className="mt-4">
          <Steps />
        </div>
        <p className="mt-3 flex items-center gap-2 text-[13px] text-[var(--vido-muted)]">
          <Compass className="h-4 w-4" aria-hidden="true" />
          Safari will open the App Store for you.
        </p>
        <div className="mt-5 space-y-2.5">
          <CopyLinkButton placement="overlay" />
          <button type="button" onClick={dismissStuck} className="vido-link-btn">
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
