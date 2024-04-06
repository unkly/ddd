import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      name: string
      mailAddress: string
    }
    accessToken: string
    idToken: string
    expiresAt: number
  }

  interface User {
    user: {
      name: string
      mailAddress: string
    }
    accessToken: string
    idToken: string
    expiresAt: number
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    idToken: string
    expiresAt: number
  }
}
