import React, { Component } from "react";
import { Link } from "react-router-dom";
import escapeRegExp from "escape-string-regexp";
import Book from "./Book";

class SearchPage extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query });
  };

  render() {
    const { query, books } = this.state;

    // let showingBooks;
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), "i");
    //   showingBooks = books.filter(book => match.test(book));
    // } else {
    //   showingBooks = books;
    // }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          {/* {JSON.stringify(this.state)} */}
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* <li>{<Book book={book} />}</li> */}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
