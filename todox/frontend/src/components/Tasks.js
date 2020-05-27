import React, {Component} from 'react';
import {Box} from "grommet";

const TasksContainer = (props) => (
    <Box
        tag="tasks"
        alignSelf="center"
        animation="fadeIn"
        direction="column"
        elevation="small"
        {...props}
    />
)

class Tasks extends Component {
    render() {
        return (
            <TasksContainer />
        );
    }
}

export default Tasks;