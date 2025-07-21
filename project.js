// Task 1
let arrMovies = [
    ["Titanic", "The Notebook", "John Wick"],
    ["Speed", "Spirit", "Pride and Prejudice"],
    ["Ghost", "Dirty Dancing", "Pretty Woman"]
];

console.log(arrMovies);

// Task 2
for (let i = 0; i < arrMovies.length; i++) {
        console.log(arrMovies[i]);
}

// Task 3
for (let row = 0; row < arrMovies.length; row++) {
    for (let item = 0; item < arrMovies[row].length; item++) {
      console.log(arrMovies[row][item]);
    }
}
// Task 4
const secondShelf = arrMovies[1];

for (let i = 0; i < secondShelf.length; i++) {
        console.log(secondShelf[i]);
};