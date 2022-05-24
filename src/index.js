function insertionSort(arr) {
  // insert current element in the right place (for loop), start from 2nd element
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let tempIdx = i;
    let j = i - 1;
    // the element we're replacing is less than the element in front of it
    while (j >= 0 && temp < arr[j]) {
      // push everything right like in a linkedlist
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // now i need to insert after pushing things back
    arr[j + 1] = temp;
    j = j - 1;
  }
  return arr;
}
