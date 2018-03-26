//In a priority queue, you not only can pass the element into the queue but can also set the priority at which it should be added.
//Elements with priority 5 are ahead of elements with priority 4 in the queue.


function PriorityQueue() {
  collection = [];

  //implementing enqueue : it accepts an array that has data and the priority value of the data
  this.enqueue = function(element) {
    if(collection.length == 0) {
      collection.push(element);
    } else {
      for(var i = 0; i < collection.length; i++) {
        var added = false;
        if(element[1] < collection[i][1]) {
          collection.splice(i, 0, element); //starting with index i, delete 0 elements and insert the element
          added = true;
          break;
        }
      }
      if(!added) {
        collection.push(element);
      }
    }
  }

  this.dequeue = function() {
    collection.shift();
  }

  this.show = function() {
    console.log(collection);
  }


}

var myPQ = new PriorityQueue();
console.log(myPQ);
myPQ.show();
myPQ.enqueue([1,1]);
myPQ.enqueue([2,2]);
myPQ.show();
//myPQ.dequeue();
myPQ.enqueue([2,5]);
myPQ.show();
myPQ.enqueue([2,3]);
myPQ.enqueue([3,3]);
myPQ.show();
