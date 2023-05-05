import BookCards from './bookCards';

export default function Books() {
  const books = [
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completion: '64%',
      currentChapter: 'Chapter 17',
      id: 1,
    },
    {
      category: 'Science Fiction',
      title: 'Dunes',
      author: 'Frank Herbert',
      completion: '8%',
      currentChapter: 'Chapter 3: "A lesson learned"',
      id: 2,
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completion: '0%',
      currentChapter: 'Introduction',
      id: 3,
    },
    {
      category: 'Super Natural Powers',
      title: 'Ananse in the Land of Idiots',
      author: 'E.K Amoako',
      completion: '90%',
      currentChapter: 'Chapter 12: "The Rail"',
      id: 4,
    },
    {
      category: 'Courage',
      title: 'The Girl Who Can',
      author: 'Mylo Antwi',
      completion: '69%',
      currentChapter: 'Chapter 4',
      id: 5,
    },
  ];
  return (
    <>
      <BookCards books={books} />
    </>
  );
}
