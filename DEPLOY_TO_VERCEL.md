# 🚀 How to Deploy Your Next.js BMW Luxury Replica to Vercel

This guide will walk you step-by-step through deploying your Next.js luxury BMW replica website to [Vercel](https://vercel.com), the recommended platform for Next.js apps.

---

## 1. Prerequisites

- Your project code is ready and runs locally (`npm run dev` works)
- You have a **GitHub account**
- You have pushed your project to a **GitHub repository** (required for Vercel integration)

---

## 2. Push Your Code to GitHub

1. **Create a new GitHub repository** (if you haven’t already).
2. **Initialize git** in your project folder (if not already done):

   ```bash
   git init
   ```

3. **Add your files and commit**:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

4. **Add the remote and push**:

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## 3. Create a Free Account on Vercel

1. Go to [https://vercel.com/signup](https://vercel.com/signup)
2. Sign up using your **GitHub account** for seamless integration.

---

## 4. Import Your Project to Vercel

1. **After signing in**, click the “New Project” button on your Vercel dashboard.
2. **Authorize Vercel** to access your GitHub account and select the repository you want to deploy.

---

## 5. Configure Project Settings

- **Framework Preset:** Vercel auto-detects Next.js.
- **Root Directory:** Usually just `/` unless your project lives in a subfolder.
- **Environment Variables:** If your project uses any (not needed for the starter), you can add them here.

Usually, the default settings are perfect for a Next.js app.

---

## 6. Deploy!

- Click the **"Deploy"** button.
- Vercel will build and deploy your project.
- In a minute or two, you’ll get a live URL (e.g., `https://your-project-name.vercel.app`).

---

## 7. Make Changes? Just Push to GitHub!

Every time you push changes to your GitHub repository, Vercel will **automatically rebuild and redeploy** your site.

---

## 8. Custom Domain (Optional)

1. In your Vercel dashboard, go to your project.
2. Click **"Settings" → "Domains"**.
3. Add a custom domain and follow the instructions to point your DNS records to Vercel.

---

## 9. Troubleshooting

- **Build Error?** Check the "Deployments" tab for logs.
- **Missing 3D Model?** Make sure your `.glb` file is in the correct `/public/models/` folder and committed to Git.
- **Styling Issues?** Confirm Tailwind is installed and imported in `styles/globals.css`.

---

## 10. Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

---

**Your BMW luxury replica website will now be online for the world to see! 🚗✨**