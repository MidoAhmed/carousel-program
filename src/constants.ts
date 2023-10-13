/**
 * This file contains constants that are used throughout the application.
 * By using constants, the code is more maintainable and easier to read, as the values of these constants can be changed in one place and will be reflected throughout the application.
 * This file is likely imported by other modules in the application that need to use these constants.
 */

/**
 * the messages are used to provide feedback to the user when something goes wrong in the application.
 */
export const ERROR_MESSAGES = {
  fetchProgramsError: "Failed to fetch programs. Please try again later.",
  unexpectedError: "An unexpected error occurred. Please try again later.",
  //TODO: add more error messages here
};

/**
 * the URL of the GraphQL API endpoint.
 */
export const API_ENDPOINT = "https://tf1-interview.hasura.app/v1/graphql";

/**
 * the default number of programs to display per page
 */
export const DEAFULT_PROGRAMS_PER_PAGE = 6;
