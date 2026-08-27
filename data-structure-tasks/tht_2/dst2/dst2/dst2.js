const xkauppamap = new Map([
  ['nimi', 'xkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 20],
  ['karvalakki', 5],
]);
const ykauppamap = new Map([
  ['nimi', 'ykauppa'],
  ['lumilapio', 5],
  ['potkukelkka', 20],
  ['karvalakki', 1],
]);
const zkauppamap = new Map([
  ['nimi', 'zkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 25],
  ['karvalakki', 15],
]);

//this function returns every shops items sum
function sum(shop) {
  let itemSum = 0;
  const mapIter = shop.values();

  for (let i = 0; i < shop.size; i++) {
    const item = mapIter.next().value;
    if (item > 0) {
      itemSum += item;
    }
  }
  return itemSum;
}

//this function creates one map from all of the maps where key's are the name of the store and value is the sum of the shop items
function createSumMap(key, ...shops) {
  const sumMap = new Map();

  shops.forEach((shop) => {
    sumMap.set(shop.get(key), sum(shop));
  });

  return sumMap;
}

function minValueMap(mapX) {
  const minMap = new Map([]);

  let min = Infinity;
  let name = '';

  mapX.forEach((value, key) => {
    if (value < min) {
      min = value;
      name = key;
    }
  });

  return minMap.set(name, min);
}

console.log(
  minValueMap(createSumMap('nimi', xkauppamap, ykauppamap, zkauppamap)),
);

export { sum, createSumMap, minValueMap };
