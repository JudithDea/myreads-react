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

  // CREATE METHOD FOR MOVING BOOKS BETWEEN SHELVES
  // UPDATE FUNCTION FROM STARTER CODE
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    // CALL GETALL AGAIN TO REFRESH PAGE AFTER CHANGING STATE (SHELF)
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  render() {
    const { books } = this.state;
    // console.log(this.state.books);
    return (
      <div className="app">
        {/* MAIN PAGE */}
        <Route
          exact
          path="/"
          render={() => (
            /* PASSING PROPS TO CHILD ELEMENT */
            <MainPage books={books} changeShelf={this.changeShelf} />
          )}
        />
        {/* SEARCH PAGE */}
        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage books={books} changeShelf={this.changeShelf} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
