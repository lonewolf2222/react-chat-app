import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'
import Socket from '../utils/socket'

const MessageInput = () => {
const [textInput, setTextInput] = useState('')
const [username, setUsername] = useState('')



// const scrollToBottom = () => {
//     const page = document.getElementsByTagName("page")
//     page.scrollTop = page.scrollHeight
//     }

const validateInput = () =>{
    return textInput.length > 0 && textInput.length <500
}
const sendMessage = (e) => {
    
    const timenow = Date.now()
    e.preventDefault()
    //console.log(username)
    const message = ({username: username, message: textInput.trim(), timestamp: timenow})
    
    Socket.emit('BROADCAST_MESSAGE', message)

    setTextInput('')
    //scrollToBottom()
}

useEffect(() => {

    Socket.on('GET_CURRENT_USER', user => {
        setUsername(user.username)
    })
}, [])

return(
<div>
<Form onSubmit={sendMessage}>
    <Form.Group style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
        <Form.Control
        value = {textInput}
        style={{border: "solid 2px blue", width: '100%'}}
        required
        type="text"
        placeholder="Type Message Here"
        onChange={e => setTextInput(e.target.value)}
        />
        <Button style={{backgroundColor:"blue", borderColor:"blue"}} type="submit" disabled={!validateInput()}>Send</Button>
    </Form.Group>

</Form>
</div>
)
}
export default MessageInput