class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const func = head => {
    let curr = head;
    let temp = curr;
    let idx = 2;
    while (curr.next) {
        if(curr.val === idx-1){
            curr = curr.next.next
        }
        curr = curr.next
    }
    return head;
}

const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(func(head))
