'use client'
import { SessionProvider } from 'next-auth/react'
import { Layout } from '../components/shared/Layout'
import '../components/shared/global.css'
import { Auth0Provider } from '@auth0/auth0-react'
import '../mocks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function RootLayout({ session, children }: { session: any; children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <html lang="ja-JP">
      <body>
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={session}>
            <Auth0Provider
              domain={process.env.NEXT_PUBLIC_AUTH0_ISSUER}
              clientId={process.env.AUTH0_CLIENT_ID}
              authorizationParams={{
                redirect_uri: process.env.NEXTAUTH_URL
              }}>
              <Layout>{children}</Layout>
            </Auth0Provider>
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
