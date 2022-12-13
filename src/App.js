import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./content/Home";
import Countries from "./content/Countries/Countries";
import States from "./content/States/States";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainContainer from "./content/MainContainer";
import OneState from "./content/States/OneState";
import OneCountry from "./content/Countries/OneCountry";
import Vaccines from "./content/Vaccines/Vaccines";
import VaccinesCountries from "./content/Vaccines/VaccinesCountries";
import VaccinesOneCountry from "./content/Vaccines/VaccinesOneCountry";
import UserPage from "./content/UserPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "./redux/actions/userActions";

function App() {
  const [hasUserRequested, setUserRequested] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAuthenticated = !!currentUser;
  const hasUserIdInLocalStore = localStorage.getItem("covidapp-userID");

  // useEffect(() => {
  //   console.log("currentUser from redux", currentUser);
  //   if (!isAuthenticated) {
  //     dispatch(loginUser(localStorage.getItem("covidapp-userID")))
  //       .then(() => setUserRequested(true))
  //       .catch(() => setUserRequested(true));
  //   }
  // }, [dispatch, currentUser, isAuthenticated]);
  // if (!hasUserRequested) return null;

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainContainer>
              <Home />
            </MainContainer>
          </Route>

          <Route exact path="/countries">
            <MainContainer>
              <Countries />
            </MainContainer>
          </Route>

          <Route exact path="/countries/:name">
            <MainContainer>
              <OneCountry />
            </MainContainer>
          </Route>

          <Route exact path="/states">
            <MainContainer>
              <States />
            </MainContainer>
          </Route>

          <Route exact path="/states/:name">
            <MainContainer>
              <OneState />
            </MainContainer>
          </Route>

          <Route exact path="/vaccines">
            <MainContainer>
              <Vaccines />
            </MainContainer>
          </Route>

          <Route exact path="/vaccines/countries">
            <MainContainer>
              <VaccinesCountries />
            </MainContainer>
          </Route>

          <Route exact path="/vaccines/countries:name">
            <MainContainer>
              <VaccinesOneCountry />
            </MainContainer>
          </Route>

          <ProtectedRoute exact path="/me">
            <MainContainer>
              <UserPage />
            </MainContainer>
          </ProtectedRoute>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
