import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  CircularProgress,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Dialog,
  Button,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "5px",
    right: "13px",
    transform: "rotateZ(45deg)",
    fontSize: "2rem",
  },
  form: {
    width: "100%",
    "& > div": {
      marginBottom: "20px",
    },
  },
  warning: {
    color: "#f44336",
    textTransform: "capitalize",
  },
}));

export default function RegisterForm({ handleClose, open }) {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.user);

  const noErrorState = {
    passwordError: false,
    emailError: false,
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(noErrorState);
  const [registerErrors, setRegisterErrors] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = formValidation();
    if (isFormValid) {
      setLoading(true);
      const userToSignUp = { firstName, lastName, email, password };
      dispatch(registerUser(userToSignUp));
    }
  };

  useEffect(() => {
    if (currentUser.error) {
      setRegisterErrors(currentUser.error.error);
      setLoading(false);
      setErrors((prevState) => ({
        passwordError: prevState.passwordError,
        emailError: true,
      }));
    } else {
      setRegisterErrors(null);
    }
  }, [currentUser.error]);

  useEffect(() => {
    if (currentUser.currentUser && currentUser.currentUser.id) {
      handleClose();
    }
  }, [currentUser, handleClose]);

  const formValidation = () => {
    setErrors(noErrorState);
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    let res = true;

    if (!emailRegex.test(email)) {
      console.log("email dont match with regexp");
      setErrors((prevState) => ({
        passwordError: prevState.passwordError,
        emailError: true,
      }));
      res = false;
    }
    if (!passRegex.test(password)) {
      console.log("password dont match with regexp");
      setErrors((prevState) => ({
        emailError: prevState.emailError,
        passwordError: true,
      }));
      res = false;
    }
    return res;
  };

  return (
    <Dialog
      className={classes.root}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Register</DialogTitle>
      <span className={classes.closeBtn} onClick={handleClose}>
        +
      </span>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please, fill this form below
        </DialogContentText>
        <DialogActions>
          <form
            className={classes.form}
            noValidate={false}
            onSubmit={(e) => handleSubmit(e)}
          >
            <TextField
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="register-first-name"
              label="First Name"
              variant="outlined"
            />
            <TextField
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="register-last-name"
              label="Last Name"
              variant="outlined"
            />
            {registerErrors && (
              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.warning}
              >
                {registerErrors}
              </Typography>
            )}
            <TextField
              fullWidth
              value={email}
              error={errors.emailError}
              onChange={(e) => {
                if (registerErrors) setRegisterErrors(null);
                setEmail(e.target.value);
              }}
              required
              id="register-email"
              label="Email"
              variant="outlined"
            />
            <TextField
              fullWidth
              value={password}
              error={errors.passwordError}
              onChange={(e) => setPassword(e.target.value)}
              id="register-password"
              required
              type="password"
              placeholder="Minimum 6 characters, at least one letter and one number"
              label="Password"
              variant="outlined"
            />
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              type="submit"
            >
              {loading ? <CircularProgress size={14} /> : "Submit"}
            </Button>
          </form>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
