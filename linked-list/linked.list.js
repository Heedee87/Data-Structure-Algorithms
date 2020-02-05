// 10-->5-->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value:16,
//         next: null
//       }
//     }
//   }
// }
// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

//const newNode = new Node(value)

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1;
  }

  append(value){
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value){
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  printList(){
    const array = []
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(array)
    return array
  }

  insert(index, value){
    //check params
    if(index >= this.length){
      return this.append(value)
    }

    const newNode = {
      value: value,
      next: null
    }
    
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }

  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  remove(index){
    const leader = this.traverseToIndex(index - 1)

    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this.printList()
  }
}

module.exports = LinkedList