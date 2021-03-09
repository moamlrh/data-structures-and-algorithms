class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null // top
        this.last = null // bottom
        this.length = 0 // length
    }
    peek() {
        return this.first
    }
    dequeue() {
        this.first = this.first.next
        return this.first

    }
    enqueue(value) {
        const node = new Node(value)
        if (!this.first) {
            this.first = node
            this.last = node
        }
        this.last.next = node
        this.last = node
        return (this)
    }    
}

const queue = new Queue()

queue.enqueue('1')
queue.enqueue('2')
console.log(queue.enqueue('3'))
console.log(queue.dequeue())