import { GithubRepositoriesResponse } from "../api/Github";

// FETCH
export type FetchAction = {
  type: string;
  repositoriesResponse: GithubRepositoriesResponse;
};

export function fetchRepositories(repositories: GithubRepositoriesResponse) {
  return {
    type: "FETCH",
    repositoriesResponse: repositories
  };
}
