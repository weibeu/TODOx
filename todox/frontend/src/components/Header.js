import {Box, Heading, Menu} from 'grommet';
import React, {Component} from 'react';
import {Logout} from "grommet-icons";
// import {Login, Logout} from "grommet-icons";

const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        // background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
)

class Header extends Component {
    render() {
        return (
            <AppBar >
                <Heading level='3' margin='none'>TODOx</Heading>
                <Menu
                    label={this.props.app.state.username}
                    items={[{
                        label: 'Logout', onClick: () => {this.props.app.deAuthorize()}, icon: <Logout />
                    }]}
                />
            </AppBar>
        );
    }
}

export default Header;