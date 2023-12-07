import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jwt-decode'
import { IJWTDecode } from './types/user'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const signInUrl = new URL('/auth/sign-in', request.url)
  const profileUrl = new URL('/profile', request.url)
  const homeUrl = new URL('/', request.url)

  if (!token) {
    if (request.nextUrl.pathname === '/auth/sign-in' || request.nextUrl.pathname === '/auth/sign-up') {
      return NextResponse.next()
    }

    return NextResponse.redirect(signInUrl)
  }

  const payload: IJWTDecode = jwt(token)

  if (request.nextUrl.pathname.includes('/admin') && payload.type !== 'admin') {
    return NextResponse.redirect(homeUrl)
  }

  if (request.nextUrl.pathname === '/auth/sign-in') {
    return NextResponse.redirect(profileUrl)
  }
}

export const config = {
  matcher: ['/bookmark', '/payment', '/profile', '/admin/:path*', '/auth/:path*'],
}
