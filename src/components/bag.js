import React, { useState, useEffect } from 'react';
import bagIcon from './../static/icon.png';
import { connect } from 'react-redux';


const Bag = ({ bag }) => {
    const [open, setOpen] = useState(false);

    const toggleOpenBag = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (open) {
            document.addEventListener('click', toggleOpenBag);
        }

        return () => {
            document.removeEventListener('click', toggleOpenBag)
        }
    }, [open]);

    return (
        <div className="bag">
            <div className="bag-container" id="bag-container">
                <span className="books-count" id="books-count">{bag.length}</span>
                <img src={bagIcon} alt="bag" onClick={toggleOpenBag} id="bag-image"/>

                {
                    open && <div className="bag-content" id="bag-content">
                        <ul className="bag-books">
                            {
                                bag.length ? bag.map((book, i) => {
                                    return (
                                        <>
                                            <li key={i} className="bag-item">
                                                <img src={book.cover} alt="book_cover" className="bag-book-cover" />
                                                <div className="book-details">
                                                    <span style={{ textAlign: 'left' }}>{book.name}</span>
                                                    <span style={{
                                                        fontSize: '0.8rem',
                                                        color: 'rgb(167 167 167)',
                                                        display: 'block'
                                                    }}>
                                                        {book.author}</span>
                                                </div>

                                            </li>

                                            {i !== bag.length - 1 && <hr />}
                                        </>
                                    )

                                }) : <span className="no-books" data-testid="no-books">No books found</span>
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    bag: state.bag
});

export default connect(mapStateToProps)(Bag);
