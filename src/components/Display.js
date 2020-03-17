import React, {useState, useEffect} from 'react';
import moment from 'moment'
import Socket from '../utils/socket'

const Display = () => {

    const scrollToBottom = () => {
        const page = document.getElementsByTagName("body")
        document.body.scrollTop = document.body.scrollHeight
        }
    
    scrollToBottom()

    const[conversations, setConversations] = useState([])

    useEffect(() =>{

        Socket.on('RECEIVE_BROADCAST', (data) => {
            setConversations((oldMesssages) => {
                return [...oldMesssages, data]
            })
        })
    }, [])

return (
    <div style={{overflowY: "scroll", height:"80vh"}}>
    <ul className='list-group' style={{marginBottom: "60px"}}>
        {conversations.length > 0 ?
            conversations.map(msg => (
                <li className='list-group-item'>
                    <img src={`https://api.adorable.io/avatars/50/${msg.username}.png`}/>
                    <strong>{msg.username}:&nbsp; "{msg.message}"&nbsp; &nbsp; on&nbsp; "{moment(msg.timestamp).format('LLLL')}"</strong>
                </li>
            ))
            : ""
        }      
    </ul>
    </div>
)

}

export default Display