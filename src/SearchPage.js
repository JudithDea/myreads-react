import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

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
        bookSearch.error || !bookSearch
          ? this.setState({ bookSearch: [] })
          : this.setState({ bookSearch });
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
            {this.state.bookSearch.map(bookSearch => {
              let noShelf = "none";

              // COMPARE BOOKS FROM MAIN PAGE WITH BOOKS FROM SEARCH TO ASSIGN SHELF IF APPLICABLE
              this.props.books.map(
                book =>
                  book.id === bookSearch.id ? (noShelf = book.shelf) : ""
              );

              return (
                <li key={bookSearch.id}>
                  <Book
                    book={bookSearch}
                    changeShelf={this.props.changeShelf}
                    currentShelf={noShelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
