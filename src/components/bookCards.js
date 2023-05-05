import '../App.css';
import Proptypes from 'prop-types';

export default function BookCards({ books }) {
  return (
    <>
      {
        books.map((book) => (
          <div key={book.id} className="book-container">
            <div className="card-col1">
              <p>{book.category}</p>
              <h1>{book.title}</h1>
              <p>{book.author}</p>
              <ul className="features">
                <li className="feature"><button type="button" className="link">Comments</button></li>
                <li className="feature"><button type="button" className="link">Remove</button></li>
                <li className="feature"><button type="button" className="link">Edit</button></li>
              </ul>
            </div>
            <div className="card-col2">
              <div className="progress" />
              <div className="progress-info">
                <p>{book.completion}</p>
                <p>Completed</p>
              </div>
            </div>
            <div className="card-col3">
              <p>CURRENT CHAPTER</p>
              <p>{book.chapter}</p>
              <button type="button" className="update">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        ))
      }
    </>
  );
}

BookCards.propTypes = {
  books: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};
