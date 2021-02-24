class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    insert(value) {
        let node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    remove() {}
    contain(value){
        let current = this.head;
        while( current.value !== value){
            current = current.next;
        }
        return current.value === value;
    }
    removeAt(index) {
        if (this.length <= 0) return;
        if (index == 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        // wrong
        let current = this.head;
        let prev;
        while(index>=1){
            prev = current;
            current = current.next;
            index--;
        }
        prev.next = current;
        this.length--;
        //---
    }
    isHead(node) {
        return node === this.head;
    }
    isTail(node) {
        return node === this.tail;
    }
    removeTail(){
        let current = this.head;
        while(current.next !== this.tail){
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        this.length--;
    }
}

let myList = new LinkedList();
myList.insert(10);
myList.insert(20);
myList.insert(30);
myList.removeAt(1);
console.log(myList);
console.log(JSON.stringify(myList));
