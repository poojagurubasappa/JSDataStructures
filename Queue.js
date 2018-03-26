function Queue() {
  collection = [];

  //implementing enqueue : should insert element to the end of array
  this.enqueue = function(data) {
    collection.push(data);
  }

  //implementing dequeue : should remove the first element of array
  this.dequeue = function() {
    collection.shift();
  }

  //implementing isEmpty : should return true if queue is empty
  this.isEmpty = function() {
    return (collection.length == 0);
  }

  //implementing show : show the elements in the queue
  this.show = function() {
    return collection;
  }

}


var myQueue = new Queue();
console.log(myQueue.isEmpty());
myQueue.enqueue(1);
console.log(myQueue.isEmpty());
myQueue.enqueue(2);
console.log(myQueue.show());
