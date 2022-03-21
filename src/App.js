import React from 'react';
import {withRouter} from 'react-router';

import { BrowserRouter as Router } from "react-router-dom";
import  {Switch, Route} from "react-router"
import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';
import Handyman from './pages/Handyman';

function App() {
  return (
 
   
      <Router>
      <Switch>
        <Route exact path="/" component={(Dashboard)}/>
        <Route path="/customer" component={withRouter(Customer)}/>
        <Route path="/handyman" component={Handyman}/>
      
      </Switch>
    
      </Router>
  

  );
}

export default App;
