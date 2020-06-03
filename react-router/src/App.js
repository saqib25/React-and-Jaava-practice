import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router,Route,Switch} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import _404 from './404'
import History from './History'
function App() {
  return (
    <div className="App">
      React Roter
      <Router history={History}>
      <Header />
      <Switch>

        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/about"> <About /> </Route>
        <Route exact path="/contact"> <Contact /> </Route>
        <Route path="**" component={ _404} />
        </Switch>     
      <Footer />
      </Router>
      
      
      
    </div>
  );
}

export default App;



