import React from 'react'
import {Iuser} from '../../redux/usersReducerType'; 
import { connect } from 'react-redux'
import UsersPage from './UsersPage';
import { IRootState } from '../../redux/store';

interface Iprops {
  users: Iuser[]
}

export function UsersPageContiner(props:Iprops) {
  debugger
  return (
    <div>
      <UsersPage users={props.users}/>
    </div>
  )
}
export default connect((state: IRootState) => {
  return {
    users: state.usersList.users
  }
})(UsersPageContiner)