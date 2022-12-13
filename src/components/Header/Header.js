import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';
import { useSelector } from 'react-redux';
import AuthNavBar from './AuthNavBar';
import NonAuthNavBar from './NonAuthNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px'
    },
    menuBtn: {
        textDecoration: 'none',
        color: '#fff'
    },
    toRight: {
        marginLeft: 'auto'
    }
  }));

export default function Header() {
    const classes = useStyles();
    const [loginFormOpen, setLoginFormOpen] = useState(false)
    const [registerFormOpen, setRegisterFormOpen] = useState(false)
    const isAuth = useSelector(state => state.user.currentUser)

    const handleLoginFormPopUp = () => {
        setLoginFormOpen(!loginFormOpen)
        setRegisterFormOpen(false)
    }
    const handleRegisterFormPopUp = () => {
        setRegisterFormOpen(!registerFormOpen)
        setLoginFormOpen(false)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                {isAuth ? <AuthNavBar /> : <NonAuthNavBar handleLoginFormPopUp={handleLoginFormPopUp} handleRegisterFormPopUp={handleRegisterFormPopUp} />}
            </AppBar>
            {loginFormOpen ? <LoginForm open={loginFormOpen} handleClose={handleLoginFormPopUp} /> : null}
            {registerFormOpen ? <RegisterForm open={registerFormOpen} handleClose={handleRegisterFormPopUp} /> : null}
        </div>
    )
}
