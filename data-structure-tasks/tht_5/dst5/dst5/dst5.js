import Queue from 'queue-fifo';

function makeQueue(arr) {
  const queue = new Queue();

  arr.forEach((element) => {
    queue.enqueue(element);
  });

  return queue;
}

function checkQueue(myqueue, stopper) {
  //we check that is the first in queue same as the stopper
  //if it isn't, we remove it
  //if it is, we return the rest of the queue

  // fix here, it seems the stopper means in numbers, queue needs to be stopped if the value is same or greater than the stopper
  while (myqueue.peek() < stopper && !myqueue.isEmpty()) {
    myqueue.dequeue();
  }

  return myqueue;
}

function clearQueue(queue) {
  const arr = [];

  while (!queue.isEmpty()) {
    arr.push(queue.dequeue());
  }

  return arr;
}

// -------
const testArray = [1, 6, 67, 9, 8];
const testQueue = makeQueue(testArray);
console.log(testQueue);

console.log(checkQueue(testQueue, 10));

console.log(clearQueue(testQueue));
// -------

export { makeQueue, checkQueue, clearQueue };
