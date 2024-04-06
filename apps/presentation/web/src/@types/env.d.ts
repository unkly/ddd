declare namespace NodeJS {
  interface ProcessEnv {
    readonly AUTH0_CLIENT_ID: string
    readonly AUTH0_CLIENT_SECRET: string
    readonly NEXT_PUBLIC_AUTH0_ISSUER: string
    readonly NEXTAUTH_SECRET: string
    readonly NEXTAUTH_URL: string
    readonly NEXT_PUBLIC_API_URL: string
  }
}
