# Content Guide — Anwin Shajan Portfolio

This guide tells you **exactly which file to edit** for every type of content change.
You never need to touch any component code — only the files listed below.

---

## 🗺️ Quick Reference

| What you want to change | File to edit |
|---|---|
| Hero name, tagline, description, stats | `src/content/site.ts` → `hero` |
| About bio paragraphs | `src/content/site.ts` → `about.bio[]` |
| About pull-quote | `src/content/site.ts` → `about.pullQuote` |
| About / hero photo | `src/content/site.ts` → `hero.photoSrc` / `about.photoSrc` |
| Social links (email, LinkedIn, GitHub, etc.) | `src/content/site.ts` → `social[]` |
| SEO title & meta description | `src/content/site.ts` → `siteMeta` |
| Add / edit a venture | `src/content/ventures.ts` |
| Add / edit a capability | `src/content/capabilities.ts` |
| Add / edit a blog post / note | `src/content/notes.ts` |
| Add / replace a testimonial | `src/content/testimonials.ts` |

---

## 📝 Editing Content

### Changing hero text

Open `src/content/site.ts` and edit the `hero` object:

```ts
export const hero = {
  name: "Anwin\nShajan",        // \n creates a line break in the display
  badge: "Founder & Builder · Kerala, India",
  tagline: "Building digital ventures that solve real problems.",
  description: "...",
  stats: [
    { label: "Ventures Built", value: "4" },
    // Add or edit stat entries here
  ],
  // ...
}
```

### Changing the About bio

Same file, edit the `about` object:

```ts
export const about = {
  bio: [
    "First paragraph...",
    "Second paragraph...",    // Each string = one <p> tag
    "Third paragraph...",
  ],
  pullQuote: "Your quote text here.",
  photoSrc: "/images/your-photo.png",  // Place image in /public/images/
}
```

### Changing social links

```ts
export const social: SocialLink[] = [
  { platform: "Email", url: "mailto:you@example.com", label: "you@example.com" },
  { platform: "LinkedIn", url: "https://...", label: "linkedin.com/in/you" },
  // Add more entries here
];
```

---

## 🚀 Adding a New Venture

Open `src/content/ventures.ts` and add an object to the `ventures` array:

```ts
{
  name: "My New Venture",
  tagline: "One-line descriptor",
  description: "2-3 sentences about what this venture does and why.",
  tools: ["Next.js", "Supabase", "Tool Name"],   // Tech stack pills
  url: "https://myventure.com",                   // Optional — remove line if no URL
  image: "/images/myventure.png",                 // Optional — place in /public/images/
  status: "Live",                                 // "Live" | "Building" | "Beta"
},
```

**Status badge colours:**
- `"Live"` → green badge
- `"Building"` → amber badge
- `"Beta"` → purple badge

---

## 📝 Publishing a New Note / Blog Post

Open `src/content/notes.ts` and add an object to the `posts` array:

```ts
{
  slug: "my-new-post",           // URL: /notes/my-new-post  — use lowercase-hyphens
  title: "My New Post Title",
  excerpt: "One sentence summary shown on the listing page.",
  date: "2026-08-06",            // ISO date format YYYY-MM-DD
  body: `First paragraph text.

Second paragraph — use a blank line between paragraphs.

Use **double asterisks** for bold text.`,
},
```

The new post will appear automatically in the Notes section and at `/notes/your-slug`.

---

## 💬 Adding a Real Testimonial

Open `src/content/testimonials.ts` and replace a placeholder entry:

```ts
{
  name: "Client Full Name",
  role: "Job Title, Company Name",
  quote: "Their actual quote goes here. 1-3 sentences works best.",
  rating: 5,               // 1–5
  initials: "CN",          // 2 letters shown in avatar circle
  isPlaceholder: false,    // Change to false when real
},
```

---

## 🖼️ Updating the Photo

1. Add your new photo to `/public/images/` (e.g. `anwin_headshot_2026.png`)
2. Open `src/content/site.ts`
3. Update `hero.photoSrc` and/or `about.photoSrc`:
   ```ts
   photoSrc: "/images/anwin_headshot_2026.png",
   ```

**Recommended photo specs:**
- Format: PNG or WebP
- Dimensions: at least 800×1000px
- Aspect ratio: portrait (3:4 or 2:3)

---

## 🌐 Updating the Site URL

If you move to a custom domain (e.g. `anwinshajan.com`):

1. Open `src/content/site.ts`
2. Update `siteUrl`:
   ```ts
   export const siteUrl = "https://anwinshajan.com";
   ```
3. Also update in Vercel project settings → Domains.

---

## ⚙️ Deploying Changes

After editing any file:

```bash
git add .
git commit -m "content: update ventures / add new note / etc."
git push
```

Vercel will automatically redeploy. Changes go live in ~30 seconds.

---

## 📁 File Map

```
src/
  content/
    site.ts          ← Hero, About, Social links, SEO meta
    ventures.ts      ← All venture cards
    capabilities.ts  ← The 5 capability rows
    notes.ts         ← All blog posts / notes
    testimonials.ts  ← Client testimonials
  components/
    Navbar.tsx        ← Top navigation (edit navLinks array inside for nav items)
    Hero.tsx          ← Hero section (reads from content/site.ts)
    Pillars.tsx       ← 4-pillar overview section
    About.tsx         ← About section (reads from content/site.ts)
    Ventures.tsx      ← Venture cards (reads from content/ventures.ts)
    Capabilities.tsx  ← Capability list (reads from content/capabilities.ts)
    Testimonials.tsx  ← Testimonial cards (reads from content/testimonials.ts)
    Notes.tsx         ← Notes listing (reads from content/notes.ts)
    Connect.tsx       ← Footer / Connect section (reads from content/site.ts)
```

---

*Last updated: August 2026 · Anwin Shajan Portfolio*
