import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      mailAddress: string
      image: string | null
    }
    accessToken: string
    idToken: string
    expiresAt: number
  }

  interface User {
    id: string
    name: string
    mailAddress: string
    image: string | null
    accessToken: string
    idToken: string
    expiresAt: number
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: string
      name: string
      mailAddress: string
      image: string | null
    }
    accessToken: string
    idToken: string
    expiresAt: number
  }
}
