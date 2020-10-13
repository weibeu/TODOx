import React, { Component } from 'react'
import {Button,Box,TextInput} from 'grommet';
import {Add,Close,Keyboard} from 'grommet-icons'



export class AddTodo extends Component {


    render() {
        return (
           <Box direction='row' pad="small" margin="small" justify="evenly">
           <TextInput id="subjectText" type='text' icon={<Keyboard/>}  placeholder="start typing here to add todos..." style={{backgroundColor:"rgba(175,175,175,0.3)"}}/>
           <Button 
           type="submit"
           icon={ <Add color="white"/>  } 
           style={{backgroundColor:"#00aa70",boxShadow:"#444 4px 3px 4px",borderRadius:"50%"}}
            onClick={()=>{let text=document.getElementById("subjectText");this.props.newTodo(text.value);text.value=''}}/>

           </Box>
        )
    }
}

export default AddTodo
