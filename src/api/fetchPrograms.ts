import { Program } from "../types/program";
import { fetchGraphQL } from "./common";

/**
 * Fetches programs from the server.
 * @param {string} operationName - The name of the GraphQL operation.
 * @param {Record<string, unknown>} variables - The variables to pass to the GraphQL operation.
 * @returns {Promise<{data:{program:Program[]}, errors:unknown}>} - A Promise that resolves to an object containing the fetched programs and any errors.
 */
export function fetchPrograms(operationName: string, variables: Record<string, unknown>): Promise<{data:{program:Program[]}, errors:unknown}> {
  const operationsDoc = `
      query ${operationName} {
        program {
          id
          name
          thumnail {
            id
            url
          }
        }
      }
    `;
  return fetchGraphQL(operationsDoc, operationName, variables);
}
