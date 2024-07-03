'use client'
import { Auth0Provider } from '@auth0/auth0-react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children: React.ReactNode
}

export const ProvidersWrapper = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_ISSUER}
        clientId={process.env.AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: process.env.NEXTAUTH_URL,
        }}>
        <AppRouterCacheProvider>
          <SessionProvider>{children}</SessionProvider>
        </AppRouterCacheProvider>
      </Auth0Provider>
    </QueryClientProvider>
  )
}
