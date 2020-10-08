import React, {Component} from 'react';
import {Box} from "grommet";
import TodoItems from './TodoItems';

const TasksContainer = (props) => (
    <Box
        alignSelf="center"
        animation="fadeIn"
        direction="column"
        overflow="auto"
        background="brand"
        {...props} 
    />
)

class Tasks extends Component {
    render() {
        
        let pageItems=this.props.todos.map(
            todo=>
            <TodoItems todo={todo} key={todo.id} TodoPage={this}/>
        );
        return (
            <TasksContainer >
                {pageItems}
            </TasksContainer>
        );
    }
}

export default Tasks;