class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
var rotateRight = function (head, k) {
    if (head === null || head.next === null || k === 0) return head;
    let length = 0;
    let cur = head;
    let tail = null;
    while (cur) {
        length++;
        if (cur.next === null) tail = cur;
        cur = cur.next;
    }
    if (k % length === 0) return head;
    let newHead = head;
    for (let i = 1; i < length - (k % length); i++) newHead = newHead.next
    tail.next = head;
    head = newHead.next;
    newHead.next = null
    return head;
};
const list = new Node(1, new Node(2, new Node(0,)))
console.log(rotateRight(list, 3));