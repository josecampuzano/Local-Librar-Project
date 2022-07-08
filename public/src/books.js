function findAuthorById(authors, id) {
  // use find method to search through array with matching author IDs
  return authors.find((item) => item.id === id);
}

function findBookById(books, id) {
  // use find method to search through array with matching book IDs
  return books.find((item) => item.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // need to create an array with two arrays inside
  let partitionArray = [[], []];
  // use for of look to look through books array, check return status of first borrows index, push into appropriate array
  for (let item of books) {
    let returnedStatus = item.borrows[0].returned;
    if (returnedStatus === false) {
      partitionArray[0].push(item);
    } else {
      partitionArray[1].push(item);
    }
  }
  return partitionArray;
}

function getBorrowersForBook(book, accounts) {
  // use reduce method to have an accumulator for userInfo; match the Ids; push account information
  let borrowersForBookReduction = accounts.reduce((userInfo, account) => {
    let matchedBorrower = book.borrows.find((item) => item.id === account.id);

    if (matchedBorrower) {
      userInfo.push({ ...account, ...matchedBorrower });
    }
    return userInfo;
  }, []);
  return borrowersForBookReduction;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
