import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const AddBook = () => {
  const [value, setValue] = useState({
    item_id: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
      category: 'Science Fiction',
      item_id: crypto.randomUUID(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(value));
    setValue({});
  };

  return (
    <section className="add-book">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          value={value.title || ''}
          type="text"
          name="title"
          required
          placeholder="Enter book title"
          onChange={handleChange}
        />

        <input
          value={value.author || ''}
          type="text"
          name="author"
          placeholder="Enter Author"
          required
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
