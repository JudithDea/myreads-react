import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book } = this.props; /* DESTRUCTURING */

    // IN CASE A BOOK HAS NO THUMBNAIL
    const noThumbnail = "";

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              /* NOT REALLY *BACKGROUND* BUT THUMBNAIL, URL SHOULD READ LIKE: url("http://etc") */
              backgroundImage: `url("${
                this.props.book.imageLinks
                  ? this.props.book.imageLinks.thumbnail
                  : noThumbnail
              }")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e => this.props.changeShelf(book, e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
