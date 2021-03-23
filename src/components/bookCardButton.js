import React from 'react'


const BookCardButton = ({ bag, book, addBookToBag, removeBookFromBag }) => {
    const index = bag.findIndex(b => b.cover === book.cover);

    const addToBagBtn = <button
        onClick={() => addBookToBag(book)}
        className="book-card-btn add-book-btn">
        ADD TO BAG
    </button>

    const removeFromBagBtn = <button
        onClick={() => removeBookFromBag(book)}
        className="book-card-btn remove-book-btn"
    >
        REMOVE FROM BAG
    </button>

    return (
        index < 0 ? addToBagBtn : removeFromBagBtn
    )
}

export default BookCardButton
