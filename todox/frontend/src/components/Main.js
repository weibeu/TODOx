import React, {Component} from 'react';
import {Box} from "grommet";
import Authorization from "./Auth";
import TodoPage from './TodoPage';


class Main extends Component {
    render() {
        return (
            <>
                {this.props.app.state.isAuthorized ? <TodoPage/> : <Authorization app={this.props.app} />}
            </>
        );
    }
}

export default Main;