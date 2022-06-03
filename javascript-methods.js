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
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
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

*/




