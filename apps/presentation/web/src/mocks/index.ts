import { worker } from '@/mocks/server'
import { server } from '@/mocks/server'

if (process.env.NEXT_PUBLIC_USE_MOCK) {
  if (typeof window !== 'undefined') {
    void worker.start()
  } else {
    void server.listen()
  }
}
