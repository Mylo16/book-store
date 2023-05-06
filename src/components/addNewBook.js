export default function AddBook() {
  return (
    <>
      <form>
        <h2>Add New Book</h2>
        <input type="text" required className="add-book" placeholder="Add new Book" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
