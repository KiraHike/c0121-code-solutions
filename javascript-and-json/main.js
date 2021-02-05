var bookshelf = [
  {
    isbn: '978-0143111580',
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    isbn: '978-0765394866',
    title: 'Ender\'s Game',
    author: 'Orson Scott Card'
  },
  {
    isbn: '978-0451524935',
    title: '1984',
    author: 'George Orwell'
  }
];

console.log('bookshelf value:', bookshelf);
console.log('typeof bookshelf:', typeof bookshelf);

var bookshelfString = JSON.stringify(bookshelf);
console.log('bookshelfString value:', bookshelfString);
console.log('typeof bookshelfString:', typeof bookshelfString);

var studentString = '{"id": 54321, "name": "Kira Hike"}';
console.log('studentString value:', studentString);
console.log('typeof studentString:', typeof studentString);

var student = JSON.parse(studentString);
console.log('student value:', student);
console.log('typeof student:', typeof student);
