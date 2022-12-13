import axios from "axios";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

export const LOGOUT_USER = "LOGOUT_USER";

export const GET_USER_INFO_START = "GET_USER_INFO_START";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";

export const registerUser = (userInfo) => {
  return (dispatch) => {
    dispatch(registerStart());
    axios
      .post("http://localhost:3000/api/auth/register", {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      })
      .then((res) => {
        dispatch(registerSuccess(res.data));
      })
      .catch((err) => {
        dispatch(registerFail(err.response.data.message));
      });
  };
};

export const registerStart = () => {
  return {
    type: REGISTER_USER_START,
  };
};
export const registerSuccess = (user) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  };
};
export const registerFail = (error) => {
  return {
    type: REGISTER_USER_FAIL,
    payload: {
      error,
    },
  };
};

export const loginUser = (userInfo) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios
      .post("http://localhost:3000/api/auth/login", {
        email: userInfo.email,
        password: userInfo.password,
      })
      .then((res) => {
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFail(err.response.data.message));
      });
  };
};

export const loginStart = () => {
  return {
    type: LOGIN_USER_START,
  };
};
export const loginSuccess = (user) => {
  console.log("loginSuccess userID", user);
  localStorage.setItem("covidapp-userID", user.user);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user.user,
  };
};
export const loginFail = (error) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: {
      error,
    },
  };
};

export const logout = () => {
  localStorage.removeItem("covidapp-userID");
  return {
    type: LOGOUT_USER,
    payload: [],
  };
};

export const getUserInfo = () => {
  return (dispatch) => {
    dispatch(getUserInfoStart());
    axios
      .get("/api/user/profile")
      .then((res) => {
        console.log("userAction res", res.data);
        dispatch(getUserInfoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserInfoFail(err));
      });
  };
};

export const getUserInfoStart = () => {
  return {
    type: GET_USER_INFO_START,
  };
};
export const getUserInfoSuccess = (user) => {
  return {
    type: GET_USER_INFO_START,
    payload: user,
  };
};
export const getUserInfoFail = (error) => {
  return {
    type: GET_USER_INFO_FAIL,
    payload: error,
  };
};
