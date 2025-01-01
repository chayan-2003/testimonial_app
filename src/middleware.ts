// Filepath: /middleware.ts

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define routes that require authentication
const isProtectedRoute = createRouteMatcher(['/dashboard', '/forum/:path*'])

// Define routes that should be excluded from middleware (e.g., webhook endpoints)
const isExcludedRoute = createRouteMatcher(['/api/webhook/register'])

export default clerkMiddleware(async (auth, req) => {
  // Check if the route is excluded
  if (isExcludedRoute(req)) {
    return NextResponse.next(); // Skip middleware for excluded routes
  }

  const { userId, redirectToSignIn } = await auth()

  if (!userId && isProtectedRoute(req)) {
    // Optionally, add custom logic before redirecting
    return redirectToSignIn()
  }
})

export const config = {
  matcher: [
    // Apply middleware to the root route
    '/',
    // Apply middleware to protected routes
    '/dashboard/:path*',
    '/forum/:path*',
    // Apply middleware to all other API routes except the excluded webhook endpoint
    '/api/:path*',
    '/trpc/:path*',
  ],
};