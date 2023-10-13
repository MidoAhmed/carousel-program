import { API_ENDPOINT } from "../constants";

/**
 * Fetches data from a GraphQL API.
 * @param {string} operationsDoc - The GraphQL operations document.
 * @param {string} operationName - The name of the operation to execute.
 * @param {Record<string, unknown>} variables - The variables to pass to the operation.
 * @returns {Promise<{data:{program:Program[]}, errors:unknown}>} - A Promise that resolves with the API response.
 */
export function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, unknown>
) {
  return fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  }).then((result) => result.json());
}
