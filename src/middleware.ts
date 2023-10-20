import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const homeUrl = new URL('/auth/sign-in', request.url)
  const profileUrl = new URL('/profile', request.url)

  console.log('executing middleware')

  if (!token) {
    if (
      request.nextUrl.pathname === '/auth/sign-in' ||
      request.nextUrl.pathname === '/auth/sign-up'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(homeUrl)
  }

  if (request.nextUrl.pathname === '/auth/sign-in') {
    return NextResponse.redirect(profileUrl)
  }
}

export const config = {
  matcher: [
    '/bookmark',
    '/cart',
    '/payment',
    '/profile',
    '/admin/:path*',
    '/auth/:path*',
  ],
}
