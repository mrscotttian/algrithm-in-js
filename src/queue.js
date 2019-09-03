class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const node = new Node(val);

        if (!this.size) {
            this.first = this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.size) return undefined;
        const node = this.last;
        if (this.size === 1) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return node.value;
    }
}