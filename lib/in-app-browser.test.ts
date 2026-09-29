import { test } from "node:test"
import assert from "node:assert/strict"
import { detectBrowserEnv } from "./in-app-browser.ts"

const UA = {
  tiktokIOS:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_40.2.0 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/US isDarkMode/0 WKWebView/1 RevealType/Dialog BytedanceWebview/d8a21c6",
  tiktokAndroid:
    "Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/AP2A; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.71 Mobile Safari/537.36 trill_350402 JsSdk/1.0 NetType/WIFI Channel/googleplay AppName/trill app_version/35.4.2 ByteLocale/en BytedanceWebview/d8a21c6",
  instagramIOS:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 330.0.3.15.87 (iPhone15,2; iOS 17_4; en_US)",
  facebookIOS:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/460.0.0.36.109;FBBV/588000000]",
  unknownWebViewIOS:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  safariIOS:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1",
  chromeIOS:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/137.0.7151.79 Mobile/15E148 Safari/604.1",
  iPadOSDesktopMode:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15",
  chromeAndroid:
    "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
  desktopChrome:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
}

test("detects TikTok in-app browser on iOS", () => {
  const env = detectBrowserEnv(UA.tiktokIOS)
  assert.equal(env.inApp, "tiktok")
  assert.equal(env.platform, "ios")
})

test("detects TikTok in-app browser on Android (trill build)", () => {
  const env = detectBrowserEnv(UA.tiktokAndroid)
  assert.equal(env.inApp, "tiktok")
  assert.equal(env.platform, "android")
})

test("detects Instagram and Facebook in-app browsers", () => {
  assert.equal(detectBrowserEnv(UA.instagramIOS).inApp, "instagram")
  assert.equal(detectBrowserEnv(UA.facebookIOS).inApp, "facebook")
})

test("treats an unknown iOS WKWebView without a Safari token as in-app", () => {
  assert.equal(detectBrowserEnv(UA.unknownWebViewIOS).inApp, "other")
})

test("returns no in-app browser for real iOS Safari and Chrome", () => {
  assert.equal(detectBrowserEnv(UA.safariIOS).inApp, null)
  assert.equal(detectBrowserEnv(UA.chromeIOS).inApp, null)
  assert.equal(detectBrowserEnv(UA.safariIOS).platform, "ios")
})

test("recognises iPadOS desktop-mode UA only when touch points are reported", () => {
  assert.equal(detectBrowserEnv(UA.iPadOSDesktopMode, 5).platform, "ios")
  assert.equal(detectBrowserEnv(UA.iPadOSDesktopMode, 0).platform, "desktop")
})

test("classifies Android and desktop browsers", () => {
  assert.deepEqual(detectBrowserEnv(UA.chromeAndroid), { inApp: null, platform: "android" })
  assert.deepEqual(detectBrowserEnv(UA.desktopChrome), { inApp: null, platform: "desktop" })
})

test("handles an empty user agent", () => {
  assert.deepEqual(detectBrowserEnv(""), { inApp: null, platform: "desktop" })
})
