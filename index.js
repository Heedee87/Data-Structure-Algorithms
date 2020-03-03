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

//----Stack-----
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

//----Queue-----
const Queue = require("./queue/queue");

const myQueue = new Queue;

// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// //console.log(myQueue.peek());
// myQueue.enqueue("Pavel");
// console.log(myQueue.enqueue("Samir"))
// console.log(myQueue.dequeue());
// console.log(myQueue.peek());

//----Trees-----
const BinarySearchTree = require("./trees/binarySearchTrees");

const tree = new BinarySearchTree();
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
//console.log(tree.insert(1))
// console.log(tree.lookup(20))


//----Graphs-----
const Graph = require("./graphs/graphs");

const myGraph = new Graph();
// myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1'); 
// myGraph.addEdge('3', '4'); 
// myGraph.addEdge('4', '2'); 
// myGraph.addEdge('4', '5'); 
// myGraph.addEdge('1', '2'); 
// myGraph.addEdge('1', '0'); 
// myGraph.addEdge('0', '2'); 
// myGraph.addEdge('6', '5');

// myGraph.showConnections(); 


//----Recursion-----
const {findFactorialRecursive, findFactorialIterative} = require("./recursion/factorial")

// console.log(findFactorialRecursive(5))
// console.log(findFactorialIterative(5))

const {fibonacciIterative, fibonacciRecursive} = require("./recursion/fibonacci")

// console.log(fibonacciIterative(7));
// console.log(fibonacciRecursive(6))


//----Sorting-----
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = require("./sorting/bubbleSort");
// bubbleSort(numbers);
// console.log(numbers);

const selectionSort = require("./sorting/selectionSort");
// selectionSort(numbers);
// console.log(numbers);

const insertionSort = require("./sorting/insertionSort");

// insertionSort(numbers);
// console.log(numbers);

const mergeSort = require("./sorting/mergeSort");

const answer = mergeSort(numbers);
console.log(answer);