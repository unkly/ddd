import { NextAuthOptions } from 'next-auth'
import Auth0Provider from 'next-auth/providers/auth0'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.NEXT_PUBLIC_AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // 最初のサインイン
      if (account && user) {
        token.user = {
          id: user.id!,
          name: user.name!,
          mailAddress: user.email!,
          image: user.image!,
        }
        token.accessToken = account.access_token!
        token.idToken = account.id_token!
        token.expiresAt = account.expires_at!
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.idToken = token.idToken
      session.expiresAt = token.expiresAt
      session.user = token.user

      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,

  debug: process.env.NODE_ENV === 'development',
}
