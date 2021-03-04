class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

var middleNode = function (head) {
    if (!head) return head;
    var odd = head;
    var even = head.next;
    var evenHead = head.next
    while (odd.next) {
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next;
    }
    odd.next = evenHead;
    return head
};
const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7)))))))

console.log(middleNode(head));