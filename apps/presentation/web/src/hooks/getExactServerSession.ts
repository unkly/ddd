import { Session, getServerSession } from 'next-auth'

export const getExactServerSession = async () => {
  const session = await getServerSession()
  return session as Session
}
