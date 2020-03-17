import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageInput from './components/MessageInput'
import Display from './components/Display'
import UserList from './components/UserList'
import Socket from './utils/socket'



function App() {

  useEffect(() => {
    Socket.emit('NEW_USER')
  }, [])

  return (
    <div>
      <page>
      <h2 style={{textAlign:"center"}}>Next Chat App</h2>
      <div style={{display:"flex"}}>
        <div style={{flex: 3}}>
          <h2 style={{textAlign:"center"}}>Conversations</h2>
          <Display/>
        </div>
        <div style={{flex:1}}>
          <h2 style={{textAlign:"center"}}> User List</h2>
        <UserList/>
      </div>
      </div>
     <MessageInput/>
     </page>
    </div>
  );
}

export default App;
