import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../covid-19.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px'
    }
  }));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
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
                </Toolbar>
            </AppBar>
        </div>
    )
}
