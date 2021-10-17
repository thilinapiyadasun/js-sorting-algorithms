const _shift = (items, i) => {
  const curr = items[i];

  //if i-1 > curr
  //    items[i] = items[i-1]

  let j = i - 1;

  while (items[j] > curr && j >= 0) {
    items[j + 1] = items[j];
    j--;
  }
  return j + 1;
};

const _sort = (items) => {
  for (let i = 1; i < items.length; i++) {
    let curr = items[i];
    const index = _shift(items, i);
    items[index] = curr;
  }
};
const InsertionSort = (items = []) => {
  if (items.length === 0) {
    return [];
  }
  _sort(items);
  return items;
};

export default InsertionSort;
