import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Submitted from '../Submitted/Submitted';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <ul>
          <li>
            <Link to="/page1" >Page 1</Link>
          </li>
          <li>
            <Link to="/page2" >Page 2</Link>
          </li>
          <li>
            <Link to="/page3" >Page 3</Link>
          </li>
          <li>
            <Link to="/page4" >Page 4</Link>
          </li>
          <li>
            <Link to="/submitted" >Submitted</Link>
          </li>
        </ul>
        <br/>
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
        <Route exact path="/submitted" component={Submitted} />
      </div>
      </Router>
    );
  }
}

export default App;
