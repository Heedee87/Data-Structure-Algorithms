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
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(4)
myLinkedList.insert(2,99)
myLinkedList.insert(24,88)
myLinkedList.remove(3)
myLinkedList.printList()