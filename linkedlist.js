// TODO: linked list

class Node {
    constructor(value) {
        this.data = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    add(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            return
        }
        let temp = this.head
        while (temp.next !== null) {
            temp = temp.next
        }
        temp.next = newNode
    }

    addFirst(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    size() {
        let count = 0;
        let temp = this.head;
        while (temp) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    addAt(index, value) {
        const newNode = new Node(value)
        if (index < 0 || index > this.size()) {
            throw new Error("invalid index")
        }

        if (index == 0) {
            newNode.next = this.head
            this.head = newNode
            return
        }

        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }
        newNode.next = temp.next
        temp.next = newNode
    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            throw new Error("List is empty");
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let temp = this.head;
        while (temp.next.next !== null) {
            temp = temp.next;
        }

        temp.next = null;
    }

    removeAt(index) {
        if (index < 0 || index > this.size()) {
            throw new Error("invalid index")
        }
        if (index === 0) {
            this.head = this.head.next
        }
        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }
        if (!temp.next) {
            throw new Error("Next node is null — cannot remove");
        }
        temp.next = temp.next.next
    }
    iterativeReverse() {

        let current = this.head
        let prev = null
        if (!current || !current.next) {
            return
        }
        while (current) {
            let nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode

        }
        this.head = prev
    }
    recursiveReverse(){
      function reverse(head) {
        
        if(!head || !head.next){
            return head
        }

        const newHead=reverse(head.next)
        let front=head.next
        front.next=head
        head.next=null
        return newHead
        
      }
     this.head= reverse(this.head)
    }
    
    print() {
        let temp = this.head
        while (temp) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}
const myObj = new LinkedList()
myObj.add(10)
myObj.add(40)
myObj.add(70)
myObj.add(20)
// myObj.addFirst(50)
// console.log(myObj.size())
// myObj.reverse()
// myObj.recursiveReverse()
myObj.print()