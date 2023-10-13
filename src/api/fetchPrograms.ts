import { fetchGraphQL } from "./common";

export function fetchPrograms() {
  const operationsDoc = `
      query MyQuery {
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
  return fetchGraphQL(operationsDoc, "MyQuery", {});
}
