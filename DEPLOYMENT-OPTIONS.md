# Deployment Options

This guide covers various deployment options for Henry's Personal Page, with Vercel being the recommended choice.

## 🚀 Recommended: Vercel

Vercel provides the best integration and performance for this personal website.

### Current Setup (Optimized)

The project has been configured for optimal Vercel deployment with the following optimizations:

#### ✅ Configuration Fixes Applied

1. **Webpack Configuration** (`webpack.config.js`):
   - Fixed CleanWebpackPlugin to prevent dist directory deletion
   - Added proper `output.clean` configuration
   - Enhanced minification settings for production
   - Implemented code splitting for better performance
   - Optimized asset handling and caching

2. **Package.json Scripts**:
   - Modified build script to properly set `NODE_ENV=production`
   - Added `build:dev` script for development builds
   - Optimized development server configuration

3. **Vercel Configuration** (`vercel.json`):
   - Set `framework: null` to prevent auto-detection issues
   - Added static asset caching headers
   - Configured proper SPA routing with rewrites
   - Optimized for performance and SEO

### 🚀 Deploy to Vercel

#### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

#### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the build settings
4. Deployments will trigger on every push

#### Option 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration
5. Click "Deploy"

### ✅ Verification Steps

After deployment, verify the following:

1. **Build Success**: Check that the build completes without errors
2. **File Structure**: Ensure `dist/` directory contains:
   - `index.html`
   - `static/` folder with assets
   - Proper asset paths

3. **Runtime Check**: Test the deployed application:
   - Navigation works correctly
   - Theme switching functions
   - All pages load properly
   - Images and assets display correctly

## 🔄 Alternative: Next.js Migration

If you encounter persistent issues with the current setup, migrating to Next.js provides enhanced Vercel integration.

### Benefits of Next.js

- **Native Vercel Support**: Optimized deployment pipeline
- **Built-in Optimizations**: Automatic static optimization
- **Better Performance**: Server-side rendering capabilities
- **Enhanced SEO**: Better search engine optimization
- **Developer Experience**: Improved development tools

### Migration Process

#### 1. Create Next.js Project

```bash
# Create new Next.js project
npx create-next-app@latest my-nextjs-app --typescript --tailwind --eslint

# Or without TypeScript
npx create-next-app@latest my-nextjs-app --tailwind --eslint
```

#### 2. Migrate Components

Your current structure maps well to Next.js:

```
Current Structure          →  Next.js Structure
src/components/            →  components/
src/pages/                 →  src/app/ (App Router)
src/layouts/               →  src/components/layouts/
src/lib/                   →  src/lib/ (no change needed)
src/assets/                →  public/
```

#### 3. Update Routing

Convert React Router routes to Next.js App Router:

```jsx
// Current: React Router
<Route path="/projects" element={<ProjectsPage />} />

// Next.js: App Router
// app/projects/page.js
export default function ProjectsPage() {
  return <ProjectsPage />;
}
```

#### 4. Migrate Styling

- Convert SCSS to CSS Modules or Tailwind CSS
- Update Emotion usage to Next.js compatible approach
- Migrate theme system to Next.js context

## 🌐 Other Deployment Options

### GitHub Pages

1. **Configure Homepage**:
   ```json
   {
     "homepage": "https://{username}.github.io/{repository-name}"
   }
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables**: Set `NODE_ENV=production`

### AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront for CDN and HTTPS
4. Set up custom domain if needed

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 Troubleshooting

### Common Issues

#### "No Output Directory named 'dist' found"

**Causes**:
- Build process interrupted
- NODE_ENV not set to production
- File system permissions
- Antivirus software interference

**Solutions**:
1. Verify build command: `npm run build`
2. Check NODE_ENV: `echo $NODE_ENV`
3. Clear cache: `rm -rf node_modules/.cache`
4. Reinstall dependencies: `rm -rf node_modules && npm install`

#### Build Failures

**Common Causes**:
- Missing dependencies
- Syntax errors
- Webpack configuration issues
- Memory limitations

**Debugging Steps**:
1. Check build logs for specific errors
2. Run `npm run build:dev` for detailed output
3. Verify all imports and dependencies
4. Check webpack configuration

#### Runtime Errors

**Common Issues**:
- Missing environment variables
- Incorrect asset paths
- CORS issues
- Browser compatibility

**Solutions**:
1. Check browser console for errors
2. Verify asset paths in build output
3. Test in different browsers
4. Check network tab for failed requests

### Performance Optimization

#### Build Optimization
- Enable code splitting
- Optimize bundle size
- Compress assets
- Use CDN for external libraries

#### Runtime Optimization
- Implement lazy loading
- Optimize images
- Minimize re-renders
- Use React.memo for expensive components

## 📊 Monitoring and Analytics

### Vercel Analytics
- Built-in performance monitoring
- Real user metrics
- Error tracking
- Core Web Vitals

### Custom Analytics
- Google Analytics 4
- Hotjar for user behavior
- Sentry for error tracking
- Custom performance monitoring

## 🔒 Security Considerations

### Production Checklist
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] Dependencies updated
- [ ] Build artifacts cleaned
- [ ] Error messages sanitized

### Security Headers
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

---

**Need Help?** Check the [main README](./README.md) for more information or open an issue on GitHub. 