import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = gql`
        query FRDQuery {
            headers {
                image {
                    url
                }
                title
            }
            samenImpactMakens {
                title
                content {
                    html
                    text
                }
            }
            gerichtOpLangdurigSuccess {
                content {
                    html
                    text
                }
                title
                list
            }
        }
    `;

    return await hygraph.request(query);
}
