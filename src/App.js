import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  // FETCHING THE BOOKS
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    // console.log(this.state.books);
    return (
      <div className="app">
        {/* MAIN PAGE */}
        <Route
          exact
          path="/"
          render={() => <MainPage books={this.state.books} />}
        />
        {/* SEARCH PAGE */}
        <Route path="/search" render={({ history }) => <SearchPage />} />
      </div>
    );
  }
}

export default BooksApp;
