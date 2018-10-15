import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Submitted from '../Submitted/Submitted';
import Admin from '../Admin/Admin';

class App extends Component {

  state={
    goToPage1: false,
    showButton: true
  }

  handleClick=()=>{
    this.setState({goToPage1: true, showButton: false});
  }

  render() {

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <ProgressBar />
        </header>
        <Page1 />
        <br/>
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
        <Route exact path="/submitted" component={Submitted} />
        <Route exact path="/admin" component={Admin} />
      </div>
      </Router>
    );
  }
}


export default App;
