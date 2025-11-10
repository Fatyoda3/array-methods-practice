const q65 = `garlic salt water`.repeat(3).split(' ');

const frequency = (table, currentWord) => {
  const reading = table.find(group => group[0] === currentWord);

  if (!reading) {
    table.push([currentWord, 1]);
    return table;
  }
  reading[1] += 1;
  return table;
};
const a65 = q65.reduce(frequency, []);

console.log(a65);