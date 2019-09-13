'use strict';

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

//let index = matrix[1][1];
let adjacentElements = [];
let i = 2, j = 0;// can be change 

let k = 0;
for( (i-1 >= 0 ? k = i-1 : k = i); ( matrix[i+1] ? k<i+2: k<i+1); k++){
  for(let l = j-1; l<j+2; l++){
    if(matrix[k][l] && (i === k ? j !== l : 1))      
      adjacentElements.push(matrix[k][l]);
  }
}

console.log(adjacentElements);