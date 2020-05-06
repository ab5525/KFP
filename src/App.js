import React from 'react';
import './App.css';
import Homepage from './homepage';
import Header from './components/header/header';
import {Switch, Route} from 'react-router-dom';
import Donate from './pages/donate/donate';
import {connect} from 'react-redux';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route  path='/donate' component={Donate} />
      </Switch>
      
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(App);
