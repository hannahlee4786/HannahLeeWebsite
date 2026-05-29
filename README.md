# ✿ My Portfolio — Setup & Deployment Guide

A Y2K-cute portfolio site built with **Next.js 14** and deployed via **Vercel**.

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js 18+ installed → check with `node -v`
- If not: download from https://nodejs.org

### Steps

```bash
# 1. Navigate to this folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

---

## ✏️ What to Customize

### 1. Your Name — `app/page.tsx` line ~12
```tsx
// Change "Your Name" to your real name
hi, i'm <span className={styles.nameAccent}>Your Name</span> ✿
```

### 2. Contact Info — `app/page.tsx` lines ~70-80
```tsx
href="mailto:youremail@usc.edu"   // → your USC email
href="https://github.com/yourusername"   // → your GitHub URL
href="https://linkedin.com/in/yourprofile"   // → your LinkedIn URL
```

### 3. Photos (About page) — `app/page.tsx`
Save your images to `/public/images/` then replace the placeholder `<div>` blocks:

| Placeholder | Your file | Replace the `imgPlaceholder` div with |
|---|---|---|
| ferris wheel pic | `/public/images/ferris-wheel.jpg` | `<Image src="/images/ferris-wheel.jpg" alt="ferris wheel" width={160} height={213} style={{borderRadius:'16px', objectFit:'cover'}} />` |
| legion of honor monet | `/public/images/monet.jpg` | same pattern |
| stonemill matcha | `/public/images/matcha.jpg` | same pattern |

> Add `import Image from 'next/image'` at the top of `app/page.tsx` when you do this.

### 4. Project Descriptions — `app/projects/page.tsx`
Each project has a `descriptionClean` field. Replace the placeholder text with your real description.

### 5. Project Repo Links — `app/projects/page.tsx`
Each project has a `repoLink` field marked with `// ✏️ REPLACE`. Update with your actual GitHub links.

### 6. Project Videos — `app/projects/page.tsx`
Save `.mp4` files to `/public/videos/`, then replace the `mediaPlaceholder` divs with:
```tsx
<video controls style={{width:'100%', borderRadius:'16px'}}>
  <source src="/videos/dance-cam-demo.mp4" type="video/mp4" />
</video>
```

### 7. Project Screenshots — `app/projects/page.tsx`
Save `.png`/`.jpg` files to `/public/images/`, then replace `screenshotPlaceholder` divs with:
```tsx
import Image from 'next/image'
// ...
<Image src="/images/dance-cam-1.png" alt="Dance Cam screenshot" width={200} height={133} style={{borderRadius:'12px'}} />
```

### 8. illoominate Diagram — `app/projects/page.tsx`
Save your diagram to `/public/images/illoominate-diagram.png`, then replace the `mediaPlaceholder` div with:
```tsx
<Image src="/images/illoominate-diagram.png" alt="illoominate architecture" width={500} height={350} style={{borderRadius:'16px', width:'100%', height:'auto'}} />
```

### 9. Involvement Details — `app/involvement/page.tsx`
Update each org's `role`, `period`, `description`, and `highlights` array with your actual info. Marked with `// ✏️ REPLACE`.

---

## 📁 File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          ← root layout (nav lives here)
│   ├── globals.css         ← colors, fonts, global styles
│   ├── page.tsx            ← About / Home page
│   ├── page.module.css
│   ├── projects/
│   │   ├── page.tsx        ← Projects page
│   │   └── page.module.css
│   └── involvement/
│       ├── page.tsx        ← Involvement page
│       └── page.module.css
├── components/
│   ├── Nav.tsx             ← navigation bar
│   └── Nav.module.css
└── public/
    ├── images/             ← ✏️ Put your photos & screenshots here
    └── videos/             ← ✏️ Put your video demos here (create folder)
```

---

## 🌐 Deploying to Vercel

### Option A — GitHub + Vercel (Recommended, auto-deploys on push)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com → Sign up / Log in with GitHub
   - Click **"Add New Project"**
   - Import your `portfolio` repo
   - Framework should auto-detect as **Next.js**
   - Click **Deploy** — done! 🎉

3. **Custom domain** (optional)
   - In Vercel dashboard → your project → Settings → Domains
   - Add e.g. `yourname.dev`

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
# Follow prompts — it handles everything
```

---

## 🛠 Common Issues

**`npm install` fails** → Make sure Node.js 18+ is installed.

**Images not showing** → Make sure files are in `/public/images/` and paths start with `/images/` (not `./public/images/`).

**Videos too large for Vercel** → Vercel has a 100MB limit per file. Host large videos on YouTube (unlisted) or Cloudinary and embed them instead.

**Font not loading** → Check your internet connection. Google Fonts loads on page render.

---

## 🎨 Design Notes

- **Colors**: Defined as CSS variables in `app/globals.css`. Tweak `--pink`, `--yellow`, `--mint`, `--blue`, `--lilac` to change the whole palette.
- **Fonts**: Pacifico (display) + Nunito (body) + Quicksand (UI). Change in `globals.css` `@import` and `--font-*` vars.
- **Checkerboard borders**: Applied with `repeating-conic-gradient` — a CSS-only Y2K touch ✦

---

made with ♡ — USC CS · Bay Area
