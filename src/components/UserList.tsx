import React, { FC } from 'react'
import { IUser } from '../types/types'
interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users: IUser[]}) => {
  
  return (
    <div>
      {users.map(user => 
        <div key={user.id} style={{padding:15, border: '1px solid gray'}}>
          {user.id}.{user.name} проживает в городе {user.address.city} на улице {user.address.street}
      )}
    </div>
  );
};

export default UserList;