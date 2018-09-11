import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class MainPage extends Component {
  render() {
    // console.log(this.props.books);
    return (
      <div className="list-books">
        {/* HEADER */}
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {/* CONTAINER */}
        <div className="list-books-content">
          <div>
            {/* BOOKSHELF CURRENTLY READING */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* GET BOOKS IN CURRENTLY READING AND MAP THROUGH THEM TO CREATE LIs OF BOOKS IN THE CATEGORY */}
                  {this.props.books
                    .filter(book => book.shelf === "currentlyReading")
                    .map(book => (
                      <li key={book.id}>
                        {/* BOOK */}
                        <Book />
                      </li>
                    ))}
                </ol>
              </div>
            </div>

            {/* BOOKSHELF WANT TO READ*/}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === "wantToRead")
                    .map(book => (
                      <li key={book.id}>
                        {/* BOOK */}
                        <Book />
                      </li>
                    ))}
                </ol>
              </div>
            </div>

            {/* BOOKSHELF READ*/}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === "read")
                    .map(book => (
                      <li key={book.id}>
                        {/* BOOK */}
                        <Book />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
