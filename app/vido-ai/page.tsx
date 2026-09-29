import type { Metadata, Viewport } from "next"
import { headers } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Clapperboard, PawPrint, Shirt } from "lucide-react"
import { detectBrowserEnv } from "@/lib/in-app-browser"
import { VIDO_APP_ID } from "@/lib/vido-ai"
import { DownloadProvider } from "@/components/vido-ai/download-provider"
import { DownloadButton, PlatformNote } from "@/components/vido-ai/download-button"
import { InAppHelperCard, StuckOverlay } from "@/components/vido-ai/in-app-helper"
import "./vido.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vido AI — One photo. A week of TikToks.",
  description:
    "AI UGC ads, mini try-on videos and pet clips made on your iPhone in minutes. Download Vido AI free on the App Store.",
  alternates: { canonical: "/vido-ai" },
  // Safari shows its native "Open / Get" Smart App Banner from this.
  itunes: { appId: VIDO_APP_ID },
  openGraph: {
    title: "Vido AI — One photo. A week of TikToks.",
    description: "AI UGC ads, try-on videos and pet clips — made on your iPhone in minutes.",
    url: "/vido-ai",
    images: [{ url: "/images/vido-ai/screen-1.webp", width: 540, height: 1175 }],
  },
}

export const viewport: Viewport = {
  themeColor: "#12111a",
  viewportFit: "cover",
}

const SHOT_WIDTH = 540
const SHOT_HEIGHT = 1175

const SCREENSHOTS = [
  { src: "/images/vido-ai/screen-1.webp", alt: "AI-generated UGC ad of a creator holding a serum bottle" },
  { src: "/images/vido-ai/screen-2.webp", alt: "Mini Try-On: giant hands dressing a doll-sized model" },
  { src: "/images/vido-ai/screen-3.webp", alt: "Pet Channel: Pet Dance and Pet Talk Show formats" },
  { src: "/images/vido-ai/screen-4.webp", alt: "Cover Maker with stickers and a bold headline" },
  { src: "/images/vido-ai/screen-5.webp", alt: "Weekly content plan telling you what to post today" },
]

const FEATURES = [
  {
    icon: Clapperboard,
    tint: "from-[#8173f0] to-[#5b4bd6]",
    title: "UGC Ad",
    body: "An AI creator presents your product — no filming, no models.",
  },
  {
    icon: Shirt,
    tint: "from-[#2dd4bf] to-[#0f9f8f]",
    title: "Mini Try-On",
    body: "Giant hands dress a doll-sized model in your garment.",
  },
  {
    icon: PawPrint,
    tint: "from-[#fbbf24] to-[#f59e0b]",
    title: "Pet Channel",
    body: "Turn one pet photo into daily Reels & TikToks.",
  },
]

export default async function VidoDownloadPage() {
  const ua = (await headers()).get("user-agent") ?? ""
  const initialEnv = detectBrowserEnv(ua)

  return (
    <DownloadProvider initialEnv={initialEnv}>
      <div className={`${jakarta.variable} vido-page`}>
        <header className="mx-auto flex max-w-md items-center justify-between px-5 pt-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/vido-ai/icon.webp"
              alt=""
              width={36}
              height={36}
              priority
              className="rounded-[10px] shadow-[0_0_20px_-4px_rgba(108,92,231,0.8)]"
            />
            <span className="text-[19px] font-bold tracking-[-0.02em]">Vido AI</span>
          </div>
          <span className="rounded-full border border-[var(--vido-line)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[12px] font-semibold text-[var(--vido-muted)]">
            iPhone · iPad
          </span>
        </header>

        <main className="mx-auto max-w-md">
          <section aria-labelledby="hero-heading" className="px-5 pt-10 text-center">
            <p className="vido-reveal inline-flex items-center gap-2 rounded-full border border-[rgba(45,212,191,0.28)] bg-[rgba(45,212,191,0.07)] px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--vido-teal)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--vido-teal)]" aria-hidden="true" />
              For TikTok creators &amp; sellers
            </p>
            <h1
              id="hero-heading"
              className="vido-reveal mt-5 text-[clamp(30px,10.2vw,46px)] font-extrabold leading-[1.02] tracking-[-0.035em]"
              style={{ "--delay": "80ms" } as React.CSSProperties}
            >
              One photo.
              <br />
              <span className="whitespace-nowrap bg-gradient-to-r from-white via-[#d9d4ff] to-[#a99ff7] bg-clip-text text-transparent">
                A week of TikToks.
              </span>
            </h1>
            <p
              className="vido-reveal mx-auto mt-4 max-w-[320px] text-[16px] leading-[1.5] text-[var(--vido-muted)]"
              style={{ "--delay": "160ms" } as React.CSSProperties}
            >
              AI UGC ads, try-on videos and pet clips — made on your iPhone in minutes.
            </p>
            <div
              className="vido-reveal mt-7 space-y-3"
              style={{ "--delay": "240ms" } as React.CSSProperties}
            >
              <DownloadButton placement="hero">Download on the App Store</DownloadButton>
              <PlatformNote />
            </div>
          </section>

          <div className="mt-7 px-5">
            <InAppHelperCard />
          </div>

          <section aria-labelledby="shots-heading" className="mt-10">
            <div className="flex items-baseline justify-between px-5">
              <h2
                id="shots-heading"
                className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--vido-teal)]"
              >
                Inside the app
              </h2>
              <span className="text-[13px] text-[var(--vido-muted)]" aria-hidden="true">
                Swipe →
              </span>
            </div>
            <ul className="vido-rail mt-3" aria-label="App screenshots">
              {SCREENSHOTS.map((shot, i) => (
                <li key={shot.src} className="vido-shot">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={SHOT_WIDTH}
                    height={SHOT_HEIGHT}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="h-auto w-full"
                  />
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="features-heading" className="mt-8 px-5">
            <h2 id="features-heading" className="text-[26px] font-bold leading-tight tracking-[-0.02em]">
              Everything from hook
              <br />
              to video to cover.
            </h2>
            <ul className="mt-5 space-y-3">
              {FEATURES.map(({ icon: Icon, tint, title, body }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 rounded-[22px] border border-[var(--vido-line)] bg-[var(--vido-surface)] p-4"
                >
                  <span
                    className={`grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br ${tint} shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]`}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold tracking-[-0.01em]">{title}</h3>
                    <p className="mt-0.5 text-[14px] leading-[1.45] text-[var(--vido-muted)]">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="mx-auto mt-12 max-w-md border-t border-[var(--vido-line)] px-5 pt-6 text-center text-[13px] text-[var(--vido-muted)]">
          <nav aria-label="Legal" className="flex justify-center gap-5">
            <Link href="/vido-ai/privacy-policy" className="hover:text-[var(--vido-text)]">
              Privacy
            </Link>
            <Link href="/vido-ai/terms-of-service" className="hover:text-[var(--vido-text)]">
              Terms
            </Link>
            <Link href="/" className="text-[var(--vido-teal)] hover:underline">
              aishen.mobi
            </Link>
          </nav>
          <p className="mt-3 text-[12px] opacity-70">© {new Date().getFullYear()} Vido AI</p>
        </footer>

        <div className="vido-sticky">
          <div className="mx-auto max-w-md">
            <DownloadButton placement="sticky">Get Vido AI — Free</DownloadButton>
          </div>
        </div>

        <StuckOverlay />
      </div>
    </DownloadProvider>
  )
}
