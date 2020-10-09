import React,{Component} from 'react'
import {Trash,Checkmark} from 'grommet-icons';
import {Box,Button} from "grommet";

export class TodoItems extends Component {


    render(){
    const {id,completed,subject}=this.props.todo;
    let completionDependentStyles = completed ? {iconColor:"green",text:{textDecoration:"line-through"},btnStyles:{backgroundColor:"lightgray",borderRadius:"15px 0 15px 0"}}:{iconColor:"white",text:{textDecoration:"none"},btnStyles:{backgroundColor:"lightgreen",borderRadius:"0 15px 0 15px"}};
        return (
            
            <Box justify='center' elevation="small" direction="row"  align="center"   margin='xsmall' gap='xlarge' wrap={false} round="small" background="light-2" width="95vw">
            
                <Button onClick={()=>{
                    this.props.TodoPage.toggleCompletionStatus(id);
                    }}  icon={<Checkmark color={completionDependentStyles.iconColor}/>} style={completionDependentStyles.btnStyles}  fill='vertical' />
                        
                    
                <Box flex="grow" style={completionDependentStyles.text}>
                    {subject}
                </Box>
                <Button onClick={()=>{this.props.TodoPage.deleteTodos(id);}}   icon={<Trash color='red'/>} fill='vertical'/>
                    

            </Box>
        )
    }
}
export default TodoItems



