function findAccountById(accounts, id) {
  // use find method to find accounts by ID
  return accounts.find((item) => item.id === id);
}

function sortAccountsByLastName(accounts) {
  // use sort method to sort the last names; make sure to use the toLowerCase to ensure we are comparing all lower case letters
  return accounts.sort((nameA, nameB) =>
    nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
// loop through books array, use find method to match borrowID to accountId; push; return length;
  let totalBorrowers = [];
  for (let book in books) {
    let counter = books[book].borrows.find(
      (borrow) => borrow.id === account.id
    );
    if (counter) {
      totalBorrowers.push(counter);
    }
  }
  return totalBorrowers.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  // use filter method to filter for all the matching accounts that have a book checked out 
  return books
    .filter(
      (book) =>
        book.borrows[0].id === account.id && book.borrows[0].returned === false
    )
    // use the map method to add the author
    .map((book) => {
      book["author"] = authors.find((author) => author.id === book.authorId);
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
