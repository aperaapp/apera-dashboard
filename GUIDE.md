# Apera Dashboard Setup Guide

This guide will help you set up and run the Apera admin dashboard, a Nuxt.js web application that connects to the same Supabase backend as the mobile app.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Backend Connection Configuration](#backend-connection-configuration)
4. [Environment Variables](#environment-variables)
5. [Running the Dashboard](#running-the-dashboard)
6. [Building for Production](#building-for-production)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have the following installed:

### Required Software

1. **Node.js** (v20.12.0 or higher - see `package.json` volta config)
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use [Volta](https://volta.sh/) for version management
   - Verify: `node --version`

2. **pnpm** (recommended) or **npm**
   - pnpm: `npm install -g pnpm`
   - Verify: `pnpm --version` or `npm --version`

3. **Git**
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify: `git --version`

### Verify Installations

```bash
node --version    # Should be v20.12.0+
pnpm --version   # Should be v8.0+
git --version
```

---

## Initial Setup

### Step 1: Navigate to Project

```bash
cd apera-v2/apera-dashboard
```

### Step 2: Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

This will install:
- Nuxt 3 framework
- Nuxt UI Pro components
- Supabase client
- Vue Query for data fetching
- Pinia for state management
- And other dependencies...

### Step 3: Apply Patches (if needed)

The project uses `patch-package` for patching dependencies. Patches are applied automatically after install, but you can manually apply:

```bash
pnpm postinstall
# or
npm run postinstall
```

---

## Backend Connection Configuration

The dashboard connects to the same Supabase backend as the mobile app. You need to configure the connection.

### Step 1: Get Backend Credentials

You need the following from your Supabase project (same as mobile app):

1. **Supabase Project URL**
   - Format: `https://[your-project-ref].supabase.co`
   - Get from: Supabase Dashboard → Settings → API → Project URL

2. **Supabase Anon Key**
   - Format: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - Get from: Supabase Dashboard → Settings → API → Project API keys → `anon` `public`

**Important**: Use the same Supabase project that the mobile app uses to ensure data consistency.

### Step 2: Configure Supabase Connection

The dashboard uses the `@nuxtjs/supabase` module. Configure it via environment variables.

#### Option A: Environment Variables (Recommended)

Create a `.env` file in the `apera-dashboard/` directory:

```bash
# Supabase Configuration
SUPABASE_URL=https://[your-project-ref].supabase.co
SUPABASE_KEY=[your-anon-key]

# Optional: Service Role Key (for admin operations)
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]
```

**Note**: 
- Never commit `.env` files to git (should be in `.gitignore`)
- The `SUPABASE_KEY` is the anon/public key (same as mobile app)
- `SUPABASE_SERVICE_ROLE_KEY` is optional and should be kept secret

#### Option B: Runtime Config (Alternative)

Edit `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || 'https://[your-project-ref].supabase.co',
      supabaseKey: process.env.SUPABASE_KEY || '[your-anon-key]',
    },
    // Private (server-side only)
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },
  // ... rest of config
})
```

### Step 3: Verify Supabase Module Configuration

The dashboard uses `@nuxtjs/supabase` module configured in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    // ... other modules
  ],
  supabase: {
    redirect: false, // Disable automatic redirects
  },
})
```

The module automatically:
- Creates a Supabase client
- Handles authentication
- Provides composables: `useSupabaseClient()`, `useSupabaseUser()`, etc.

### Step 4: Generate TypeScript Types

After setting up the backend, generate TypeScript types from your Supabase schema:

```bash
npm run gen-ts
```

This command:
- Connects to your Supabase project
- Generates TypeScript types from the database schema
- Saves them to `app/types/supabase.types.ts`

**Note**: The project ID is hardcoded in `package.json`. Update it if using a different Supabase project:

```json
{
  "scripts": {
    "gen-ts": "npx --yes supabase gen types typescript --project-id [your-project-id] --schema public > ./app/types/supabase.types.ts"
  }
}
```

---

## Environment Variables

### Required Variables

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `SUPABASE_URL` | Your Supabase project URL | Supabase Dashboard → Settings → API |
| `SUPABASE_KEY` | Supabase anonymous/public key | Supabase Dashboard → Settings → API |

### Optional Variables

| Variable | Description | When to Use |
|----------|-------------|-------------|
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | For admin operations that bypass RLS |

### Environment-Specific Configuration

#### Local Development

Create `.env`:
```bash
SUPABASE_URL=https://[your-project-ref].supabase.co
SUPABASE_KEY=[your-anon-key]
```

Or for local Supabase:
```bash
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_KEY=[local-anon-key]
```

#### Production

Set environment variables in your hosting platform:

- **Cloudflare Pages**: Dashboard → Settings → Environment Variables
- **Vercel**: Dashboard → Settings → Environment Variables
- **Netlify**: Dashboard → Site Settings → Environment Variables

---

## Running the Dashboard

### Development Mode

1. **Start the development server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

2. **Access the dashboard**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - The server will hot-reload on file changes

### Development Workflow

1. **Start dev server**:
   ```bash
   pnpm dev
   ```

2. **Make changes**: The app will automatically reload

3. **Check console**: Open browser DevTools for logs and errors

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm generate` | Generate static site |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm gen-ts` | Generate Supabase TypeScript types |

---

## Building for Production

### Step 1: Build the Application

```bash
# Build for production
pnpm build
# or
npm run build
```

This creates a `.output` directory with the production build.

### Step 2: Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

Opens the production build locally for testing.

### Step 3: Deploy

The dashboard is configured for **Cloudflare Pages** deployment (see `nuxt.config.ts`):

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare_pages",
  },
})
```

#### Deploy to Cloudflare Pages

1. **Connect Repository**:
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Connect your Git repository

2. **Configure Build Settings**:
   - **Build command**: `pnpm build` or `npm run build`
   - **Build output directory**: `.output/public`
   - **Root directory**: `apera-dashboard`

3. **Set Environment Variables**:
   - Go to Settings → Environment Variables
   - Add:
     - `SUPABASE_URL`
     - `SUPABASE_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY` (if needed)

4. **Deploy**:
   - Cloudflare will automatically deploy on push to main branch
   - Or manually trigger deployment

#### Deploy to Other Platforms

**Vercel**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Netlify**:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Static Hosting**:
```bash
# Generate static site
pnpm generate

# Deploy .output/public to any static host
```

---

## Connecting to Backend

### Supabase Connection

The dashboard connects to Supabase through the `@nuxtjs/supabase` module:

```typescript
// In any component or page
const supabase = useSupabaseClient()
const user = useSupabaseUser()

// Example: Query data
const { data, error } = await supabase
  .from('gigs')
  .select('*')
```

### Using Supabase Composables

The module provides several composables:

```typescript
// Get Supabase client
const supabase = useSupabaseClient()

// Get current user
const user = useSupabaseUser()

// Check authentication status
const { data: { session } } = await useSupabaseSession()

// Sign in
const { error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})

// Sign out
await supabase.auth.signOut()
```

### Testing Connection

1. **Check if Supabase is accessible**:
   - Open browser DevTools → Network tab
   - Try logging in through the dashboard
   - Check for API requests to Supabase

2. **Verify Authentication**:
   ```typescript
   // In a page or component
   const user = useSupabaseUser()
   console.log('User:', user.value)
   ```

3. **Test Database Queries**:
   ```typescript
   const supabase = useSupabaseClient()
   const { data, error } = await supabase
     .from('workers')
     .select('*')
     .limit(1)
   console.log('Data:', data, 'Error:', error)
   ```

### Edge Functions

Call Supabase Edge Functions:

```typescript
const supabase = useSupabaseClient()

// Call an Edge Function
const { data, error } = await supabase.functions.invoke('find-worker-for-gig', {
  body: { gig_id: 'some-gig-id' }
})
```

Make sure:
1. Edge Functions are deployed (see backend guide)
2. Functions are accessible
3. RLS policies allow the operation

### Server-Side API Routes

The dashboard has server API routes in `server/api/`:

```typescript
// Example: server/api/gigs.ts
export default defineEventHandler(async (event) => {
  const supabase = useSupabaseClient(event)
  
  const { data, error } = await supabase
    .from('gigs')
    .select('*')
  
  return { data, error }
})
```

Access via:
```typescript
// In a component
const { data } = await useFetch('/api/gigs')
```

---

## Troubleshooting

### Common Issues

#### 1. "Cannot connect to Supabase"

**Symptoms**: Dashboard can't connect to backend, authentication fails

**Solutions**:
- Verify `SUPABASE_URL` is correct in `.env`
- Check `SUPABASE_KEY` is valid
- Ensure Supabase project is running
- Check browser console for errors
- Verify RLS policies allow access

#### 2. "Module not found" errors

**Symptoms**: Import errors, missing modules

**Solutions**:
```bash
# Clear cache and reinstall
rm -rf node_modules .nuxt .output
pnpm install
# or
npm install

# Restart dev server
pnpm dev
```

#### 3. TypeScript Errors

**Symptoms**: Type errors, missing types

**Solutions**:
```bash
# Regenerate types from Supabase
npm run gen-ts

# Restart TypeScript server in your IDE
# VS Code: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

#### 4. Build Fails

**Symptoms**: Production build errors

**Solutions**:
```bash
# Clear build cache
rm -rf .nuxt .output

# Rebuild
pnpm build

# Check for TypeScript errors
pnpm typecheck
```

#### 5. Environment Variables Not Working

**Symptoms**: `undefined` values, connection fails

**Solutions**:
- Ensure `.env` file is in `apera-dashboard/` root
- Restart dev server after changing `.env`
- For production, set variables in hosting platform
- Check `nuxt.config.ts` runtime config

#### 6. Authentication Not Working

**Symptoms**: Can't sign in, session not persisting

**Solutions**:
- Verify Supabase URL and key are correct
- Check Supabase Dashboard → Authentication → Settings
- Verify email confirmation is disabled (if needed)
- Check browser console for errors
- Clear browser cache and cookies

#### 7. RLS Policy Errors

**Symptoms**: "permission denied" errors

**Solutions**:
- Check Supabase Dashboard → Authentication → Policies
- Verify user is authenticated: `useSupabaseUser()`
- Check if service role key is needed for admin operations
- Review RLS policies in `schema.sql`

### Debugging Tools

1. **Browser DevTools**:
   - Console: Check for errors and logs
   - Network: Inspect API requests to Supabase
   - Application: Check localStorage for Supabase session

2. **Nuxt DevTools**:
   - Access via: [http://localhost:3000/_nuxt/devtools](http://localhost:3000/_nuxt/devtools)
   - Use for: Component inspection, state management, performance

3. **Supabase Dashboard**:
   - Check: Logs → API Logs, Auth Logs
   - Use for: Backend debugging

4. **Vue DevTools**:
   - Install browser extension
   - Use for: Component tree, state inspection

---

## Project Structure

```
apera-dashboard/
├── app/
│   ├── components/        # Vue components
│   ├── composables/       # Composable functions
│   ├── layouts/           # Layout components
│   ├── middleware/        # Route middleware
│   ├── pages/             # File-based routing
│   ├── stores/            # Pinia stores
│   ├── types/             # TypeScript types
│   └── app.vue            # Root component
├── server/
│   └── api/               # Server API routes
├── public/                # Static assets
├── nuxt.config.ts         # Nuxt configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies
```

---

## Authentication Flow

The dashboard uses Supabase Auth. Typical flow:

1. **User visits dashboard** → Check if authenticated
2. **If not authenticated** → Redirect to login page
3. **User logs in** → Supabase creates session
4. **Session stored** → In browser (via Supabase client)
5. **Protected routes** → Check authentication via middleware

Example middleware (`app/middleware/auth.ts`):
```typescript
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()
  
  if (!user.value) {
    return navigateTo('/login')
  }
})
```

---

## Next Steps

After completing setup:

1. ✅ Verify dashboard connects to Supabase
2. ✅ Test authentication flow
3. ✅ Test data queries and mutations
4. ✅ Verify Edge Functions are callable
5. ✅ Set up production deployment
6. ✅ Configure custom domain (if needed)

---

## Additional Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt UI Pro Documentation](https://ui.nuxt.com/pro)
- [Supabase Nuxt Module](https://supabase.nuxtjs.org/)
- [Vue Query Nuxt](https://vue-query-nuxt.pages.dev/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

---

## Support

If you encounter issues:
1. Check the Troubleshooting section
2. Review Nuxt and Supabase documentation
3. Check Supabase Dashboard logs
4. Verify all environment variables are set correctly
5. Ensure backend is properly configured (see backend guide)
