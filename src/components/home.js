import AddBook from './addNewBook';
import BookCards from './bookCards';

export default function Home() {
  return (
    <>
      <div className="books">
        <BookCards />
        <AddBook />
      </div>
    </>
  );
}
