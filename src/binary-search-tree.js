class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
        } else {
            let curr = this.root;

            while (true) {
                if (value < curr.value) {
                    if (!curr.left) {
                        curr.left = node;
                        break;
                    } else {
                        curr = curr.left;
                    }
                } else if (value > curr.value) {
                    if (!curr.right) {
                        curr.right = node;
                        break;
                    } else {
                        curr = curr.right;
                    }
                } else {
                    return undefined;
                }
            }
        }

        return this;
    }

    find(value) {
        if (!this.root) return false;
        let curr = this.root;

        while (curr) {
            if (value > curr.value) {
                curr = curr.right;
            } else if (value < curr.value) {
                curr = curr.left;
            } else {
                return curr;
            }
        }
        return false;
    }
}