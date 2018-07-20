import { createStore } from "redux";

import { GithubRepositoriesResponse } from "../api/Github";
import { repositoryReducer } from "../reducers/RepositoryReducer";

let repositoryStore = createStore(repositoryReducer);

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
      url: info.html_url,
      author: info.owner.login
    }))
  };
}

export default repositoryStore;
