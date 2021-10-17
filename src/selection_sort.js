const swap = (firstIndex, secondIndex, arr) => {
  let tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
  console.log(arr);
};

const _findMinIndex = (items, i) => {
  let minIndex = i;
  for (let j = i; j < items.length; j++) {
    if (items[minIndex] > items[j]) {
      minIndex = j;
    }
  }
  return minIndex;
};

const _sort = (items) => {
  const length = items.length;
  for (let i = 0; i < length; i++) {
    let minIndex = _findMinIndex(items, i);
    swap(minIndex, i, items);
  }
};

const SelectionSort = (items = []) => {
  _sort(items);
  return items;
};

export default SelectionSort;
