import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../covid-19.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <ReactLogo />
                        </Button>
                    </Link>
                    <Link to="/countries">
                        <Button>Countries</Button>
                    </Link>
                    <Link to="/states">
                        <Button>States</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
