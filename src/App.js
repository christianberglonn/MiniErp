import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './components/Home';
import Products from './components/Products';
import Posts from './components/Posts';
import Media from './components/Media';
import Orders from './components/Orders';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {}
  }

  render() {

    return (
      <Router>
        <div>
          <nav class="center-navbar">
            <a>
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/products">Products</Link>
            </a>
            <a>
              <Link to="/posts">Posts</Link>
            </a>
            <a>
              <Link to="/media">Media</Link>
            </a>
            <a>
              <Link to="/orders">Orders</Link>
            </a>

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
              <Media />
            </Route>
            <Route path="/orders">
              <Orders />
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