import { graphql } from './generated'

export const QUERY_POSTS = graphql(`
  query posts($after: String, $first: Int!, $userId: String) {
    posts(first: $first, userId: $userId, after: $after) {
      edges {
        calories
        createdAt
        detail
        difficulty
        id
        title
        user {
          email
          id
          name
        }
      }
      pageInfo {
        endCorsor
        hasNextPage
      }
    }
  }
`)
