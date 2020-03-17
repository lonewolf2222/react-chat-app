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
        <div className="row">
            <ul className="mx-auto" >
                {userlist.map(user => (
                    <li style={{border: "solid 1px"}} className="list-group-item">
                        <p>{user.username}</p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
export default UserList