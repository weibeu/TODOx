import React, {Component} from 'react';
import Authorization from "./Auth";
import TodoPage from './TodoPage';


class Main extends Component {
    render() {
        return (
            <>
                {this.props.app.state.isAuthorized ? <TodoPage app={this.props.app}/> : <Authorization app={this.props.app} />}
            </>
        );
    }
}

export default Main;