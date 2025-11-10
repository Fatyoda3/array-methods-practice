// Write a function that can take an array of sentences and return all the words that start with 'a' (regardless of case)

const sentences = [
  'just a phrase',
  'also another phrase',
  'arbitrary phrase',
  'An interesting phrase'
];

sentences.flatMap((str) => str
  .split(' ')
  .filter(word => word[0] === 'a'))
// Output:

// [ "a", "also", "another", "arbitrary", "An" ]