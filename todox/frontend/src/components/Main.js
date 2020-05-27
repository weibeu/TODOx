import React, {Component} from 'react';
import {Box} from "grommet";
import Authorization from "./Auth";

const MainContent = (props) => (
    <Box
        tag="main"
        fill="vertical"
        flex="grow"
        overflow="auto"
        {...props}
    />
)

class Main extends Component {
    render() {
        return (
            <MainContent>
                {this.props.app.state.isAuthorized ? "" : <Authorization app={this.props.app} />}
            </MainContent>
        );
    }
}

export default Main;