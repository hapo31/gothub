import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import RepositoryListComponent from "../components/RepositoryList/RepositoryList";
import { RepositoryState } from "../states/RepositoriesState";
import { RepositoryListComponentProps } from "../components/RepositoryList/RepositoryList";
import { fetchRepositories } from "../actions/FetchAction";
import { fetchRepositoriesAPI, SORTTYPE } from "../api/Github";

// ここに子コンポーネントのPropTypesを&で繋いでいく
type Props = {
  dispatch?: Dispatch;
} & RepositoryListComponentProps;

const Root = styled.div`
  width: 200px;
  height: auto;
`;

class AppComponent extends React.Component<Props> {
  render() {
    const { repositories } = this.props;
    return (
      <RepositoryListComponent
        onDidMount={() => {
          fetchRepositoriesAPI("happou31").then(res => {
            this.props.dispatch!(fetchRepositories(res));
          });
        }}
        repositories={repositories}
      />
    );
  }
}

function mapStateToProps(
  state: RepositoryState,
  _: Props
): RepositoryListComponentProps {
  return { repositories: state };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
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
