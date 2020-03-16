import React from 'react'
import LoginPage from './LoginPage'
import {authThunk} from '../../redux/authReducer'
import { connect } from 'react-redux'
import { IRootState } from '../../redux/store'
import { Redirect } from 'react-router-dom'

interface Iprops {
  authThunk: () => void
  isAuth: boolean
}

export function LoginPageContiner(props: Iprops) {
  if (props.isAuth) {
    return <Redirect to='/'/>
  }

  return (
    <>
      <LoginPage authFunc={props.authThunk}/>
    </>
  )
}
export default connect((state: IRootState) => {
  return {
    isAuth: state.authInfo.isAuth
  }
},{
  authThunk
})(LoginPageContiner);