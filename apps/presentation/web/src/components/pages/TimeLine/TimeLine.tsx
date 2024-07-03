import { useQueryPosts } from '@/api/query/posts'
import { getExactServerSession } from '@/hooks/getExactServerSession'
import { useState } from 'react'

export const TimeLine = async () => {
  const [after, setAfter] = useState<string>('')
  const session = await getExactServerSession()
  const { isLoading, data } = useQueryPosts({ first: 50, after, userId: session.user.id })
}
