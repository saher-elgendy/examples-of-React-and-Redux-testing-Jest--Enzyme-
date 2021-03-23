import React from 'react';
import BookCardButton from './bookCardButton';
import { connect } from 'react-redux';
import { addBookToBag, removeBookFromBag } from '../redux/actions';



const BookCard = ({ book, bag, addBookToBag, removeBookFromBag }) => {
    return (
        <li className="book-card">
            <img src={book.cover} alt="book" className="book-cover" />
            <h4 id="book-name">{book.name}</h4>
            <h4 id="book-author">Author: <span style={{ fontWeight: 'normal' }}>{book.author}</span></h4>
            <h4 id="page-count">Page Count: <span style={{ fontWeight: 'normal' }}>{book.pagesNumber}</span></h4>
            <BookCardButton
                book={book}
                bag={bag}
                addBookToBag={addBookToBag}
                removeBookFromBag={removeBookFromBag}
            />
        </li>
    )
}

const mapStateToProps = state => ({
    bag: state.bag
});

export default connect(mapStateToProps, { addBookToBag, removeBookFromBag })(BookCard);
