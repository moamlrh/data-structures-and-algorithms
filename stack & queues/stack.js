class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// create stack with linked list
// class Stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0
//     }
//     peek() {
//         return this.top
//     }
//     push(value) {
//         let node = new Node(value)
//         if (this.top) {
//             node.next = this.top
//             this.top = node;
//         } else {
//             this.top = node;
//             this.bottom = node;
//         }
//         this.length++
//         return this;
//     }
//     pop(){
//         this.top = this.top.next
//         this.length--
//         return this
//     }
// }

// create stack with arrays 
class Stack {
    constructor(){
        this.top = []
        this.bottom  = null
        this.length = 0
    }
    pop () {
        return this.top.pop()
    }
    peek(){
        return this.top[0]
    }
    unshift(value){
        this.top.unshift(value)
        return this
    }
}
const stack = new Stack()

console.log(stack.unshift('moaml'))
console.log(stack.unshift('ahmed'))
console.log(stack.unshift('ali'))
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.top)