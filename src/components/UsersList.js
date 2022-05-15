import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  }, []);
  const getUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10")
      setUsers(response.data.results);
    }
    catch (error) { console.log(error) }
  }
  return (
    <div className='main-container'>
      {
        users.map((user, index) => (
          <div className='container' key={user.login.uuid}>
            <div>
              <img className='img' src={user.picture.thumbnail} />
            </div>
            <div className='inner-container'>
              <div className='name-container'>
                <div className='name'><b> {user.name.title} </b></div>
                <div className='name'><b> {user.name.first} </b></div>
                <div className='name'><b> {user.name.last} </b></div>
              </div>
              <div className='age'>{user.email}</div>
            </div>
          </div>
        ))
      }
    </div>

  )
}


export default UsersList