/**
 * 
 * 
 * 
 * 
 * in video Binary Heap
 * 
 * 
 * 
 */

class BTSNode {
    constructor(value) {
        this.value = value;
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let node = new BTSNode(value)
        let curr = this.root
        if (!curr) {
            this.root = node
        } else {
            while (true) {
                if (value < curr.value) {
                    if (!curr.left) {
                        curr.left = node
                        return this
                    }
                    curr = curr.left
                } else {
                    if (!curr.right) {
                        curr.right = node
                        return this
                    }
                    curr = curr.right
                }
            }

        }
    }
    lookup(value) {
        if (value === this.root.value || !this.root) return this.root
        let curr = this.root;
        while (curr) {
            if (curr.value > value) {
                curr = curr.left
            } else if (curr.value < value) {
                curr = curr.right
            } else if (curr.value === value) {
                return curr.value;
            }
        }
        return false
    }
    remove(value) {
        let curr = this.root;
        while (curr) {
            if (curr.value > value) { // left
                let leader = curr.left;
                if (curr.left.value === value) {
                    while (leader.left && leader.value !== value) {
                        leader = leader.left
                    }
                    curr.left = leader
                    return curr
                }
            } else if (curr.value < value) { // right
                let leader = curr.right;
                if (curr.right.value === value) {
                    while (leader.right && leader.value !== value) {
                        leader = leader.right
                    }
                    curr.right = leader
                    return curr
                }
            } else if (curr.value === value) {
                return curr
            }
        }
    }
}
const bts = new BinarySearchTree()
bts.insert(9)
bts.insert(8)
bts.insert(2)
bts.insert(3)
bts.insert(12)
bts.insert(111)
bts.insert(32)
bts.insert(1)
bts.insert(22)
bts.insert(12)
console.log(bts.lookup(2))
console.log(bts.remove(12))
console.log(bts.remove(8))