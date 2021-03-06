// Task:
// Transpose the columns and rows of arr1 and put them into a new array (arr2)

let arr1 = [
    [2, 5, 8, 6, 7, 4, 7],
    [5, 9, 2, 3, 6, 6, 8],
    [7, 2, 3, 7, 3, 2, 3],
    [5, 1, 4, 2, 8, 1, 2],
    [2, 3, 7, 4, 2, 5, 1]
]

// arr2 should look like this
arr2 = [
    [2, 5, 7, 5, 2],
    [5, 9, 2, 1, 3],
    [8, 2, 3, 4, 7],
    [6, 3, 7, 2, 4],
    [7, 6, 3, 8, 2],
    [4, 6, 2, 1, 5],
    [7, 8, 3, 2, 1]
]

function transposeArray(arr1) {
    let arr2 = [];
    for (let x = 0; x < arr1[0].length; x++) {  // x = columns
        let tempArr = [];
        for (let i = 0; i < arr1.length; i++) {  // i = rows
            tempArr.push(arr1[i][x]);  // tempArr is the x(th) column in arr1
        }
        arr2.push(tempArr);  // push each column as an array in arr2
    }
    return arr2;
}
console.log(transposeArray(arr1)); // please have a look to the console


