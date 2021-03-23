import React from 'react';
import Bag from './bag';
import BookStore from './bookStore';

const Main = ({data: {error, loading, books}}) => {
    return (

        <div className="App">
            <header data-testid="header">
                <h2>React Testing</h2>
                <Bag />
            </header>
            {
                error ? <span id="error">{error}</span> :
                    !loading ? <BookStore books={books} /> : <span data-testid='loading-message'>...loading books</span>
            }
        </div>
    );
}

export default Main;
