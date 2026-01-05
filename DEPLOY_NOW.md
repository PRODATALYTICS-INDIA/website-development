# 🚀 Deploy Now - Quick Steps

## Step 1: Go to Netlify
Open: **https://app.netlify.com**

## Step 2: Sign Up / Login
- If you don't have an account, click "Sign up" (free)
- You can sign up with GitHub, Email, or Google

## Step 3: Deploy
1. Click **"Add new site"** button (top right)
2. Click **"Deploy manually"** (or drag and drop)
3. **Drag and drop** your entire `website-development` folder into the upload area
4. Wait ~30-60 seconds

## Step 4: Get Your URL
- Your site will be live at: `https://random-name-12345.netlify.app`
- The URL will be shown on the deployment page
- You can rename it in Site settings → General → Change site name

## That's it! Your site is live! 🎉

---

**Alternative:** If you want to use command line later:
```bash
npx netlify-cli login
npx netlify-cli deploy --dir=. --prod
```

