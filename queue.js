class Queue {
    constructor() {
        this._list = {};
        this.length = 0;
        this.head_index = 0;
    }
    enqueue(val) {
        this._list[this.length] = val;
        this.length++;
    }
    dequeue() {
        if (this.length > 0) {
            // let val = this._list[0];
            // let i = 0;
            // for (let current in this._list) {
            //     this._list[current] = this._list[i + 1];
            //     i++;
            // }
            let val = this._list[this.head_index];
            delete this._list[this.head_index];
            this.head_index++;
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

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log(myQueue.dequeue());

console.log(myQueue);
