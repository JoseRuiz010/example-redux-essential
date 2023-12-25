import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
export const UsersList = () => {
  const users = useSelector(state => state.users)
  return (
    <div>

      UsersList
      <ul>
        <RenderUser users={users} />
      </ul>
    </div>
  )
}

const RenderUser = ({ users }) => {
  return (
    <div>
      {users.map(us =>
      (<li key={us.id}>
        <Link to={`users/${us.id}`}>{us.name}</Link>
      </li>)
      )}
    </div>
  )
}

