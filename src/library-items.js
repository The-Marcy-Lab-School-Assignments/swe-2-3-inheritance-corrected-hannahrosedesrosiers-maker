/* eslint-disable max-classes-per-file */

class LibraryItem {
  constructor(title, year) {
    this.title = title;
    this.year = year;
    this.isCheckedOut = false;
  }

  checkOut() {
    this.isCheckedOut = true;
    return `${this.title} has been checked out`;
  }

  returnItem() {
    this.isCheckedOut = false;
    return `${this.title} has been returned`;
  }

  getDescription() {
    return `${this.title} (${this.year})`;
  }
}

class Book extends LibraryItem {
  constructor(title, year, author, pages) {
    super(title, year);
    this.author = author;
    this.pages = pages;
  }

  getDescription() {
    return `${this.title} (${this.year}) by ${this.author}, ${this.pages} pages`;
  }
}

class DVD extends LibraryItem {
  constructor(title, year, director, runtime) {
    super(title, year);
    this.director = director;
    this.runtime = runtime;
  }

  getDescription() {
    return `${this.title} (${this.year}) directed by ${this.director}, ${this.runtime} min`;
  }
}

class Magazine extends LibraryItem {
  constructor(title, year, issue) {
    super(title, year);
    this.issue = issue;
  }

  getDescription() {
    return `${this.title} (${this.year}) Issue #${this.issue}`;
  }
}

module.exports = {
  LibraryItem,
  Book,
  DVD,
  Magazine,
};
