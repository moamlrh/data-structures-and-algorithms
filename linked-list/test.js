class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }
    print() {
        const arr = []
        let curr = this.head;
        while (curr) {
            arr.push(curr.value)
            curr = curr.next
        }
        return arr;
    }
    append(value) {
        let node = { value, next: null }
        this.tail.next = node
        this.tail = node
        this.length++
    }
    prepend(value) {
        const node = { value, next: this.head }
        this.head = node
        this.length++
    }
    insert(index, value) {
        let node = { value, next: null }
        let curr = this.head;
        let i = 0;
        while (curr) {
            if (i+1 === index) {
                console.log(curr)
                node.next = curr.next
                curr.next = node
                break;
            }
            ++i
            curr = curr.next
        }
    }
    remove(index){
        let len = 0;
        let curr = this.head;
        while (curr.next) {
            if(len === index-1) {
                this.length--
                curr.next = curr.next.next
                break;
            }
            len++   
            curr = curr.next;
        }
    }
    reverse(){
        let prev = null;
        while (this.head) {
            let next = this.head.next
            this.head.next = prev
            prev = this.head;
            this.head = next
        }
        this.head = prev;
    }
}

const list = new LinkedList(10);
console.log(list.append(13))
console.log(list.append(14))
console.log(list.prepend(9))
console.log(list.print())
list.insert(2, 11)
console.log(list.print())
console.log(list.reverse())
console.log(list.print())