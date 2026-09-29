export const VIDO_APP_ID = "6758744274"
export const VIDO_APP_STORE_URL = `https://apps.apple.com/us/app/vido-ai-photo-to-video/id${VIDO_APP_ID}`

/**
 * iOS 17+ scheme that asks the OS to open a URL in Safari. From a social-app
 * webview this is the only programmatic way out; apps may still block it, so
 * callers must keep a manual "Open in browser" fallback.
 */
export const VIDO_SAFARI_ESCAPE_URL = `x-safari-${VIDO_APP_STORE_URL}`

/** How long to wait for the app to background before assuming the escape was blocked. */
export const ESCAPE_TIMEOUT_MS = 1500
