// This problem was asked by Google.

// Given the head of a singly linked list, 
// swap every two nodes and return its head.

// For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.size++;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
        this.size++;
        return this;
    }

    print(){
        let current= this.head
        let result = []

        while(current){
            result.push(current.val)
            current = current.next
        }

        return result
    }
}

let list = new SinglyLL()
list.push(20)
list.push(21)
list.push(22)
list.push(23)

console.log(list.print())