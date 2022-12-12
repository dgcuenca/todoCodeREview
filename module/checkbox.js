/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import { bookList, Book } from '../src/index.js';

let notCompleted = [];
let filtered = [];
function clearAllTask() {
  notCompleted = [];
  filtered = bookList.filter((book) => book.completed !== true);
  for (let i = 0; i < filtered.length; i += 1) {
    const newBook = new Book(filtered[i].description, filtered[i].completed, i + 1);
    notCompleted.push(newBook);
  }
}
export { clearAllTask, notCompleted };