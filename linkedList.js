/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

var head = null;

function getHead() {
    return head;

};

function getTail() {

  var tailNode = head;

  while(tailNode !== null) {
    if(tailNode.next !== null) {
      tailNode = tailNode.next;
    } else {
      return tailNode;
    }
   }
   return tailNode;
  }

function add(x) {

  var newNode = {
    value: x,
    next: null
  };

  var tail = getTail();
  if (tail === null) {
    head = newNode;
  } else {
    tail.next = newNode;
  }

  return newNode;

};

function remove(number) {
  var currentNode = getHead();
  var nodeToRemove = null;
  var previousNode = null;
  var i = 0;

  if (number === 0){
    nodeToRemove = head;
    head = head.next;
  }
  while (i < number){
    previousNode = currentNode;
    nodeToRemove = currentNode.next;
    currentNode = currentNode.next;
    if (nodeToRemove === null){
      nodeToRemove = false;
      return nodeToRemove;
    }
    i++;
  }
  if (nodeToRemove.next === null){
    previousNode.next = null;
    tail = previousNode
  } else if (number > 0){
    previousNode.next = nodeToRemove.next;
  }
  return nodeToRemove;
};

function get(number) {
  var currentNode = getHead();
  if (number === 0) {
    return currentNode;
  }
  for (var i = 1; i <= number; i++){
    if(currentNode !== null) {
      currentNode = currentNode.next;
    }
    if(currentNode === null){
      return false;
    }
  }
  return currentNode;
};

function insert(value, number) {
  var previousNode = get(number - 1);
  var currentNode = get(number);
  if (number === 0){
    head = {
      value: value,
      next: currentNode
    };
  } else if(currentNode === false || number < 0){
    return false;
  } else {
    previousNode.next = {
      value: value,
      next: currentNode
    };
  }
};

return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert,
};
}



