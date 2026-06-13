export type Accent = "cyan" | "magenta" | "orange" | "purple" | "green"

export interface Product {
  slug: string
  name: string
  tag: string
  description: string
  features: string[]
  accent: Accent
  appStoreUrl: string
  privacyUrl: string
}

export const products: Product[] = [
  {
    slug: "curio-snap",
    name: "CurioSnap: Antique Identifier",
    tag: "> FIRST ANTIQUE EXPERT",
    description:
      "Leveraging AI computer vision technology to instantly identify ceramics, bronzes, coins, and other antiques. The scanning interface features a 'time-scanning line' animation, displaying museum-style card details after identification.",
    features: [
      "Era estimation & pottery style analysis",
      "Master reference value",
      "1,000,000+ trained reference database",
    ],
    accent: "purple",
    appStoreUrl: "#",
    privacyUrl: "/curio-snap/privacy-policy",
  },
  {
    slug: "jewelry-identifier",
    name: "AI Jewelry Identifier",
    tag: "> GEMSTONE GRADING & APPRAISAL",
    description:
      "Real-time detection of diamonds, gemstones, and precious metals. Identifies cutting techniques, estimates carat weight, and potential gem types. Enhanced 'light' visuals with AR tracking technology for dynamic facet masking.",
    features: [
      "AR-powered facet analysis",
      "Global auction price comparison",
      "Electronic appraisal reports",
    ],
    accent: "cyan",
    appStoreUrl: "#",
    privacyUrl: "/jewelry-identifier/privacy-policy",
  },
  {
    slug: "chem-ai",
    name: "Periodic Table - Chem AI",
    tag: "> YOUR AI CHEMISTRY COMPANION",
    description:
      "Explore the periodic table like never before with AI-powered explanations. Get instant information about elements, their properties, reactions, and real-world applications through intelligent conversation.",
    features: [
      "AI-powered element explanations",
      "Interactive periodic table",
      "Chemical reaction insights",
    ],
    accent: "orange",
    appStoreUrl: "#",
    privacyUrl: "/chem-ai/privacy-policy",
  },
  {
    slug: "vido-ai",
    name: "Vido AI: Photo to Video",
    tag: "> TRANSFORM PHOTOS INTO VIDEOS",
    description:
      "Turn your static photos into stunning AI-generated videos. Powered by cutting-edge Google Veo and Sora 2 models, create dynamic video content from any image with just a few taps.",
    features: [
      "Powered by Google Veo & Sora 2",
      "Quick AI video generation",
      "High quality output",
    ],
    accent: "magenta",
    appStoreUrl: "#",
    privacyUrl: "/vido-ai/privacy-policy",
  },
  {
    slug: "glowria",
    name: "Glowria: Skincare Routine",
    tag: "> AI-POWERED SKINCARE COMPANION",
    description:
      "Scan your face for an instant Skin Health Score, build your morning and evening routine, and track your glow-up over time. Skincare turned into a game you actually want to play.",
    features: [
      "AI skin analysis across 5 dimensions",
      "Routine tracking with glow streaks & badges",
      "Weekly glow reports with AI insights",
    ],
    accent: "green",
    appStoreUrl: "https://apps.apple.com/us/app/glowria-skincare-routine/id6762101631",
    privacyUrl: "/glowria/privacy-policy",
  },
]

export const SITE = {
  brand: "SHEN'S DESIGN",
  email: "support@aishen.mobi",
  provider: "hongmei shen",
  url: "https://aishen.mobi",
}
