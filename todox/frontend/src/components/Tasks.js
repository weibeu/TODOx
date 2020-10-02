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
            <h1>ok 2</h1>
            // <TasksContainer />
        );
    }
}

export default Tasks;