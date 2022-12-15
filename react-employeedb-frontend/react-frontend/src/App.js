import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployerComponent from './components/ListEmployerComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
    <div className="container">
      <Switch>
        <Route path="/" exact component = {ListEmployerComponent}></Route>
        <Route path='/employees' component = {ListEmployerComponent}></Route>
        <Route path='/add-employee/:id' component = {AddEmployeeComponent}></Route>
        <Route path='/view-employee/:id' component = {ViewEmployeeComponent}></Route>
        
      </Switch>
    </div>
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
