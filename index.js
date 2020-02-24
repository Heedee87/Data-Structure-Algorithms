//----Arrays----

const MyArray = require("./arrays/arrays")

// const newArray = new MyArray();
// newArray.push("hi");
// newArray.push("you");
// newArray.push("!");
// // newArray.pop();
// newArray.delete(0);
// newArray.push("are");
// newArray.push("nice");
// newArray.push("!");
// newArray.delete(1);
// console.log(newArray);

const {reverse} = require("./arrays/reverse")
// console.log(reverse("Hi My name is Andrei"));

const {mergeSorterdArrays, mergeSorterdArrays1} = require("./arrays/merge");
mergeSorterdArrays1([0,3,4,31],[4,6,30])


//----Hash-----
const HashTable = require("./hash/hash")

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 2)
//myHashTable.get('apples')
myHashTable.keys()


const {firstRecurringCharacter,firstRecurringCharacter2} = require("./hash/recurring")

firstRecurringCharacter2([2,1,1,2,3,5,1,2,4])
firstRecurringCharacter2([2,3,4,5])


//----Linked List----
const LinkedList = require("./linked-list/linked.list")

const myLinkedList = new LinkedList(10)
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(4)
// myLinkedList.insert(2,99)
// myLinkedList.insert(24,88)
// myLinkedList.remove(3)
// myLinkedList.reverse()
// myLinkedList.printList()

const DoublyLinkedList = require("./linked-list/doubly.linked.js")

// const myDoublyLinkedList = new DoublyLinkedList(10);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(16);myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.printList()
// myDoublyLinkedList.insert(2, 99);
// // myDoublyLinkedList.insert(20, 88);
// myDoublyLinkedList.remove(2);
//myDoublyLinkedList.printList()


const StackL = require("./stack/stack-linked-list")

const linkStack = new StackL();

// linkStack.push("google");
// linkStack.push("YouTube");
// console.log(linkStack.push("Facebook"));
// linkStack.pop();
// linkStack.pop();
// console.log(linkStack.pop());

const StackA = require("./stack/stack-array");

const arrayStack = new StackA();

// arrayStack.push("google");
// arrayStack.push("YouTube");
// console.log(arrayStack.push("Facebook"));
// console.log(arrayStack.peek());
// console.log(arrayStack.pop());

const Queue = require("./queue/queue");

const myQueue = new Queue;

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
//console.log(myQueue.peek());
myQueue.enqueue("Pavel");
console.log(myQueue.enqueue("Samir"))
console.log(myQueue.dequeue());
console.log(myQueue.peek());

