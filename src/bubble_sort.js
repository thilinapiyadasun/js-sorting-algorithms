const swap = (firstIndex, secondIndex, arr) => {
  let tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
};

const _sort = (items) => {
  //ist iteration 0 -> n-1 swaps
  //2nd 0 -> n-2
  const length = items.length;
  for (let i = 0; i < length; i++) {
    let isSorted = true;
    for (let j = 1; j < length - i; j++) {
      if (items[j - 1] > items[j]) {
        swap(j - 1, j, items);
        isSorted = false;
      }
    }
    if (isSorted) {
      return;
    }
    console.log("itr");
  }
};
const BubbleSort = (items = []) => {
  if (items.length === 0) {
    return [];
  }
  _sort(items);
  return items;
};

export default BubbleSort;
