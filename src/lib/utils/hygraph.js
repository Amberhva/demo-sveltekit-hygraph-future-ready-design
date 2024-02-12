import { HYGRAPH_KEY} from '$env/static/private'

import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsirhzaq2zm701up9f5gtkgx/master", {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`
  }
})