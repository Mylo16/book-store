import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

export default function BookCards() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.book.books);
  return (
    <>
      <div className="bks">
        {
          books.map((book) => (
            <div key={book.item_id} className="book-container">
              <div className="card-col1">
                <p>{book.category}</p>
                <h1>{book.title}</h1>
                <p>{book.author}</p>
                <ul className="features">
                  <li className="feature"><button type="button" className="link">Comments</button></li>
                  <li className="feature"><button type="button" onClick={() => dispatch(removeBook(book.item_id))} className="link remove">Remove</button></li>
                  <li className="feature"><button type="button" className="link">Edit</button></li>
                </ul>
              </div>
              <div className="card-col2">
                <div className="progress" />
                <div className="progress-info">
                  <p>80%</p>
                  <p>Completed</p>
                </div>
              </div>
              <div className="card-col3">
                <p>CURRENT CHAPTER</p>
                <p>CHAPTER 3</p>
                <button type="button" className="update">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
