class HashTable {
    constructor(val) {
        this._storage = [];
        this._tableSize = val;
        this._inputSize = 0;
    }
    insert(key, value) {
        let index = this._hash(key, this._tableSize);
        if (!this._storage[index]) {
            this._storage[index] = [];
        }
        this._storage[index].push([key, value]);
        this._inputSize++;
    }
    remove() {}
    retrive(key) {
        let index = this._hash(key, this._tableSize);
        let arrayAtIndex = this._storage[index];
        for (let i = 0; i < arrayAtIndex.length; i++) {
            if (arrayAtIndex[i][0] === key){
                return arrayAtIndex[i][1];
            }
        }
    }
    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) * 3;
        }
        return sum % n;
    }
}

let myHashTable = new HashTable(25);
myHashTable.insert('a',1);
myHashTable.insert('a',2);
myHashTable.insert('b',1);
console.log(myHashTable);