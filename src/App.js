import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './components/Home';
import Products from './components/Products';
import Posts from './components/Posts';

/* ÄNDRA SWITCHES TILL RÄTT COMPONENTS EFTER LAGT TILL FLER */

class App extends Component {

  constructor(props) {
    
    super(props);
    this.state = {}
  }
  
  render() {

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>            
            <Route path="/media">
              <Homepage />
            </Route>
            <Route path="/orders">
              <Homepage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    );

  }

} 













export default App;