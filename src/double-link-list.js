class Node {
    constructor() {
        this.next = null;
        this.prev = null;
        this.val = undefined;
    }
}

class DoubleLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.length) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;
        let originTail = this.tail;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = originTail.prev;
            this.tail.next = null;
        }
        this.length--;
        return originTail;
    }

    shift() {
        if (!this.length) return undefined;
        let originHead = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = originHead.next;
            this.head.prev = null;
        }
        this.length--;
        return originHead;
    }

    unshift(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) return null;
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;

        let direction, curr, target, i = 0;
        if (index >= this.length / 2) {
            direction = "prev";
            curr = this.tail;
            target = this.length - index - 1;
        } else {
            direction = "next";
            curr = this.head;
            target = index;
        }

        while (i++ < target) {
            curr = curr[direction];
        }

        return curr;
    }

    set(index, val) {
        const target = this.get(index);

        if (!target) {
            return false;
        } else {
            target.val = val;
            return true;
        }
    }

    insert(index, val) {
        const node = new Node();
        node.val = val;

        const originNode = this.get(index);
        if (!originNode) {
            return false;
        } else {
            node.prev = originNode.prev;
            node.next = originNode;

            node.prev.next = node;
            node.next.prev = node;

            return true;
        }
    }

    remove(index) {
        const originNode = this.get(index);
        if (!originNode) {
            return undefined;
        } else {
            if (this.length === 1) {
                this.tail = this.head = null;
            } else {
                if (index === 0) {
                    originNode.next.prev = null;
                } else if (index === this.length - 1) {
                    originNode.prev.next = null;
                } else {
                    originNode.prev.next = originNode.next;
                    originNode.next.prev = originNode.prev;
                }

            }
            this.length--;
            return originNode;
        }
    }

    reverse() {
        let curr = this.head;
        while (curr !== this.tail) {
            const originNext = curr.next;
            const originPrev = curr.prev;
            curr.next = originPrev;
            curr.prev = originNext;
            curr = originNext;
        }

        this.tail.next = this.tail.prev;
        this.tail.prev = null;
        this.tail = this.head;
        this.head = curr;
        return this;
    }
}