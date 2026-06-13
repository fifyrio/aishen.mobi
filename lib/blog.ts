import type { Accent } from "./products"

export type BlogCategory =
  | "Skincare 101"
  | "Ingredients"
  | "Routines"
  | "Seasonal"
  | "Nutrition"

export interface ProductCallout {
  name: string
  description: string
}

export interface BlogArticle {
  slug: string
  title: string
  category: BlogCategory
  /** SEO meta description / list excerpt (~150 chars). */
  description: string
  readTime: number
  publishedAt: string // ISO date
  image: string // /images/blog/{slug}.jpg
  /** Markdown body: supports ## headings, **bold**, and blank-line paragraphs. */
  body: string
  productCallout?: ProductCallout
}

export const CATEGORY_ACCENT: Record<BlogCategory, Accent> = {
  "Skincare 101": "cyan",
  Ingredients: "purple",
  Routines: "magenta",
  Seasonal: "orange",
  Nutrition: "green",
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Skincare 101",
  "Ingredients",
  "Routines",
  "Seasonal",
  "Nutrition",
]

export const articles: BlogArticle[] = [
  {
    slug: "serum-layering",
    title: "How to Layer Serums the Right Way",
    category: "Skincare 101",
    description:
      "Learn the golden rule of serum layering — thinnest to thickest — so every active absorbs properly and your skincare routine actually works.",
    readTime: 5,
    publishedAt: "2026-06-10",
    image: "/images/blog/serum-layering.jpg",
    body: "Understanding the alchemy of skincare begins with the golden rule of texture: **thinnest to thickest**. Serums are highly concentrated formulations designed to deliver active ingredients deep into the epidermis. When multiple serums are used, the sequence determines their efficacy.\n\nA water-based serum applied over a rich, occlusive oil will simply sit on the surface, unable to penetrate the lipid barrier, rendering your expensive products ineffective.\n\n## The Golden Rule\n\nTo begin your ritual, always cleanse and tone to dampen the skin. Apply your most aqueous, water-based serums first. These typically contain ingredients like **Vitamin C** or **Hyaluronic Acid**.\n\nGently press the product into the skin rather than rubbing, allowing thirty seconds for the formula to be absorbed before introducing the next layer. This wait time prevents pilling — that frustrating phenomenon where products clump together into tiny balls.\n\n## Moving to Oils\n\nAs you progress, move toward lipid-rich or oil-based serums. These molecules are larger and act as a sealant, locking in the hydration from the previous water-based steps.\n\nIf you are mixing actives like **Retinol** and **AHAs**, exercise caution; sometimes layering is less about the order and more about the timing — using one in the morning and the other in the evening to maintain the delicate balance of your skin's pH levels and moisture barrier.",
    productCallout: {
      name: "Niacinamide Serum",
      description: "Recommended for combination skin",
    },
  },
  {
    slug: "retinol-vs-bakuchiol",
    title: "Retinol vs Bakuchiol: The Gentle Alternative",
    category: "Ingredients",
    description:
      "Retinol vs bakuchiol: how the gentle, plant-based alternative compares for anti-aging, and which one suits sensitive or pregnant skin.",
    readTime: 4,
    publishedAt: "2026-06-05",
    image: "/images/blog/retinol-vs-bakuchiol.jpg",
    body: "Retinol has long been the gold standard in anti-aging skincare, but a plant-based alternative is making waves. **Bakuchiol**, derived from the Psoralea corylifolia plant, promises similar results without the harsh side effects.\n\n## What Makes Retinol So Powerful?\n\nRetinol, a form of Vitamin A, accelerates cell turnover, boosts collagen production, and helps fade dark spots. However, it comes with a notorious adjustment period — redness, peeling, and increased sun sensitivity are common.\n\n## Enter Bakuchiol\n\nStudies published in the British Journal of Dermatology found that bakuchiol and retinol both significantly improved wrinkles and pigmentation after 12 weeks of use. The key difference? **Bakuchiol caused significantly less scaling and stinging.**\n\nBakuchiol is also stable in sunlight, meaning you can use it in your morning routine without worrying about photosensitivity. It's pregnancy-safe, making it a go-to for those who need to avoid retinoids.\n\n## The Verdict\n\nIf your skin tolerates retinol well, it remains the more potent option. But if you have **sensitive skin**, rosacea, or are pregnant, bakuchiol is an excellent alternative that delivers real results.",
  },
  {
    slug: "lymphatic-drainage",
    title: "The Lymphatic Drainage Masterclass",
    category: "Routines",
    description:
      "A step-by-step facial lymphatic drainage massage to reduce puffiness, boost circulation, and reveal a natural glow in just five minutes.",
    readTime: 12,
    publishedAt: "2026-05-28",
    image: "/images/blog/lymphatic-drainage.jpg",
    body: "Lymphatic drainage massage is one of the most underrated techniques in skincare. By gently stimulating the lymphatic system, you can reduce puffiness, improve circulation, and give your skin a natural glow.\n\n## Why Lymphatic Drainage Works\n\nYour lymphatic system is responsible for removing toxins and excess fluid from tissues. Unlike the circulatory system, it has no pump — it relies on muscle movement and manual stimulation.\n\n## The 5-Minute Routine\n\n**Step 1:** Start at the collarbones. Use light, sweeping motions downward to open the lymph nodes.\n\n**Step 2:** Move to the neck. Using your fingertips, stroke from behind the ears down to the collarbones.\n\n**Step 3:** Work the jawline. Glide from the chin along the jawline toward the ears with gentle pressure.\n\n**Step 4:** Address the cheeks. Use upward and outward strokes from the nose toward the temples.\n\n**Step 5:** Finish with the forehead. Sweep from the center outward toward the temples, then down to the ears.\n\nRepeat each movement 5-7 times. Always use a facial oil or serum to reduce friction.",
    productCallout: {
      name: "Rosehip Facial Oil",
      description: "Perfect for lymphatic massage",
    },
  },
  {
    slug: "spring-skincare",
    title: "Spring Cleaning Your Skincare Shelf",
    category: "Seasonal",
    description:
      "How to transition your skincare routine for spring — what to swap out, what to add, and why lighter textures beat heavy winter creams.",
    readTime: 6,
    publishedAt: "2026-05-20",
    image: "/images/blog/spring-skincare.jpg",
    body: "As the seasons change, so should your skincare routine. The heavy creams and rich oils that saved your skin in winter can cause breakouts and congestion in warmer months.\n\n## What to Swap Out\n\n**Heavy moisturizers** become a switch to a lightweight gel-cream or water-based moisturizer. Your skin produces more oil in warmer weather and doesn't need the extra occlusion.\n\n**Thick cleansers** give way to a gentle foaming or gel cleanser. The lighter texture is better at removing sweat and excess sebum without over-stripping.\n\n## What to Add\n\n**SPF upgrade.** If you've been using SPF 30, consider bumping to SPF 50 for spring and summer. The UV index increases significantly.\n\n**Vitamin C serum.** Spring is the perfect time to introduce an antioxidant serum. It provides an extra layer of protection against environmental damage and brightens winter-dull skin.\n\n**Exfoliation.** Increase your exfoliation frequency slightly. A gentle AHA or PHA 2-3 times a week helps shed the dry skin accumulated over winter.\n\n## Check Expiration Dates\n\nMost skincare products last 12 months after opening. If that moisturizer has been sitting in your cabinet since last spring, it's time to let it go.",
  },
  {
    slug: "gut-skin-connection",
    title: "The Gut-Skin Connection Decoded",
    category: "Nutrition",
    description:
      "The gut-skin axis explained: which foods calm inflammation and clear skin, and which ones trigger breakouts and premature aging.",
    readTime: 8,
    publishedAt: "2026-05-12",
    image: "/images/blog/gut-skin-connection.jpg",
    body: "The state of your gut microbiome has a direct impact on your skin health. Research in dermatology increasingly supports the **gut-skin axis** — a bidirectional communication system between your digestive tract and your skin.\n\n## The Science\n\nWhen your gut is inflamed or imbalanced, it can trigger systemic inflammation that manifests as acne, eczema, rosacea, and premature aging. A disrupted gut barrier — often called **leaky gut** — allows toxins to enter the bloodstream, which the skin then tries to expel.\n\n## Foods That Help Your Skin\n\n**Fermented foods** like yogurt, kefir, kimchi, and sauerkraut introduce beneficial bacteria that strengthen your gut lining.\n\n**Omega-3 fatty acids** from salmon, walnuts, and flaxseeds reduce inflammation throughout the body, including the skin.\n\n**Colorful vegetables** provide polyphenols and antioxidants that feed beneficial gut bacteria and protect skin cells from oxidative damage.\n\n## Foods That Harm Your Skin\n\n**High-sugar foods** cause insulin spikes that increase sebum production and inflammation.\n\n**Processed dairy** may worsen acne in some individuals due to hormonal content.\n\n**Alcohol** disrupts gut flora, dehydrates skin, and impairs the liver's ability to detoxify.\n\n## A Simple Protocol\n\nTry a 4-week gut-reset: eliminate processed foods, add a daily probiotic, and increase fiber intake to 30g per day. Most people see visible skin improvements within 2-3 weeks.",
    productCallout: {
      name: "Probiotic Complex",
      description: "Supports gut-skin axis health",
    },
  },
  {
    slug: "double-cleansing",
    title: "The Art of Double Cleansing",
    category: "Skincare 101",
    description:
      "Master double cleansing — the oil-then-water method that removes sunscreen, makeup, and pollution without stripping your skin barrier.",
    readTime: 4,
    publishedAt: "2026-05-04",
    image: "/images/blog/double-cleansing.jpg",
    body: "Double cleansing is the foundation of Korean and Japanese skincare routines, and for good reason. A single cleanse often isn't enough to remove the layers of sunscreen, makeup, and environmental pollutants that accumulate throughout the day.\n\n## How It Works\n\n**Step 1: Oil-based cleanser.** An oil cleanser dissolves oil-based impurities — sunscreen, makeup, and sebum. Massage it onto dry skin for 60 seconds, then rinse with lukewarm water.\n\n**Step 2: Water-based cleanser.** Follow with a gentle water-based cleanser to remove any remaining residue, sweat, and water-based impurities.\n\n## When to Double Cleanse\n\nDouble cleansing is most beneficial in the evening, after a full day of product and pollution exposure. In the morning, a single gentle cleanser — or even just water — is usually sufficient.\n\n## Common Mistakes\n\n**Using harsh cleansers.** The goal is thorough but gentle cleaning. If your skin feels tight or squeaky after cleansing, your products are too stripping.\n\n**Skipping the oil step.** Many people with oily skin fear oil cleansers, but they actually help regulate sebum production by dissolving excess oil without disrupting the moisture barrier.\n\n**Over-cleansing.** If you didn't wear sunscreen or makeup, a single gentle cleanse is fine. Listen to your skin.",
  },
  {
    slug: "hydration-vs-moisture",
    title: "Hydration vs Moisture: Know the Difference",
    category: "Skincare 101",
    description:
      "Hydration vs moisture: the key difference between water and oil in skincare, and how to fix tight, dull, or flaky skin for good.",
    readTime: 5,
    publishedAt: "2026-04-26",
    image: "/images/blog/hydration-vs-moisture.jpg",
    body: "These two terms are often used interchangeably, but they address fundamentally different skin needs. Understanding the distinction is key to building an effective routine.\n\n## Hydration = Water\n\nHydration refers to the water content within your skin cells. **Humectants** like hyaluronic acid, glycerin, and aloe vera attract water molecules and draw them into the skin.\n\nDehydrated skin lacks water and often feels tight, looks dull, and shows fine lines more prominently — even if it's oily.\n\n## Moisture = Oil\n\nMoisture refers to the lipid layer on your skin's surface. **Emollients** and **occlusives** like ceramides, squalane, and shea butter fill in gaps between skin cells and create a barrier to prevent water loss.\n\nDry skin lacks oil and may feel rough, flaky, or irritated.\n\n## The Fix\n\nMany people need both. The ideal approach is to **hydrate first, then moisturize** — apply a hyaluronic acid serum to damp skin, then seal it with a moisturizer containing ceramides.\n\nIf your skin is oily but still feels tight, you likely need hydration, not more moisture. A lightweight gel with hyaluronic acid can transform oily, dehydrated skin.",
    productCallout: {
      name: "Hyaluronic Acid Serum",
      description: "Deep hydration for all skin types",
    },
  },
  {
    slug: "spf-guide",
    title: "Your Complete SPF Guide",
    category: "Skincare 101",
    description:
      "Your complete SPF guide: chemical vs mineral sunscreen, how much to apply, reapplication rules, and the SPF myths worth ignoring.",
    readTime: 7,
    publishedAt: "2026-04-18",
    image: "/images/blog/spf-guide.jpg",
    body: "Sunscreen is the single most important product in your skincare routine. No amount of serums, retinol, or expensive treatments can undo the damage caused by unprotected UV exposure.\n\n## Chemical vs Mineral\n\n**Chemical sunscreens** contain organic compounds like avobenzone and octisalate that absorb UV rays and convert them to heat. They tend to be lightweight and blend invisibly.\n\n**Mineral sunscreens** use zinc oxide or titanium dioxide to physically block and reflect UV rays. They're gentler on sensitive skin but can leave a white cast.\n\n## How Much to Apply\n\nThe answer is always **more than you think**. For your face alone, you need approximately 1/4 teaspoon — that's about two finger-lengths of product. Most people apply only 25-50% of the recommended amount.\n\n## Reapplication Rules\n\nReapply every 2 hours when outdoors, or immediately after swimming or heavy sweating. Indoor reapplication is debated, but if you sit near windows, a midday reapplication is wise.\n\n## SPF Myths Debunked\n\n**SPF 100 is not twice as good as SPF 50.** SPF 30 blocks 97% of UVB rays, SPF 50 blocks 98%, and SPF 100 blocks 99%. The difference is marginal — proper application matters far more.\n\n**You need sunscreen on cloudy days.** Up to 80% of UV rays penetrate clouds. Rain or shine, SPF is non-negotiable.",
    productCallout: {
      name: "Mineral SPF 50",
      description: "Lightweight, no white cast",
    },
  },
  {
    slug: "niacinamide-explained",
    title: "Niacinamide: The Multitasking Powerhouse",
    category: "Ingredients",
    description:
      "Niacinamide (Vitamin B3) explained: how it strengthens your barrier, controls oil, and fades dark spots — plus the ideal concentration to use.",
    readTime: 5,
    publishedAt: "2026-04-10",
    image: "/images/blog/niacinamide-explained.jpg",
    body: "If there's one ingredient that earns its place in almost every routine, it's **niacinamide** — a form of Vitamin B3 that quietly does the work of half a dozen products.\n\n## What It Actually Does\n\nNiacinamide strengthens the skin barrier by boosting ceramide production, which means less moisture loss and more resilience against irritation. It also **regulates sebum**, making it a favorite for oily and combination skin.\n\n## The Brightening Bonus\n\nBeyond barrier support, niacinamide interrupts the transfer of pigment to skin cells, gradually fading dark spots and post-acne marks. Unlike harsher brighteners, it does this without sun sensitivity.\n\n## How to Use It\n\nA concentration of **2-5%** is the sweet spot for most people — higher isn't necessarily better and can trigger flushing in sensitive skin. Apply after water-based serums and before heavier creams.\n\nNiacinamide plays well with nearly everything, including retinol, hyaluronic acid, and peptides. The old myth that it can't be paired with Vitamin C has largely been debunked — modern formulations are stable together.",
    productCallout: {
      name: "Niacinamide 5% Serum",
      description: "Balances oil and fades marks",
    },
  },
  {
    slug: "vitamin-c-guide",
    title: "Vitamin C: Brightening Done Right",
    category: "Ingredients",
    description:
      "How to use Vitamin C serum the right way: choosing the best form, when to apply it, and how to stop it oxidizing into a useless brown liquid.",
    readTime: 6,
    publishedAt: "2026-04-02",
    image: "/images/blog/vitamin-c-guide.jpg",
    body: "Vitamin C is the most popular antioxidant in skincare — and the most misunderstood. Used correctly, it brightens, protects, and supports collagen. Used carelessly, it oxidizes into an ineffective brown liquid.\n\n## Why Antioxidants Matter\n\nThroughout the day, UV light and pollution generate free radicals that damage skin cells and accelerate aging. Vitamin C **neutralizes these free radicals**, acting as a shield that sunscreen alone can't provide.\n\n## Choosing a Form\n\n**L-Ascorbic Acid** is the gold standard — most researched, most potent, but also the least stable. Look for concentrations of 10-20% in opaque, air-tight packaging.\n\n**Derivatives** like sodium ascorbyl phosphate or THD ascorbate are gentler and more stable, ideal for sensitive skin, though slightly less potent.\n\n## How to Use It\n\nApply Vitamin C in the **morning**, after cleansing and before moisturizer and SPF. The antioxidant boost pairs perfectly with sunscreen for daytime defense.\n\nStore it away from light and heat. If your serum turns dark orange or brown, it has oxidized and lost effectiveness — time to replace it.",
  },
  {
    slug: "morning-routine",
    title: "The 4-Step Morning Routine",
    category: "Routines",
    description:
      "A simple 4-step morning skincare routine focused on protection — cleanse, antioxidant serum, moisturizer, and non-negotiable SPF.",
    readTime: 5,
    publishedAt: "2026-03-25",
    image: "/images/blog/morning-routine.jpg",
    body: "Mornings are about **protection**. Your daytime routine should defend your skin against the free radicals, UV rays, and pollution it will face for the next twelve hours. Here's the minimalist framework.\n\n## Step 1: Gentle Cleanse\n\nUnless you have very oily skin, a splash of lukewarm water or a mild gel cleanser is plenty in the morning. Overnight, your skin only accumulates sweat and the residue of last night's products.\n\n## Step 2: Antioxidant Serum\n\nA **Vitamin C** serum is the ideal morning active. It brightens, supports collagen, and amplifies your sunscreen's protection against environmental damage.\n\n## Step 3: Moisturize\n\nChoose a lightweight, hydrating moisturizer that suits your skin type. This locks in your serum and creates a smooth canvas for sunscreen.\n\n## Step 4: Sunscreen (Non-Negotiable)\n\nFinish with a broad-spectrum **SPF 30 or higher**. This single step does more to prevent visible aging than any serum or treatment. Apply generously and don't forget the neck and ears.\n\nThat's it. Four steps, under five minutes, and your skin is set up for the day.",
  },
  {
    slug: "night-routine",
    title: "Building Your Evening Wind-Down Routine",
    category: "Routines",
    description:
      "Build an effective evening skincare routine for overnight repair: double cleanse, treat with actives, hydrate, and seal it all in.",
    readTime: 7,
    publishedAt: "2026-03-17",
    image: "/images/blog/night-routine.jpg",
    body: "If mornings are about protection, **nights are about repair**. While you sleep, your skin shifts into recovery mode — cell turnover peaks and your barrier rebuilds. Your evening routine should support that work.\n\n## Step 1: Double Cleanse\n\nStart with an oil cleanser to dissolve sunscreen and makeup, then follow with a water-based cleanser. This ensures actives can actually penetrate.\n\n## Step 2: Treat\n\nNighttime is when **active ingredients** shine. This is the moment for retinol, exfoliating acids, or targeted treatments. Introduce one active at a time and alternate nights if your skin is sensitive.\n\n## Step 3: Hydrate\n\nApply a hydrating serum — hyaluronic acid or peptides — to damp skin to draw in moisture and support overnight repair.\n\n## Step 4: Seal\n\nFinish with a richer night cream or facial oil to lock everything in. Occlusive ingredients like squalane and ceramides prevent transepidermal water loss while you sleep.\n\n## A Note on Consistency\n\nThe best routine is the one you'll actually follow. If a ten-step ritual feels overwhelming, a clean-treat-moisturize trio done nightly will outperform an elaborate routine you abandon after a week.",
    productCallout: {
      name: "Retinol Night Cream",
      description: "Supports overnight cell turnover",
    },
  },
  {
    slug: "winter-barrier",
    title: "Winter Barrier Repair Essentials",
    category: "Seasonal",
    description:
      "Winter skincare for a damaged barrier: the ceramides and layering strategy that repair dry, tight, reactive skin in cold weather.",
    readTime: 6,
    publishedAt: "2026-03-09",
    image: "/images/blog/winter-barrier.jpg",
    body: "Cold air, low humidity, and indoor heating form a perfect storm for compromised skin. Winter strips moisture faster than any other season, leaving the barrier cracked, tight, and reactive.\n\n## What's Happening to Your Skin\n\nWhen humidity drops, water evaporates from the skin's surface more quickly — a process called **transepidermal water loss**. Without enough lipids to hold moisture in, the barrier weakens, and irritation, flaking, and redness follow.\n\n## Build Up Your Lipids\n\nSwitch to richer formulas containing **ceramides, cholesterol, and fatty acids** — the three lipids that make up a healthy barrier. These ingredients don't just sit on top; they replenish what cold weather depletes.\n\n## Layer Smart\n\nApply a hydrating humectant serum to damp skin, then seal immediately with a cream containing occlusives. The order matters: humectants draw water in, occlusives keep it from escaping.\n\n## Dial Back Actives\n\nWinter is the time to **reduce exfoliation and strong actives**. A compromised barrier can't tolerate the same retinol frequency it handled in summer. Cut back, and let your skin recover.\n\n## Don't Skip SPF\n\nSnow reflects up to 80% of UV rays. Sunscreen stays essential, even on grey winter days.",
    productCallout: {
      name: "Ceramide Repair Cream",
      description: "Rebuilds the winter barrier",
    },
  },
  {
    slug: "summer-glow",
    title: "Summer-Proof Your Glow",
    category: "Seasonal",
    description:
      "Summer skincare tips: lighter textures, diligent SPF, and antioxidant protection to keep skin balanced through heat, sweat, and sun.",
    readTime: 5,
    publishedAt: "2026-03-01",
    image: "/images/blog/summer-glow.jpg",
    body: "Heat, humidity, sweat, and intense sun call for a lighter, more protective routine. Summer skin produces more oil and faces stronger UV — your products should adapt.\n\n## Lighten Your Textures\n\nSwap heavy creams for **gel-based moisturizers** and lightweight lotions. In humid weather, your skin holds water more easily, so it needs less occlusion.\n\n## Prioritize Protection\n\nUV index peaks in summer, so this is the season to be most diligent about **SPF**. Reapply every two hours outdoors, and consider a higher SPF 50 for long days in the sun.\n\n## Antioxidants Are Your Ally\n\nA morning **Vitamin C** serum becomes even more valuable in summer, neutralizing the extra free radicals generated by stronger sun exposure.\n\n## Manage Shine Without Stripping\n\nResist the urge to over-cleanse oily summer skin. Stripping it only triggers more oil production. Instead, use a gentle cleanser and a niacinamide serum to regulate sebum naturally.\n\n## After-Sun Care\n\nIf you do get too much sun, soothe with aloe and skip actives until redness subsides. Hydration and barrier support speed recovery.",
  },
  {
    slug: "collagen-foods",
    title: "Eat Your Collagen: Foods for Firm Skin",
    category: "Nutrition",
    description:
      "Eat your way to firmer skin: the protein, Vitamin C, and antioxidant-rich foods that support collagen — and the sugar that destroys it.",
    readTime: 7,
    publishedAt: "2026-02-21",
    image: "/images/blog/collagen-foods.jpg",
    body: "Collagen is the protein that keeps skin firm and elastic, but production naturally declines with age. While topical collagen molecules are too large to penetrate the skin, the right diet can support your body's own collagen synthesis from within.\n\n## The Building Blocks\n\nCollagen is made from amino acids — primarily **glycine, proline, and hydroxyproline**. Protein-rich foods like bone broth, chicken, fish, and eggs provide these raw materials.\n\n## The Catalyst: Vitamin C\n\nYour body cannot synthesize collagen without **Vitamin C**. Citrus fruits, bell peppers, strawberries, and broccoli are essential partners to dietary protein — eat them together for maximum effect.\n\n## Antioxidant Protection\n\n**Berries, leafy greens, and colorful vegetables** are rich in antioxidants that protect existing collagen from breakdown caused by free radicals and UV damage.\n\n## Foods That Break Collagen Down\n\n**Excess sugar** triggers a process called glycation, where sugar molecules attach to collagen fibers and make them stiff and brittle. Refined carbs and sugary drinks accelerate this damage.\n\n## A Daily Approach\n\nAim for a palm-sized portion of quality protein at each meal, a daily serving of Vitamin C-rich produce, and a colorful array of vegetables. Consistency over months — not days — is what shows on your skin.",
    productCallout: {
      name: "Marine Collagen Powder",
      description: "Supports skin firmness from within",
    },
  },
  {
    slug: "hydration-foods",
    title: "Hydrating From Within",
    category: "Nutrition",
    description:
      "Hydrate skin from within: the water-rich foods, healthy fats, and daily habits that keep skin plump, glowing, and dewy.",
    readTime: 5,
    publishedAt: "2026-02-13",
    image: "/images/blog/hydration-foods.jpg",
    body: "Glowing, plump skin starts in the kitchen as much as the bathroom cabinet. No serum can fully compensate for chronic dehydration — what you drink and eat shapes how your skin looks and feels.\n\n## Water Is the Foundation\n\nSkin cells need adequate water to function and maintain elasticity. While the exact amount varies by person, persistent under-hydration shows up as **dullness, tightness, and more visible fine lines**.\n\n## Eat Your Water\n\nMany of the most hydrating foods are also nutrient-dense. **Cucumber, watermelon, celery, oranges, and leafy greens** are over 90% water and deliver vitamins and electrolytes alongside hydration.\n\n## Healthy Fats Seal It In\n\n**Omega-3 fatty acids** from salmon, walnuts, and flaxseeds strengthen the skin's lipid barrier, helping it retain the moisture you take in. A diet too low in fat often shows as dry, flaky skin.\n\n## What Dehydrates You\n\n**Caffeine and alcohol** are diuretics that increase fluid loss. They don't have to be eliminated, but balancing them with extra water makes a visible difference.\n\n## A Simple Habit\n\nStart each morning with a large glass of water and aim to include a water-rich food at every meal. Your skin's hydration is a long game won through daily habits.",
  },
]

export function getAllArticles(): BlogArticle[] {
  return [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getRelatedArticles(
  article: BlogArticle,
  limit = 3,
): BlogArticle[] {
  const sameCategory = articles.filter(
    (a) => a.slug !== article.slug && a.category === article.category,
  )
  const others = articles.filter(
    (a) => a.slug !== article.slug && a.category !== article.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}
