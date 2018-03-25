//A stack has push, pop, peek and size functionalities

var Stack = function() {
  this.count = 0;
  this.storage = {};

  //implementing push : adds data to top of the Stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count ++ ;
  }

  //implementing pop : pops the topmost element from the stack, returns undefined if the stack is empty
  this.pop = function() {
    if(this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  //implementing size : returns the number of elements in the Stack
  this.size = function() {
    return this.count;
  }

  //implementing peek : returns the topmost element in the stack
  this.peek = function() {
    return this.storage[this.count-1];
  }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.size());
myStack.pop();
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());
