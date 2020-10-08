import React, { Component } from 'react'
import {Button,Box,TextInput} from 'grommet';
import {Add,Close} from 'grommet-icons'



export class AddTodo extends Component {


    render() {
        return (
           <>
           <Button 

           icon={ <Add color="white" size="30px"/>  } 
           style={{position:"fixed",display:"flex",backgroundColor:"#00aa70",bottom:"20px",right:"20px",boxShadow:"#444 4px 3px 4px",borderRadius:"50%" }}
            onClick={()=>{document.getElementById("addTodo").style.display="flex"}}/>


            <Box
                id="addTodo" 
                animation='slideUp'
                style={
                {display:"none",position:"fixed",top:"0",left:"0",height:"100vh",width:"100vw",backgroundColor:"rgba(25,25,25,0.4)"}
                }>
                    <Box 
                        
                        background="white"
                        style={{position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-50%)",display:"flex",flexDirection:"column",height:"45vh", width:"45vw",borderRadius:"15px"}}
                    >
                        <Box 
                        pad='20px'
                        flex="grow"
                        direction="column"
                        >
                        Add Todo
                        <TextInput placeholder="Start typing here" spellCheck="true"/>
                        </Box>
                            <Box 
                            justify='between'
                            direction='row'
                            background='#777'
                            pad='10px'
                            style={{position:"absolute",bottom:"0",borderRadius:"0 0 15px 15px",width:"100%"}}
                            >
                                <Button 
                                    label="Add Todo"
                                    icon={<Add/>}
                                    color="green"
                                    style={{backgroundColor:"green"}}
                                />  
                            <Button
                                label="Cancel"
                                icon={<Close/>}
                                color="red"
                                style={{backgroundColor:"red"}}
                                onClick={()=>{document.getElementById("addTodo").style.display="none"}}
                            />
                            </Box>
                    </Box>
            </Box>

           </>
        )
    }
}

export default AddTodo
