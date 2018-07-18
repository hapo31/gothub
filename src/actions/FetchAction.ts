import { GithubRepositoriesResponse } from "../api/github";

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
