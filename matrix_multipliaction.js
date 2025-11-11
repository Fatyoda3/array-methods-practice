const mulMatrix = (matrixA = [], matrixB = []) => {
  const colA = matrixA[0].length;
  const rowB = matrixB.length;
  if (colA !== rowB) {
    return [];
  }

  const rowA = matrixA.length;
  const colB = matrixB[0].length;

  const result = [];
  for (let i = 0; i < colA; i++) {
    result.push([]);
  }

  for (let i = 0; i < colA; i++) {

    for (let j = 0; j < rowB; j++) {
      console.log(result[j].push(0));
      console.log(result[j], j);

      for (let k = 0; k < rowA; k++) {
        // result[k][i] = 0;
        // result[k][i] += matrixA[i][k] * matrixB[k][j];
      }

    }
  }

  return result;
};

const a = [[2, 2], [2, 2]];
const b = [[2, 2], [2, 2]];

/* console.log */(mulMatrix(a, b));