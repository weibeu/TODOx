import axios from 'axios';
import { Grommet } from "grommet";
import React, { Component } from 'react';
import Header from "./Header";
import Main from "./Main";

document.body.style.margin = 0;

const theme = {
    global: {
        colors: {
            brand: '#a09fdf',
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: '20px',
        },
    },
}


class App extends Component {

    getInitialState() {
        return {
            username: null, email: null, token: null, tasks: null,
            isAuthorized: false, isLoading: false, hasPageLoaded: false,
        }
    }

    constructor(props) {
        super(props);
        this.state = this.getInitialState()
    }


    getAuthHeader(){
        let token;
        if (this.state.token!=null) {
            token=this.state.token;
        } else {
            token=localStorage.getItem("token")
        }
        return {headers:{"Authorization": `Token ${token}`}}
    }

    updateAuthState(json) {
        this.setState(prevState => {
            prevState.username = json.user.username
            prevState.email = json.user.email
            prevState.token = json.token
            prevState.isAuthorized = true
            return prevState
        })
        localStorage.setItem("token", this.state.token)
    }

    componentDidMount() {
        this.startLoading()
        axios
            .get('/api/auth/user/', this.getAuthHeader())
            .then(response => {
                let json = response.data
                if (response.status === 200) {
                    this.updateAuthState({user: json, token: localStorage.getItem("token")})
                }
            })
            .catch(error => {
                console.log(error)
            })
        this.startLoading(true)
    }

    startLoading(stop) {
        this.setState(prevState => {
            prevState.isLoading = !stop
            return prevState
        })
    }

    register(username, email, password) {
        this.startLoading()
        console.log({username: username, email: email, password: password})
        axios
            .post('/api/auth/register/', {username: username, email: email, password: password})
            .then(response => {
                let json = response.data
                if (response.status === 200) {
                    this.updateAuthState(json)
                }
            })
    }

    authorize(username, password) {
        this.startLoading()
        axios
            .post('/api/auth/authorize/', {username: username, password: password})
            .then(response => {
                let json = response.data
                if (response.status === 200) {
                    this.updateAuthState(json)
                }
            })
            .catch(error => {
                console.log(error)
            })
        this.startLoading(true)
    }

    deAuthorize() {
        this.startLoading()
        axios
            .post('/api/auth/revoke/', {}, this.getAuthHeader())
            .then(response => {
                if (response.status === 204) {
                    this.setState(prevState => {
                        prevState = this.getInitialState()
                        return prevState
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Grommet theme={theme} themeMode="dark">
                <Header app={this} />
                <Main app={this} />
            </Grommet>
        );
    }
}

export default App;