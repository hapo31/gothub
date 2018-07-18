import React from "react";
import Repository from "../styled/Repository";
import { RepositoryState } from "../../states/RepositoriesState";

export type RepositoryListComponentProps = {
  repositories: RepositoryState;
};

export default class RepositoryListComponent extends React.Component<
  RepositoryListComponentProps
> {
  render() {
    return (
      <>
        {this.props.repositories.repositories.map(repo => (
          <Repository
            author={repo.author}
            name={repo.name}
            description={repo.description}
            url={repo.url}
          />
        ))}
      </>
    );
  }
}
