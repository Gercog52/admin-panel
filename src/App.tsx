import React from 'react';
import {Provider, connect} from 'react-redux';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import store, { IRootState } from './redux/store';
import {unAuthThunk} from './redux/authReducer';
import './App.css'
import Header from './components/header/Header';
import Content from './components/content/Content';
import LoginPageContiner from './components/loginPage/LoginPageContiner';

interface Iprops {
  isAuth: boolean
  unAuthThunk: () => void
}

function App(props: Iprops) {
  if(!props.isAuth) {
    return <Redirect to="/login"/>
  }
  return (
    <div className="">
      <Header/>
      <Content logOutUser={props.unAuthThunk}/>
    </div>
  )
}
const AppContiner = connect((state: IRootState) => {
  return {
    isAuth: state.authInfo.isAuth
  }
}, {
  unAuthThunk,
})(App);

function AppSwith() {
  return (
    <Switch>
      <Route path='/login' component={LoginPageContiner}/>
      <Route path='/' component={AppContiner}/>
    </Switch>
  );
}

function AppWrap() {
  return <>
    <HashRouter>
      <Provider store={store}>
        <AppSwith/>
      </Provider>
    </HashRouter>
  </>
}
export default AppWrap;
