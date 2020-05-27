import React, {Component} from 'react';
import {Box, Button, Form, FormField, Tab, Tabs, TextInput} from "grommet";

const FormContainer = (props) => (
    <Box
        align="center"
        animation="fadeIn"
        {...props}
    />
)

class Register extends Component {
    render() {
        return (
            <Form onSubmit={(values) => {
                this.props.app.register(values.value.username, values.value.email, values.value.password)}}>
                <FormField name="username" label="Username">
                    <TextInput id="username" name="username" />
                </FormField>
                <FormField name="email" label="Email ID">
                    <TextInput id="email" name="email" />
                </FormField>
                <FormField name="password" label="Password">
                    <TextInput id="password" name="password" type="password" />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Register" />
                    <Button type="reset" primary label="Clear" />
                </Box>
            </Form>
        );
    }
}


class Authorize extends Component {
    render() {
        return (
            <Form onSubmit={(values) => {this.props.app.authorize(values.value.username, values.value.password)}}>
                <FormField name="username" label="Username">
                    <TextInput id="username" name="username" />
                </FormField>
                <FormField name="password" label="Password">
                    <TextInput id="password" name="password" type="password" />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Login" />
                    <Button type="reset" label="Clear" />
                </Box>
            </Form>
        );
    }
}

class Authorization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            registered: true,
        }
    }

    render() {
        return (
            <FormContainer>
                <Tabs>
                    <Tab title="Login">
                        <Authorize app={this.props.app} />
                    </Tab>
                    <Tab title="Register">
                        <Register app={this.props.app} />
                    </Tab>
                </Tabs>
            </FormContainer>
        )
    }
}

export default Authorization;