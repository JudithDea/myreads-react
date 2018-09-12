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

  //   USER TYPES QUERY, SEARCH RUNS, RESULT IS SET IN bookSEARCH STATE
  updateQuery = query => {
    this.setState({ query });
    this.setBookSearch(query);
  };

  //   IF NO RESULT OR PREVIOUS SEARCH IS NOW EMPTY, bookSEARCH NEEDS TO BE EMPTY ARRAY
  setBookSearch = query => {
    if (query) {
      BooksAPI.search(query).then(bookSearch => {
        if (bookSearch.error || !bookSearch) {
          this.setState({ bookSearch: [] });
        } else {
          this.setState({ bookSearch });
        }
      });
    } else {
      this.setState({ bookSearch: [] });
    }
  };

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
              <li key={bookSearch.id}>
                {
                  <Book
                    book={bookSearch}
                    changeShelf={this.props.changeShelf}
                  />
                }
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
