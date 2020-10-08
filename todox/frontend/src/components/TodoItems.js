import React from 'react'
import {Trash,Checkmark} from 'grommet-icons';
import {Box,Button} from "grommet";

export function TodoItems(props) {
    const {id,completed,subject}=props.todo;
        return (
            
            <Box justify='center' elevation="small" direction="row" pad="large" align="center" margin='xsmall' gap='xlarge' wrap={false} round="small" background="light-1">

                <Button onClick={()=>{
                    props.TodoPage.markChecked.bind(this,id);console.log('from TodoItems')
                    }} color="dark-2" icon={<Checkmark color={completed?"dark-1":"green"} size={completed?"20px":"29px"}/>} />
                        
                    
                <Box flex="grow" style={{textDecoration:completed?"line-through":"none"}}>
                    {subject}
                </Box>
                <Button onClick={()=>{}} icon={<Trash color='red' size="20px"/>} label="Delete" color="red" reverse={true}/>
                    

            </Box>
        )
    }

export default TodoItems



