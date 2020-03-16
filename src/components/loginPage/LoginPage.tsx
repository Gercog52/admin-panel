import React from 'react';
import { makeStyles } from '@material-ui/core';
import bgLogin from '../../images/bgLogin.png';
import Google__G__Logo from '../../images/Google__G__Logo.png';

const useStyles = makeStyles({
  LoginPageWrap: {
    backgroundImage: `url(${bgLogin})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginPageWrap__title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 400,
    letterSpacing: -0.47,
    margin: 0,
  },
  LoginPageWrap__loginBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 27,
    width: 270,
    height: 40,
    borderRadius: '55px 55px 55 px 55px',
    overflow: 'hidden',
    '& :hover': {
      cursor: 'pointer'
    },
  },
  LoginPageWrap__loginBtnText: {
    width: 224,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#512da8',
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'uppercase',
    borderRadius: '0px 55px 55px 0px',
  },
  LoginPageWrap__loginBtnLogo: {
    width: 48,
    borderRadius: '55px 0px 0px 55px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
interface Iprops {
  authFunc: () => void
}

export default function LoginPage(props: Iprops) {
  let styles = useStyles();

  return (
    <div className={styles.LoginPageWrap}>
      <h3 className={styles.LoginPageWrap__title}>
        НОВАЯ ГАЗЕТА
      </h3>
      <div className={styles.LoginPageWrap__loginBtn} onClick={() => {props.authFunc()}}>
        <div className={styles.LoginPageWrap__loginBtnLogo}>
          <img src={`${Google__G__Logo}`} alt=""/>
        </div>
        <div className={styles.LoginPageWrap__loginBtnText}>
          ВОЙТИ С ПОМОЩЬЮ GOOGLE
        </div>
      </div>
    </div>
  )
}
