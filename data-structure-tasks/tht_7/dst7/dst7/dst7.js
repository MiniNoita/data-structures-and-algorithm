/* eslint-disable new-cap */

import { List } from 'simple-double-linked-list';

function listFromArray(arr) {
  const list = new List();

  arr.forEach((song) => {
    list.AddFront(song);
  });

  return list;
}

function print(list) {
  for (let i = list.Begin(); !i.IsAtEnd(); i.Next()) {
    console.log(i.Value());
  }
}

function printReverse(list) {
  let count = 0;

  for (let i = list.End(); count < i.Size(); i.Previous()) {
    console.log(i.Value());
    count++;
  }
}

function insertToIndex(list, index, item) {
  if (index < 0 || index > list.Size()) {
    return false;
  }

  if (index <= list.Size()) {
    const iterator = list.Begin();

    for (let i = 1; i < index; i++) {
      iterator.Next();
    }

    list.InsertBefore(item, iterator);
  } else {
    list.AddFront(item);
  }

  return true;
}

function removeFromIndex(list, index) {
  if (index < 0 || index > list.Size()) {
    return false;
  }

  if (index <= list.Size()) {
    const iterator = list.Begin();

    for (let i = 0; i < index; i++) {
      iterator.Next();
    }

    list.Remove(iterator);
  }
  return true;
}

//-----------------

const testArray = [
  'HUNT/X - Golden',
  'HUNT/X - Takedown',
  'Matti ja Teppo - Mä joka päivä töitä teen',
  'Saja Boys - Soda pop',
];

const songs = listFromArray(testArray);

print(songs);

console.log('');

printReverse(songs);

console.log('');

insertToIndex(songs, 3, 'bbNo$ - 1-800');

print(songs);

console.log('');

removeFromIndex(songs, 3);

print(songs);

//--------------------

export { listFromArray, print, printReverse, insertToIndex, removeFromIndex };
