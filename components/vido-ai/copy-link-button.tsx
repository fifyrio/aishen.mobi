"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"
import { track } from "@vercel/analytics"
import { VIDO_APP_STORE_URL } from "@/lib/vido-ai"

type CopyState = "idle" | "copied" | "failed"

const RESET_AFTER_MS = 2200

/** In-app webviews often lack the async Clipboard API; fall back to execCommand. */
async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // Permission denied inside the webview — try the legacy path below.
  }
  const area = document.createElement("textarea")
  area.value = text
  area.setAttribute("readonly", "")
  area.style.position = "fixed"
  area.style.opacity = "0"
  document.body.appendChild(area)
  area.select()
  area.setSelectionRange(0, text.length)
  try {
    return document.execCommand("copy")
  } catch {
    return false
  } finally {
    document.body.removeChild(area)
  }
}

export function CopyLinkButton({ placement }: { placement: string }) {
  const [state, setState] = useState<CopyState>("idle")

  useEffect(() => {
    if (state !== "copied") return
    const timer = window.setTimeout(() => setState("idle"), RESET_AFTER_MS)
    return () => window.clearTimeout(timer)
  }, [state])

  const onCopy = async () => {
    const ok = await copyText(VIDO_APP_STORE_URL)
    setState(ok ? "copied" : "failed")
    track("vido_copy_link", { placement, ok })
  }

  return (
    <div className="space-y-2">
      <button type="button" onClick={onCopy} className="vido-ghost" aria-live="polite">
        {state === "copied" ? (
          <>
            <Check className="h-4 w-4 text-[var(--vido-teal)]" strokeWidth={2.6} />
            Copied — paste it in Safari
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" strokeWidth={2.2} />
            Copy App Store link
          </>
        )}
      </button>
      {state === "failed" && (
        <input
          readOnly
          value={VIDO_APP_STORE_URL}
          onFocus={(e) => e.currentTarget.select()}
          aria-label="App Store link"
          className="w-full rounded-xl border border-[var(--vido-line)] bg-[var(--vido-ink)] px-3 py-2 text-[12px] text-[var(--vido-muted)]"
        />
      )}
    </div>
  )
}
