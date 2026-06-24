# Bharat Paints Website — Build & Deployment Instructions

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager
- Terminal/Command prompt access

---

## 📦 Step 1: Install Dependencies

```bash
cd /mnt/project
npm install
```

This will install:
- Next.js 15 with App Router
- React 19
- Tailwind CSS 3
- TypeScript 5
- Fraunces & Inter fonts
- Form validation libraries

**Expected time:** 2-3 minutes (depends on internet speed)

---

## 🏗️ Step 2: Run Development Server

```bash
npm run dev
```

This command:
- Starts the development server
- Opens on `http://localhost:3000`
- Enables hot-reload (changes auto-refresh)
- Shows compilation errors in terminal

**Output should show:**
```
> bharat-paints@0.1.0 dev
> next dev

  ▲ Next.js 15.1.0
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Ready in 1.2s
```

### 🔍 What to Check
1. **Homepage loads** — All sections visible
2. **Mobile menu works** — Click hamburger on small screens
3. **Forms are interactive** — Try entering data in contact form
4. **Hover effects visible** — Mouse over cards and buttons
5. **Chatbot link works** — Click "Launch Paint Expert"

**Keep terminal running. Press `Ctrl+C` to stop.**

---

## 🔨 Step 3: Build for Production

```bash
npm run build
```

This command:
- Compiles TypeScript to JavaScript
- Optimizes all components
- Creates `.next/` folder with production build
- Performs tree-shaking (removes unused code)
- Generates static exports where possible

**Output should show:**
```
> bharat-paints@0.1.0 build
> next build

  ▲ Next.js 15.1.0

  ✓ Creating an optimized production build
  ✓ Compiled successfully

Route (kind)                Size     First Load JS
/                          2.3 kB        87.5 kB
/about                     1.2 kB        86.7 kB
/chatbot                   0.8 kB        86.3 kB
...
```

**This step is required before deployment.**

---

## 🌐 Step 4: Start Production Server (Optional)

After building, you can test the production build locally:

```bash
npm start
```

**Access on:** `http://localhost:3000`

This runs the optimized production version.

---

## 📋 Command Reference

| Command | Purpose | Use Case |
|---------|---------|----------|
| `npm run dev` | Development server with hot-reload | During development |
| `npm run build` | Create production build | Before deploying |
| `npm start` | Run production build locally | Testing before deploy |
| `npm run lint` | Check code quality | Optional quality check |

---

## 📂 Project Structure After Build

```
/mnt/project/
├── .next/                 ← Production build (auto-generated)
├── app/                   ← Routes and pages
├── components/            ← Reusable components
├── content/               ← Data files
├── public/                ← Static assets
│   ├── chatbot/          ← Existing chatbot (untouched)
│   └── *.{jpg,png,webp}  ← Images
├── types/                 ← TypeScript types
├── lib/                   ← Utilities
├── globals.css            ← Design system styles
├── tailwind_config.ts     ← Tailwind configuration
├── tsconfig.json          ← TypeScript config
├── package.json           ← Dependencies
└── next.config.mjs        ← Next.js config
```

---

## 🚀 Deployment to Vercel (Recommended)

### Option A: Using Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Follow prompts:
#    - Link to project: Yes
#    - Scope: Select your team
#    - Name: bharat-paints
#    - Directory: ./
#    - Override build settings: No
```

**Result:** Your site is live at `https://bharat-paints.vercel.app`

### Option B: Using GitHub (Recommended)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit: Bharat Paints website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bharat-paints.git
git push -u origin main

# 2. Go to https://vercel.com
# 3. Connect GitHub account
# 4. Click "New Project"
# 5. Select "bharat-paints" repo
# 6. Deploy (auto-deploys on every push to main)
```

---

## ⚙️ Environment Variables (Phase 2)

Create `.env.local` file in project root:

```bash
# Google Sheets API (Phase 2)
NEXT_PUBLIC_SHEET_ID=your-sheet-id
NEXT_PUBLIC_SHEET_API_KEY=your-api-key

# Resend Email (Phase 2)
RESEND_API_KEY=your-resend-key

# Firebase (Phase 2)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
# ... other Firebase config

# Google Analytics (Phase 2)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note:** These are for Phase 2 (form integrations). Phase 1 works without them.

---

## 🔍 Troubleshooting

### Error: "Port 3000 already in use"
```bash
# Use different port
npm run dev -- -p 3001
```

### Error: "Module not found"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors on build
```bash
# Check for type issues
npx tsc --noEmit

# Fix common issues
npm run build -- --debug
```

### Chatbot not loading
- Verify `/public/chatbot/index.html` exists
- Check browser console for CORS errors
- Ensure static assets are served correctly

---

## ✅ Verification Checklist

After `npm run dev`, verify:

- [ ] Homepage loads at localhost:3000
- [ ] All 9 sections visible (Hero, Trust, Divisions, Brands, Process, AI, Projects, Testimonials, Contact)
- [ ] Header is sticky when scrolling
- [ ] Mobile menu works on small screens
- [ ] Contact form validates (try submitting empty)
- [ ] Contact form shows success message after submission
- [ ] All buttons have hover effects
- [ ] Division cards are clickable (links work)
- [ ] Brand logos display correctly
- [ ] /chatbot page shows embedded chatbot
- [ ] /about, /quote, /privacy, /terms pages load
- [ ] Footer is visible on all pages
- [ ] No TypeScript errors in terminal
- [ ] No console errors in browser

---

## 📊 Performance Metrics (After Build)

Expected lighthouse scores on Vercel:
- **Performance:** 85+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 95+

Check your score at: `https://www.pagespeed.insights.com`

---

## 🔐 Security Notes

### Pre-Deployment
- [ ] Remove console.log() statements from production code
- [ ] Verify no API keys in public files
- [ ] Check `.gitignore` excludes `.env.local`
- [ ] Enable HTTPS in Vercel dashboard

### SSL Certificate
- Vercel provides free SSL automatically
- All traffic is encrypted (HTTPS only)

---

## 📞 Support & Next Steps

### For Deployment Issues
1. Check Vercel dashboard: `https://vercel.com/dashboard`
2. View build logs for errors
3. Rollback to previous version if needed

### For Phase 2 Integration
See `PHASE_2_INTEGRATION.md` for:
- Google Sheets API setup
- Resend email configuration
- Firebase initialization
- Analytics integration

### For Content Updates
- Update data in `content/` folder
- Replace placeholder testimonials
- Add real project photos to `public/`
- No rebuild needed for data files (hot-reload in dev)

---

## 🎯 Final Notes

- **Development:** Always run `npm run dev` to see live changes
- **Building:** Always run `npm run build` before deploying
- **Chatbot:** Preserved as static asset in `public/chatbot/` — no changes made
- **Styles:** All CSS in Tailwind — edit `tailwind_config.ts` or add to `globals.css`
- **Components:** Reusable and well-organized — easy to extend

**Deployment is one command away:**
```bash
npm run build && vercel deploy
```

---

**Happy coding! 🚀**
