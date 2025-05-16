# Supabase Configuration Guide

To ensure that authentication emails from Supabase redirect users to `modernonboard.com` instead of `localhost:3000`, follow these steps:

## 1. Update Site URL in Supabase Dashboard

1. Log in to your Supabase dashboard at [https://app.supabase.com](https://app.supabase.com)
2. Select your project
3. Go to **Authentication** > **URL Configuration**
4. Set the **Site URL** to `https://modernonboard.com`
5. Add any additional redirect URLs if needed (for development environments)
6. Save your changes

## 2. Update Email Templates

1. In the Supabase dashboard, go to **Authentication** > **Email Templates**
2. For each template (Confirmation, Invite, Magic Link, Recovery), ensure the links use `https://modernonboard.com` instead of `localhost:3000`
3. Save your changes

## 3. Environment Variables

Ensure your environment variables are correctly set in your deployment platform (Vercel, etc.):

\`\`\`
NEXT_PUBLIC_SITE_URL=https://modernonboard.com
\`\`\`

## 4. Testing

After making these changes:

1. Test the signup flow to ensure confirmation emails contain the correct URL
2. Test password reset to ensure recovery emails contain the correct URL
3. Test magic link authentication if you're using it

If emails still contain `localhost:3000` URLs, you may need to clear your Supabase project's cache or contact Supabase support.
