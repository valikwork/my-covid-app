import Header from './components/Header'
import Footer from './components/Footer'
import Home from './content/Home'
import Countries from './content/Countries/Countries'
import States from './content/States/States'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import MainContainer from './content/MainContainer'
import OneState from './content/States/OneState'
import OneCountry from './content/Countries/OneCountry'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" >
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
                <OneCountry/>
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
