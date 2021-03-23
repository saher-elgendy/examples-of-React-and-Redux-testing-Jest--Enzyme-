import React from 'react'
import BookCard from './bookCard';


const BookStore = ({ books }) => {
    return (
        <div className="book-store">
            <ul className="books-list">
                {
                    books.map((book, i) => {
                        return (
                            <BookCard key={i} book={book} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BookStore;
