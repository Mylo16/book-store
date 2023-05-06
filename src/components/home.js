import AddBook from './addNewBook';
import Books from './books';

export default function Home() {
  return (
    <>
      <div className="books">
        <Books />
        <AddBook />
      </div>
    </>
  );
}
