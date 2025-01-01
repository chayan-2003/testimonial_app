import { NextResponse } from 'next/server'

// Middleware function that does nothing and allows all requests to pass through
export function middleware() {
  return NextResponse.next()
}

// Configure middleware to apply to no routes by providing an empty matcher array
export const config = {
  matcher: [], // No routes matched, so middleware is effectively disabled
}