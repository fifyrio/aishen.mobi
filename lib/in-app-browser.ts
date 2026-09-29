export type InAppBrowser = "tiktok" | "instagram" | "facebook" | "other"
export type Platform = "ios" | "android" | "desktop"

export interface BrowserEnv {
  /** Which social app's embedded webview we're in, or null for a real browser. */
  inApp: InAppBrowser | null
  platform: Platform
}

// TikTok ships as `musical_ly` (global iOS), `trill` (some regions) and always
// injects ByteDance webview tokens.
const TIKTOK_RE = /musical_ly|trill_|BytedanceWebview|ByteLocale|TikTok/i
const INSTAGRAM_RE = /Instagram/i
const FACEBOOK_RE = /FBAN|FBAV|FB_IAB|FBIOS/i
const IOS_RE = /iPhone|iPad|iPod/i
const ANDROID_RE = /Android/i
// Real iOS browsers (Safari, Chrome, Firefox, Edge) all keep the `Safari/` token;
// bare WKWebViews embedded in other apps drop it.
const SAFARI_TOKEN_RE = /Safari\//

function detectPlatform(ua: string, maxTouchPoints: number): Platform {
  if (IOS_RE.test(ua)) return "ios"
  // iPadOS 13+ reports a desktop Mac UA; touch support gives it away.
  if (/Macintosh/i.test(ua) && maxTouchPoints > 1) return "ios"
  if (ANDROID_RE.test(ua)) return "android"
  return "desktop"
}

function detectInApp(ua: string, platform: Platform): InAppBrowser | null {
  if (TIKTOK_RE.test(ua)) return "tiktok"
  if (INSTAGRAM_RE.test(ua)) return "instagram"
  if (FACEBOOK_RE.test(ua)) return "facebook"
  if (platform === "ios" && !SAFARI_TOKEN_RE.test(ua)) return "other"
  return null
}

export function detectBrowserEnv(ua: string, maxTouchPoints = 0): BrowserEnv {
  const platform = detectPlatform(ua, maxTouchPoints)
  return { inApp: detectInApp(ua, platform), platform }
}
