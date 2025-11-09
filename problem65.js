
// ### 65. Word Frequency Summary
// Build a frequency summary of words used in a poem draft.

const q65 = `It grew louder louder louder I thought the heart must 
burst And still the men chatted`.split(' ');

const dict = (array) => {

  const table = [];
  const frequencies = [];

  for (let index = 0; index < array.length; index++) {
    if (!table.includes(array[index])) {
      table.push(array[index]);
      frequencies.push(1);
    }
    else {
      frequencies[array.indexOf(array[index])] += 1;
    }

  }

  return [table, frequencies];
}

console.log(dict(q65));

