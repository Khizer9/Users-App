import React from 'react'
import { getUsersData } from '../../store/actions/users.action'
import SearchImg from '../../assist/images/search.png'

const Header = ({ filter }) => {
  return (
    <div>
      <div className='Header'>
        <h1>Users List Name</h1>
      </div>
      <div className="input-container">
        <img className='search-img' src={SearchImg} />
        <input
          type="search"
          onChange={(e) => filter(e.target.value)}
          className="input"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default Header