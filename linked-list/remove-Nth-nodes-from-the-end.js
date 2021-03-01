class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// Program for n’th node from the end of a Linked List
var removeNthNodeFromEndOfList = function (head, n) {
    var curr = head;
    var len = 1;
    while (curr.next) {
        len++
        curr = curr.next
    }
    if (n % len === 0 || n > len) return null
    var newHead = head;
    for (let i = 1; i < len - n; i++) {
        newHead = newHead.next
    }
    newHead.next = null
    return head
};

const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

console.log(removeNthNodeFromEndOfList(head, 1));