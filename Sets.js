//Set is a collection that contains distinct values, no duplicates.
//Set's operations comprise, create(), has(val), add(val), delete(val), clear(), set.size (size is a property and not method)

function mySet() {
  collection = [];

  this.has = function(value) {
    return (collection.indexOf(value) !== -1 );
  }

  this.add = function(value) {
    if(this.has(value)) {
      return false;
    } else {
      collection.push(value);
    }
  }

  this.clear = function() {
    collection = [];
  }

  this.delete = function(value) {
    if(this.has(value)) {
      var index = collection.indexOf(value);
      collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  this.values = function() {
    return collection;
  }

  this.size = function() {
    return collection.length;
  }

}

var myset = new mySet();
myset.add(10);
console.log(myset.values());
myset.add(20);
console.log(myset.values());
myset.delete(10);
console.log(myset.values());
myset.add(20);
console.log(myset.values());
myset.delete(30);
console.log(myset.size());
myset.clear();
console.log(myset.size());
