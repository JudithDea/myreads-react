import React, { Component } from "react";
import { Link } from "react-router-dom";
import escapeRegExp from "escape-string-regexp";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";

class SearchPage extends Component {
  state = {
    query: "",
    bookSearch: []
  };

  updateQuery = query => {
    this.setState({ query });
    this.setBookSearch(query);
  };

  setBookSearch = query => {
    BooksAPI.search(query).then(bookSearch => {
      this.setState({ bookSearch });
    });
  };

  // if (this.state.query) {
  //     const match = new RegExp(escapeRegExp(this.state.query), "i");
  //   } else {
  //     showingContacts = contacts;
  //   }

  render() {
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
            {this.state.bookSearch.map(bookSearch => (
              <li key={bookSearch.id}>{<Book book={bookSearch} />}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
