import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Admin } from './components/Admin';
import { Categories } from './components/Categories';
import { CategoryShow } from './components/CategoryShow';
import { Home } from './components/Home';
import { MovieShow } from './components/MovieShow';
import { Movies } from './components/Movies';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go watch a movie</h1>
          <hr className="mb-3" />
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/categories">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalog</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <Switch>
              <Route
                path="/movies/:id"
                render={(props) => <MovieShow {...props} />}
              />
              <Route path="/movies">
                <Movies />
              </Route>
              <Route exact path="/categories">
                <Categories />
              </Route>
              <Route
                path="/categories/:id"
                render={(props) => <CategoryShow {...props} />}
              />
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
