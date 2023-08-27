'use strict';

const movies = [
  {
    title: 'Jurassic Park',
    year: 1993,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
  },
  {
    title: 'Inception',
    year: 2010,
    genres: ['Action', 'Sci-Fi', 'Adventure'],
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    genres: ['Action', 'Crime', 'Drama'],
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    genres: ['Drama'],
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    genres: ['Crime', 'Drama'],
  },
];

function sortByYear(array){
  return array.sort((a, b) => b.year - a.year);
}

console.log(sortByYear(movies));


function removeLeadingArticles(title) {
  return title.replace(/^(A|An|The)\s+/i, '');
}


function sortByTitle(array){
  return array.sort((a, b) => {
    const titleA = removeLeadingArticles(a.title);
    const titleB = removeLeadingArticles(b.title);
    return titleA.localeCompare(titleB);
  });
}

console.log('..................................');
console.log(sortByTitle(movies));
