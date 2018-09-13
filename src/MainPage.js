import React, { Component } from "react";
import Book from "./Book";
import Header from "./Header";
import Footer from "./Footer";

class MainPage extends Component {
  render() {
    const { books, changeShelf } = this.props; /* DESTRUCTURING */
    // console.log(this.props.books);
    return (
      <div className="list-books">
        {/* HEADER */}
        <Header />

        <div className="list-books-content">
          <div>
            {/* BOOKSHELF CURRENTLY READING */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* GET BOOKS IN THIS SECTION AND MAP THROUGH THEM TO CREATE LIs OF BOOKS IN THE CATEGORY */}
                  {books
                    .filter(book => book.shelf === "currentlyReading")
                    .map(book => (
                      <li key={book.id}>
                        {/* PASSING PROPS TO CHILD ELEMENT */}
                        <Book
                          book={book}
                          changeShelf={changeShelf}
                          currentShelf={book.shelf}
                        />
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
                  {books
                    .filter(book => book.shelf === "wantToRead")
                    .map(book => (
                      <li key={book.id}>
                        {/* PASSING PROPS TO CHILD ELEMENT */}
                        <Book
                          book={book}
                          changeShelf={changeShelf}
                          currentShelf={book.shelf}
                        />
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
                  {books.filter(book => book.shelf === "read").map(book => (
                    <li key={book.id}>
                      {/* PASSING PROPS TO CHILD ELEMENT */}
                      <Book
                        book={book}
                        changeShelf={changeShelf}
                        currentShelf={book.shelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <Footer />
      </div>
    );
  }
}

export default MainPage;
