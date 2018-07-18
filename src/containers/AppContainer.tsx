import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import RepositoryListComponent from "../components/RepositoryList/RepositoryList";
import { RepositoryState } from "../states/RepositoriesState";
import { RepositoryListComponentProps } from "../components/RepositoryList/RepositoryList";
import { fetchRepositories } from "../actions/FetchAction";
import { fetchRepositoriesAPI, SORTTYPE } from "../api/github";

// ここに子コンポーネントのPropTypesを&で繋いでいく
type Props = RepositoryListComponentProps;

const Root = styled.div`
  width: 200px;
  height: auto;
`;

class AppComponent extends React.Component<Props> {
  render() {
    return (
      <Root>
        <RepositoryListComponent repositories={this.props.repositories} />
      </Root>
    );
  }
}

function mapStateToProps(
  state: RepositoryState,
  ownProps: Props
): RepositoryListComponentProps {
  return { repositories: state };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // Actionと対になるdispatchを呼び出すメソッドをここに書いていく 正気か？
    fetchRepositories: (user: string, sort = SORTTYPE.pushed) => {
      fetchRepositoriesAPI(user, sort).then(res => {
        dispatch(fetchRepositories(res));
      });
    }
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default AppContainer;
