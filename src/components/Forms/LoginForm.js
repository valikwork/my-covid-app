import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  CircularProgress,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Dialog,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { loginUser } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

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
}));

export default function LoginForm({ handleClose, open }) {
  const classes = useStyles();

  const noErrorState = {
    passwordError: false,
    emailError: false,
  };

  const passwordRequirments =
    "Minimum 6 characters, at least one letter and one number";
  const emailValidationText = "Please enter valid email";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(noErrorState);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const fetchError = useSelector((state) => state.user.error);
  const loggedUser = useSelector((state) => state.user.currentUser);

  const passwordHandler = (value) => {
    setErrors((prevState) => ({
      passwordError: false,
      emailError: prevState.emailError,
    }));
    setPassword(value);
  };

  const emailHandler = (value) => {
    setErrors((prevState) => ({
      passwordError: prevState.passwordError,
      emailError: false,
    }));
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = formValidation();
    if (isFormValid) {
      const userToSignIn = { email, password };
      dispatch(loginUser(userToSignIn));
    }
  };

  useEffect(() => {
    if (loggedUser) handleClose();
  }, [loggedUser, handleClose]);

  const formValidation = () => {
    setErrors(noErrorState);
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    let res = true;

    if (!emailRegex.test(email)) {
      console.log("email dont match");
      setErrors((prevState) => ({
        passwordError: prevState.passwordError,
        emailError: true,
      }));
      res = false;
    }
    if (!passRegex.test(password)) {
      console.log("password dont match");
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
      <DialogTitle id="simple-dialog-title">Login</DialogTitle>
      <span className={classes.closeBtn} onClick={handleClose}>
        +
      </span>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please, fill this form below
        </DialogContentText>
        {fetchError ? (
          <DialogContentText>
            <Typography color="error" variant="subtitle2">
              {fetchError.error}
            </Typography>
          </DialogContentText>
        ) : null}
        <DialogActions>
          <form
            className={classes.form}
            noValidate={false}
            onSubmit={(e) => handleSubmit(e)}
          >
            <TextField
              fullWidth
              value={email}
              error={errors.emailError}
              onChange={(e) => emailHandler(e.target.value)}
              required
              id="register-email"
              label={errors.emailError ? emailValidationText : "Email"}
              variant="outlined"
            />

            <TextField
              fullWidth
              value={password}
              error={errors.passwordError}
              onChange={(e) => passwordHandler(e.target.value)}
              id="register-password"
              required
              type="password"
              placeholder={passwordRequirments}
              label={
                errors.passwordError
                  ? `Password - ${passwordRequirments}`
                  : "Password"
              }
              variant="outlined"
            />

            <Button
              variant="outlined"
              color="primary"
              size="medium"
              type="submit"
            >
              {isLoading ? <CircularProgress size={14} /> : "Submit"}
            </Button>
          </form>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
