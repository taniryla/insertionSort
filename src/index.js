// your code goes here

function insertionSort(arr) {
  // insert current element in the right place (for loop), start from 2nd element
  for (let i = 1; i < arr.length; i++) {
    console.log(arr.slice(0, i), "-", arr.slice(i, arr.length));
    let temp = arr[i];
    let tempIdx = i;
    // j is like the previous index
    let j = i - 1;
    // the element we're replacing is less than the element in front of it
    // while loop is just for the sorted array
    while (j >= 0 && temp < arr[j]) {
      // push everything right like in a linkedlist
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // now i need to insert after pushing things back
    // moving the pointer on the non-sorted array
    arr[j + 1] = temp;
    // j = j -1;
  }
  return arr;
}

console.log(insertionSort([1, 3, 2, 7, 5, 0, 6, 4]));
