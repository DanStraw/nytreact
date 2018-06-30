import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import Error404 from "./pages/Error404";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/results/:q" component={Results} />  
        <Route exact path="/saved" component={Saved} /> 
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);

export default App;
