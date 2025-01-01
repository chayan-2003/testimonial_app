// Filepath: /middleware.ts

import { NextResponse } from 'next/server'

// Middleware function that does nothing and allows all requests to pass through
export function middleware(req) {
  return NextResponse.next();
}

// Configure middleware to apply to no routes
export const config = {
  matcher: [], // Empty array means no routes are matched, so middleware is effectively disabled
};