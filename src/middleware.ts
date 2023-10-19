import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  console.log(token)

  const homeUrl = new URL('/auth/sign-in', request.url)

  if (!token) {
    if (request.nextUrl.pathname === '/auth/sign-in') {
      return NextResponse.next()
    }

    return NextResponse.redirect(homeUrl)
  }
}

export const config = {
  matcher: ['/bookmarks', '/cart', '/payment', '/profile', '/admin/:path*'],
}
