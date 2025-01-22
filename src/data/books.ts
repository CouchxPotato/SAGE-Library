export interface Book {
  id: number;
  book_name: string;
  author: string;
  shelf_no: number;
}

export const books: Book[] = [
  { id: 1, book_name: "The Great Gatsby", author: "F. Scott Fitzgerald", shelf_no: 1 },
  { id: 2, book_name: "1984", author: "George Orwell", shelf_no: 2 },
  { id: 3, book_name: "To Kill a Mockingbird", author: "Harper Lee", shelf_no: 1 },
  { id: 4, book_name: "The Catcher in the Rye", author: "J.D. Salinger", shelf_no: 1 },
  { id: 5, book_name: "The Hobbit", author: "J.R.R. Tolkien", shelf_no: 2 },
  { id: 6, book_name: "Moby-Dick", author: "Herman Melville", shelf_no: 3 },
  { id: 7, book_name: "Pride and Prejudice", author: "Jane Austen", shelf_no: 4 },
  { id: 8, book_name: "War and Peace", author: "Leo Tolstoy", shelf_no: 3 },
  { id: 9, book_name: "The Odyssey", author: "Homer", shelf_no: 2 },
  { id: 10, book_name: "Crime and Punishment", author: "Fyodor Dostoevsky", shelf_no: 2 }
];