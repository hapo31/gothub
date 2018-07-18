import { createStore } from "redux";

import { GithubRepositoriesResponse } from "../api/github";
import { Reducers } from "../reducers/RepositoryReducer";

let repositoryStore = createStore(Reducers.repositoryReducer);

export interface RepositoryInfo {
  name: string;
  description: string;
  url: string;
  author: string;
}

export class RepositoryState {
  constructor(public repositories: RepositoryInfo[] = []) {}
}

export function generateRepositoryStateFromResponse(
  response: GithubRepositoriesResponse
): RepositoryState {
  return {
    repositories: response.map(info => ({
      name: info.full_name,
      description: info.description || "",
      url: info.git_url,
      author: info.owner.login
    }))
  };
}

export default repositoryStore;
