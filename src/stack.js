class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.size) {
            this.first = this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }
        return ++this.size;
    }

    pop() {
        if (!this.size) return null;
        const node = this.first;
        if (this.size === 1) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return node.value;
    }
}