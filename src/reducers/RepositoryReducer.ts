import {
  RepositoryState,
  generateRepositoryStateFromResponse
} from "../states/RepositoriesState";
import { Action } from "redux";
import * as Actions from "../actions/FetchAction";

export namespace Reducers {
  const initialState = new RepositoryState();

  export function repositoryReducer(state?: RepositoryState, action?: Action) {
    if (!state) {
      return initialState;
    }
    if (action) {
      switch (action.type) {
        case "FETCH": {
          const fetchAction = action as Actions.FetchAction;
          return generateRepositoryStateFromResponse(
            fetchAction.repositoriesResponse
          );
        }
      }
    }
    return state;
  }
}
