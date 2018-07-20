import React from "react";
import Repository from "../styled/Repository";
import { RepositoryState } from "../../states/RepositoriesState";

export type RepositoryListComponentProps = {
  repositories: RepositoryState;
  onDidMount?: () => void;
};

export default class RepositoryListComponent extends React.Component<
  RepositoryListComponentProps
> {
  componentDidMount() {
    if (this.props.onDidMount) {
      this.props.onDidMount();
    }
  }

  render() {
    return (
      <>
        {this.props.repositories.repositories.map(repo => (
          <Repository
            key={repo.url}
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
