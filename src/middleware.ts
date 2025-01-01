import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define routes that require authentication
const isProtectedRoute = createRouteMatcher(['/dashboard', '/forum(.*)'])

// Define routes that should be excluded from middleware (e.g., webhook endpoints)
const isExcludedRoute = createRouteMatcher(['/api/webhook/register'])

export default clerkMiddleware(async (auth, req) => {
  // Check if the route is excluded
  if (isExcludedRoute(req)) {
    return NextResponse.next(); // Skip middleware for excluded routes
  }

  const { userId, redirectToSignIn } = await auth()

  if (!userId && isProtectedRoute(req)) {
    // Add custom logic to run before redirecting if needed
    return redirectToSignIn()
  }
})

// Configure matcher to apply middleware to all routes except excluded ones
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|api/webhook/register).*)",
    "/", // Root route
    "/(api|trpc)(?!/webhook/register)(.*)", // Other API routes excluding webhook
    "!/api/webhook/register", // Explicitly exclude webhook
  ],
};
