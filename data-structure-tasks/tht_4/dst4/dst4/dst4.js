class MySet {
  constructor(array = []) {
    this.arr = this.checkUnique(array);
    this.size = this.arr.length;
  }

  checkUnique(arr) {
    // More cost effective way to check array for duplicates and return only a unique value array

    const makeUnique = new Set(arr);
    const returningArray = [...makeUnique];

    return returningArray;

    //Manual loop as hinted by the teacher
    /*
    const returningArray = [];

    arr.forEach((value) => {
      if (!returningArray.includes(value)) {
        returningArray.push(value);
      }
    });

    return returningArray;
  */
  }

  add(data) {
    const isDataInArr = this.arr.includes(data);
    if (isDataInArr === false) {
      this.arr.push(data);
      this.size = this.arr.length;
    }

    //if the data is already in array, it should return false (bc nothing is added) so we need to make the true into false
    // and vice versa
    return !isDataInArr;
  }

  remove(data) {
    const whatIndex = this.arr.indexOf(data);

    if (whatIndex != -1) {
      this.arr.splice(whatIndex, 1);
      this.size = this.arr.length;
    }

    //if whatIndex is -1, it means there wasn't same value as the data, so we don't remove anything
    //if whatIndex is anything else, we found the data in the array and deleted it
    return whatIndex !== -1;
  }

  has(data) {
    const whatIndex = this.arr.indexOf(data);

    //look at remove(data) function for comments
    return whatIndex !== -1;
  }

  union(setA, ...sets) {
    sets.forEach((otherSet) => {
      otherSet.arr.forEach((data) => {
        setA.add(data);
      });
    });

    return setA;
  }
}

const set1 = new MySet([1, 2, 3, 4]);
console.log('Set1:\n', set1);

console.log('Can we add number 1 into this set?\n Answer:', set1.add(1)); //should return false
console.log('Can we add number 66 into this set?\n Answer:', set1.add(66)); //should return true

console.log('Can we remove number 2 from this set?\n Answer:', set1.remove(2)); //should return true

console.log('Does this set have a 4? \n Answer: ', set1.has(4)); //should return true

const set2 = new MySet([66, 77, 57]);
console.log('Set2:\n', set2);

console.log('Can we add number 1 into this set?\n Answer:', set2.add(1)); //should return true
console.log('Can we add number 66 into this set?\n Answer:', set2.add(66)); //should return false

console.log('Can we remove number 1 from this set?\n Answer:', set2.remove(1)); //should return true

console.log('Does this set have a 100? \n Answer: ', set2.has(100)); //should return false

const set3 = new MySet([100, 37]);
console.log('Set3:\n', set3);

console.log('Can we add number 100 into this set?\n Answer:', set3.add(100)); //should return false
console.log('Can we add number 37 into this set?\n Answer:', set3.add(37)); //should return false

console.log('Can we remove number 1 from this set?\n Answer:', set3.remove(1)); //should return false

console.log('Does this set have a 100? \n Answer: ', set3.has(100)); //should return true

console.log('Set1, set2 and set3 union: \n', set1.union(set1, set2, set3));

export default MySet;
