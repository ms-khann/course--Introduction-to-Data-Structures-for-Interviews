class Stack {
    constructor() {
        this._list = {};
        this.length = 0;
    }
    push(val) {
        this._list[this.length] = val;
        this.length++;
    }
    pop() {
        if (this.length > 0) {
            let val = this._list[this.length - 1];
            delete this._list[this.length - 1];
            this.length--;
            return val;
        }
    }
    peek() {
        if (this.length > 0) {
            return this._list[this.length - 1];
        }
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack);
