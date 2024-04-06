import { server } from '@/mocks/server'

if (process.env.NEXT_PUBLIC_USE_MOCK) {
  void server.listen()
}
