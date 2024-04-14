import { QueryPostsArgs } from '@/graphql/generated/graphql'
import { QUERY_POSTS } from '@/graphql/queries'
import { graphqlClient } from '@/libs/graphql-client'
import { SYSTEM_ERROR_MESSAGE } from '@/types/error'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { GraphQLError } from 'graphql'
import { ClientError } from 'graphql-request'

const queryPosts = async (variables: QueryPostsArgs): Promise<void> => {
  const client = graphqlClient()
  try {
    await client.request(QUERY_POSTS, variables)
  } catch (e: any) {
    if (e instanceof ClientError) {
      throw e.response.errors?.map((error) => new GraphQLError(error.message))
    }
    throw new Error(SYSTEM_ERROR_MESSAGE)
  }
}

export const useQueryPosts = (variables: QueryPostsArgs) => {
  const queryKey = ['posts', variables]
  const { isLoading, isError, error, data, isPlaceholderData } = useQuery({
    queryKey,
    queryFn: () => queryPosts(variables),
    placeholderData: keepPreviousData,
  })

  return {
    isLoading,
    data,
  }
}
