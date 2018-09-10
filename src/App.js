import React from "react";
// import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        {/* SEARCH PAGE */}
        <Route path="/search" render={({ history }) => <SearchPage />} />
        {/* MAIN PAGE */}
        <Route exact path="/" render={() => <MainPage />} />
      </div>
    );
  }
}

export default BooksApp;
