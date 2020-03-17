import React, {useState, useEffect} from 'react';
import Socket from '../utils/socket'

const UserList = () => {

    const [userlist, setUserlist] = useState([])

    useEffect(() =>{
        Socket.on('UPDATE_USER_LIST', users => {
            setUserlist(users)
        })
    }, [])
    
    return(
        <div>
            <ul className='list-group'>
                {userlist.map(user => (
                    <li className='list-group-item'>
                        <p>{user.username}</p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
export default UserList