// MAP //
Array.prototype.myMap = function(callbackFn) {
  let result = [];

  // [1,2,3,4,5]

  // callbackFn = return this[i] * this[i+1];
  // this line above uses all the parameters given ^^^

  //'this' is referring to the array that the function was called on
  for(let i = 0; i < this.length; i++){
    result.push(callbackFn(this[i],i,this));
  }

  return result;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  //keep if true
  //dont keep if false

  let result = [];
  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i],i,this)){
      result.push(this[i]);
    }
  }

  return result;

};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  //if callback function is true for any of them -> return true
  //else return false

  for(let i = 0; i < this.length;i++){
    if(callbackFn(this[i],i,this)){
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for(let i = 0; i < this.length;i++){
    if(!(callbackFn(this[i],i,this))){
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let answer = 0;
  for(let i = 0; i < this.length; i++){
    answer+= callbackFn(this[i],i,this);
  }
  return answer;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i < this.length; i++){
    if(this[i] == searchElement){
      //if at any point we find the value we're looking for, return true
      return true;
    }
  }
  //if we don't find that value, return false
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(let i = 0; i < this.length; i++){
    if(searchElement == this[i]){
      return i;
    }
  }
  return -1
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  //Set a variable to answer, starting at -1. It will iterate through the array and keep setting answer to the index the searchElement was found at until it iterates through the entire array. Then it will return answer. This effectively returns the final index where searchElement was found.
  let answer = -1;
  for(let i = 0; i < this.length; i++){
    if(searchElement == this[i]){
      answer = i;
    }
  }
  return answer;
};

// KEYS //
Object.myKeys = function(object) {
  let keys = [];
  for(const property in object){
    keys.push(property);
  }
  return keys;
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};

/*

--TESTING myMap--
let potato = [1,2,3,4,5];
let newPotato = potato.myMap(x => x*2);
console.log(newPotato)
-----------------

--TESTING myFilter--
let potato = [1,2,3,4,5];
let newPotato = potato.myFilter(x => x==2);
console.log(newPotato);
--------------------

--TESTING mySome--
let potato = [1,2,3,4,5];
let newPotato = potato.mySome(x => x==3);
console.log(newPotato);
-------------------

--TESTING myEvery--
let potato = [1,1,1,1,1];
let newPotato = potato.myEvery(x => x==1);
console.log(newPotato);
-------------------

--TESTING myReduce--
let potato = [1,2,3,4,5];
let newPotato = potato.myReduce(x => x);
console.log(newPotato);
--------------------

--TESTING myIncludes--
let potato = [1,2,3,4,5];
let newPotato = potato.myIncludes(6);
console.log(newPotato);
newPotato = potato.myIncludes(5);
console.log(newPotato);
----------------------

--TESTING myIndexOf--
let potato = [1,2,3,3,5];
let newPotato = potato.myIndexOf(3);
console.log(newPotato);
newPotato = potato.myIndexOf(6);
console.log(newPotato);
---------------------

--TESTING myLastIndexOf--
let man = [1,2,3,3,3];
let newMan = man.myLastIndexOf(3);
let newnewMan = man.myLastIndexOf(4);
console.log(newMan);
console.log(newnewMan);
-------------------------

--TESTING myKeys--
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.myKeys(object1));
------------------
*/