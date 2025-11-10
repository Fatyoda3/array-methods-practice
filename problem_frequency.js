const q65 = `garlic salt water`.repeat(3).split(' ');

const frequency = (table = [[]], currentWord) => {
  const group = table.find(group => group[0] === currentWord);

  if (!group) {
    table.push([currentWord, 1]);
    return table;
  }
  group[1] += 1;
  return table;
};
const a65 = q65.reduce(frequency, []);

console.log(a65);