// Helper Function that calculates the length of the inputted array
const _getTotals = (inputArr) => inputArr.length;
function _getTopFive(inputArray) {
  inputArray.sort((paramA, paramB) => paramB.count - paramA.count);
  return inputArray.slice(0, 5);
}

function getTotalBooksCount(books) {
  // returning total books using the _getTotals helper function
  return _getTotals(books);
}

function getTotalAccountsCount(accounts) {
  // returning total accounts using the _getTotals helper function
  return _getTotals(accounts);
}

function getBooksBorrowedCount(books) {
  // find all the books that have not been returned using the filter array method and setting that condition
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  // returning total borrowed books using the _getTotals helper function
  return _getTotals(borrowedBooks);
}

function getMostCommonGenres(books) {
  //accumulator that sorts all the books passed in by genre in an object creating a new key for each new genre
  let genres = books.reduce((acc, item) => {
    if (acc[item.genre]) {
      acc[item.genre].push(item);
    } else {
      acc[item.genre] = [item];
    }
    return acc;
  }, {});
  // creating popularGenres array using the .map method
  const popularGenres = Object.keys(genres).map((item) => ({
    name: item,
    count: genres[item].length,
  }));
  //sorting the popularGenres using the _getTopFive helper function
  return _getTopFive(popularGenres);
}

function getMostPopularBooks(books) {
  // creating popularBooks array using .map and using the length of the borrows array
  const popularBooks = books.map((book) => ({name: book.title, count: book.borrows.length,}));
  // sorting the popularBooks using the _getTopFive helper function
  return _getTopFive(popularBooks);
}


function getMostPopularAuthors(books, authors) {
let popularAuthors = []
// use for each to loop through the authors to establish the counter and retrieve first and last names
authors.forEach((author) => { 
  let authorCount = { 
    name: `${author.name.first} ${author.name.last}`, count: 0
  }
//use forEach to loop through books, match authors, and add to counter based on borrows count 
  books.forEach((book) => { 
  book.authorId === author.id ? authorCount.count += book.borrows.length : null
})
//push authorCount into popularAuthors
popularAuthors.push(authorCount)
})
// sorting the popularAuthors using the _getTopFive helper function 
return _getTopFive(popularAuthors)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
