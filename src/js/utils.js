import {shuffle, sample} from 'underscore';


export const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];

export function getTurnData() {
  const allBooks = authors.reduce((p, c, i) => {
      return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
      books: fourRandomBooks,
      author: authors.find((author) =>
          author.books.some((title) =>
              title === answer))
  }
}

export const authorSchema = {
  "title": "Book",
  "type": "object",
  "required": [
    "author",
    "imageUrl",
    "bookTemp"
  ],
  "properties": {
    "author": {
      "type": "string",
      "title": "Author Name",
      "minLength": 1
    },
    "imageUrl": {
      "type": "string",
      "title": "Image URL",
      "minLength": 1
    },
    "bookTemp": {
      "type": "string",
      "title": "Book",
      "minLength": 1
    }
  }
};

export function pushUnique(array, item){
  if(!array.includes(item)) {
      array.push(item);
      return true;
  }
  return false;
}

export function hasKey(object, key, value) {
  return object[key] === value;
}

export function addAuthorTitle(authors, author) {
  let added = false;
  authors.some((a) => {
    if(hasKey(a, "name", author.name)) {
      pushUnique(a.books, author.books[0]);
      added = true;
    }
    return added;
  });

  if(!added) {
    authors.push(author);
  }
}
