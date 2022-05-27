import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
const UsersList = ({ getUsersData, usersData, loading }) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    setUsers(usersData)
  }, [usersData]);
  useEffect(() => {
    getUsersData()
  }, []);
  const filter = (e) => {
    const keyword = e;
    if (keyword !== '') {
      const tempData = usersData
      const results = tempData.filter((user) => {
        let fullName = ""
        fullName = `${user.name.first} ${user.name.last}`
        return fullName.toLowerCase().includes(keyword.toLowerCase());
      });
      setUsers(results);
    } else {
      setUsers(usersData);
    }
  };
  let navigate = useNavigate();
  return (
    <div className='main-container'>
      <div className='Header'>
        <Header filter={filter} />
      </div>
      {
        loading ? "Loading..." :
          !users.length ? "No users Found" : users?.map((user, index) => (
            <div className='container' key={user.login.uuid} onClick={() => {
              navigate("/user-profile", { state: { user } })
            }}>
              <div>
                <img className='img' src={user.picture.thumbnail} />
              </div>
              <div className='inner-container'>
                <div className='name-container'>
                  <div className='name' ><b> {user.name.title} </b></div>
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