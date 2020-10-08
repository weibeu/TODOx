import {Box, Heading, Menu,Header as GHeader} from 'grommet';
import React, {Component} from 'react';
import {Logout} from "grommet-icons";
// import {Login, Logout} from "grommet-icons";

// const AppBar = (props) => (
//     <GHeader
//         tag='header'
//         direction='row'
//         align='center'
//         justify='between'
//         // background='brand'
//         pad={{ left: 'medium', right: 'small', vertical: 'small' }}
//         elevation='medium'
//         style={{ zIndex: '1' }}
//         // {...props}
//     />
// )

class Header extends Component {
    render() {
        return (
            <GHeader background="#4443bc" margin="0" pad="10px" elevation="100px" >
                <Heading level='1' margin='10px' style={{fontFamily:"'Permanent Marker', cursive"}}>TODOx</Heading>
                <Menu
                    label={this.props.app.state.username}
                    items={[{
                        label: 'Logout', onClick: () => {this.props.app.deAuthorize()}, icon: <Logout />
                    }]}
                />
            </GHeader>
        );
    }
}

export default Header;