import React, {useState, useEffect} from 'react';
import moment from 'moment'
import Socket from '../utils/socket'

const Display = () => {

    // //const scrollToBottom = () => {
    //     // const page = document.getElementsByTagName("page")
    //     document.body.scrollTop = document.body.scrollHeight
    //     }
    
    // scrollToBottom()

    const[conversations, setConversations] = useState([])

    useEffect(() =>{

        Socket.on('RECEIVE_BROADCAST', (data) => {
            setConversations((oldMesssages) => {
                return [...oldMesssages, data]
            })
        })
    }, [])

return (
    <div>
    <ul className='list-group' style={{marginBottom: "60px"}}>
        {conversations.length > 0 ?
            conversations.map(msg => (
                <li className='list-group-item'>
                    <strong>{msg.username}:  "{msg.message}"  on "{moment(msg.timestamp).format('LLLL')}"</strong>
                </li>
            ))
            : ""
        }      
    </ul>
    </div>
)

}

export default Display