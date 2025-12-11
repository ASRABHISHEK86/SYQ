# Vercel Deployment Instructions

## Steps to Deploy Your Updated Project to Vercel

### Prerequisites
- Git repository set up with your project
- Vercel account (sign up at https://vercel.com if you don't have one)
- Your project code committed to Git

### Step 1: Commit Your Changes to Git

1. Open your terminal/command prompt in the project directory
2. Check the status of your changes:
   ```bash
   git status
   ```

3. Add all the modified files:
   ```bash
   git add .
   ```

4. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Update careers page: redirect to external URL and remove careers content"
   ```

5. Push your changes to your Git repository:
   ```bash
   git push origin main
   ```
   (Replace `main` with your branch name if different, e.g., `master`)

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended for first-time setup)

1. Go to https://vercel.com and sign in
2. Click on **"Add New Project"** or **"Import Project"**
3. Import your Git repository:
   - If your repository is on GitHub, GitLab, or Bitbucket, Vercel will automatically detect it
   - Select your repository from the list
4. Configure your project:
   - **Framework Preset**: Select "Vite" or "React" (Vercel should auto-detect)
   - **Root Directory**: Leave as `./` (unless your project is in a subdirectory)
   - **Build Command**: Usually `npm run build` (Vercel auto-detects this)
   - **Output Directory**: Usually `dist` (Vercel auto-detects this)
   - **Install Command**: Usually `npm install` (Vercel auto-detects this)
5. Click **"Deploy"**
6. Wait for the deployment to complete (usually 2-5 minutes)

#### Option B: Deploy via Vercel CLI

1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Navigate to your project directory and deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No** (for first deployment) or **Yes** (for subsequent deployments)
   - Project name? Enter your project name
   - Directory? Press Enter (default: `./`)
   - Override settings? **No**

5. For production deployment:
   ```bash
   vercel --prod
   ```

### Step 3: Verify Deployment

1. After deployment completes, Vercel will provide you with a deployment URL
2. Visit the URL and test the Careers link:
   - Click on "CAREERS" in the navigation menu
   - It should redirect to `https://bes-kappa.vercel.app/`
3. Test the direct `/careers` route:
   - Navigate to `https://your-vercel-url.vercel.app/careers`
   - It should automatically redirect to `https://bes-kappa.vercel.app/`

### Step 4: Automatic Deployments (Already Configured)

Once your project is connected to Vercel:
- **Every push to your main branch** will automatically trigger a new deployment
- Vercel will create preview deployments for pull requests
- You can view all deployments in your Vercel dashboard

### Step 5: Environment Variables (If Needed)

If your project requires environment variables:
1. Go to your project settings in Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add any required variables
4. Redeploy your project for changes to take effect

### Troubleshooting

#### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility (Vercel uses Node 18.x by default)

#### Redirect Not Working
- Clear browser cache and try again
- Check browser console for any JavaScript errors
- Verify the external URL is accessible: `https://bes-kappa.vercel.app/`

#### Changes Not Reflecting
- Ensure you've pushed your changes to Git
- Check that Vercel has pulled the latest commit
- Wait a few minutes for the deployment to complete
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### Additional Notes

- **Custom Domain**: You can add a custom domain in Vercel project settings
- **Analytics**: Vercel Analytics is already integrated in your `App.tsx`
- **Speed Insights**: Vercel Speed Insights is already integrated in your `App.tsx`
- **Preview Deployments**: Every branch push creates a preview URL for testing

### Quick Reference Commands

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to repository
git push origin main

# Deploy to Vercel (if using CLI)
vercel --prod
```

---

**Note**: After pushing your changes to Git, Vercel will automatically detect the changes and redeploy your project. You don't need to manually trigger a deployment if automatic deployments are enabled (which is the default).

