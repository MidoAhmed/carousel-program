export const API_ENDPOINT = "https://tf1-interview.hasura.app/v1/graphql";
export function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, unknown>
) {
  return fetch(API_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  }).then((result) => result.json());
}
