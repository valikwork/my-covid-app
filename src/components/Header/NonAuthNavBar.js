import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as ReactLogo } from '../../covid-19.svg';

const useStyles = makeStyles((theme) => ({
    toRight: {
        marginLeft: 'auto'
    }
}));

export default function NonAuthNavBar({ handleLoginFormPopUp, handleRegisterFormPopUp }) {
    const classes = useStyles();
    return (
        <Toolbar>
            <Link to="/">
                <Button>
                    <ReactLogo />
                </Button>
            </Link>
            <Link to="/states">
                <Button className="menuBtn">States</Button>
            </Link>
            <Link to="/countries">
                <Button className="menuBtn">Countries</Button>
            </Link>
            <Link to="/vaccines">
                <Button className="menuBtn">Vaccines</Button>
            </Link>
            <div className={classes.toRight}>
                <Button className="menuBtn" onClick={handleLoginFormPopUp}>Login</Button>
                <Button className="menuBtn" onClick={handleRegisterFormPopUp}>Register</Button>
            </div>
        </Toolbar>
    )
}
