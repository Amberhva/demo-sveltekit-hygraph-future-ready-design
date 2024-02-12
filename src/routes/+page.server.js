import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
  query FRDQuery {
    heroes {
      image {
        url
      }
      title
    }
    samenImpactMakens {
      title
      content {
        text
      }
    }
  }
`;

  return await hygraph.request(query)
}