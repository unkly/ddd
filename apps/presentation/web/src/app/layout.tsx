'use client'
import '../mocks'
import { ProvidersWrapper } from './ProvidersWrapper'
import { Layout } from '@/components/shared/Layout'
import { global } from './global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja-JP">
      <body className={global.body}>
        <ProvidersWrapper>
          <Layout>{children}</Layout>
        </ProvidersWrapper>
      </body>
    </html>
  )
}
