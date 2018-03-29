function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(data) {
    this.data = data;
    this.next = null;
  }

  this.size = function() {
    return length;
  }

  this.head = function() {
    return head;
  }

  this.add = function(data) {
    var node = new Node(data);
    if(head == null) {
      head = node;
      return;
    } else {
      var current = head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }

  this.remove = function(data) {
    var current = head;
    var previous;
    if(current.data == data) {
      head = current.next;
    } else {
      while(current.data !== data) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    previous--;
  }

  this.isEmpty = function() {
    return (length==0);
  }

  this.indexOf = function(data) {
    var current = head;
    var index = -1;

    while(current) {
      index++;
      if(current.data == data) {
        return index;
      }
      current = current.next;
    }
    return index;
  }


  this.elementAt = function(index) {
    var current = head;
    var count = 0;
    while(current) {
      if(index == count) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  this.addAt = function(index, data) {
    var node = new Node(data);

    var current = head;
    var previous;
    var currentIndex = 0;


    if(index == 0) {
      node.next = current;
      node = head;
    } else {
      var added = false;
      while(current.next !== null) {
        previous = current;
        current = current.next;
        currentIndex++;
        if(currentIndex == index) {
          node.next = previous.next;
          previous.next = node;
          added = true;
          break;
        }
      }
      if(!added) {
        if(index == currentIndex+1) {
          current.next = node;
        } else {
          return -1;
        }
      }
    }
  }
}

var myList = new LinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
console.log(myList.size());
console.log(myList.head().next);
myList.add(5);
myList.remove(4);
console.log(myList.head().next);
console.log(myList.indexOf(5));
console.log(myList.indexOf(2));
console.log(myList.elementAt(3));
console.log(myList.head().next);
myList.addAt(2, 16);
console.log(myList.head().next);
myList.remove(16);
console.log(myList.head().next);
myList.addAt(4, 19);
console.log(myList.head().next.next);
