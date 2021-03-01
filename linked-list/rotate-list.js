/**
 * Definition for singly-linked list.
 * function Node(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

var rotateList = function (head, k) {
    if (!head || !head.next || k < 0) return head;
    var tail = curr = head;
    var count = 1;
    while (tail.next) { // get the last node in list [tail]
        count++ // and at the same time, to get the length of list [head]
        tail = tail.next
    }
    tail.next = head; // add the head next to the tail
    if (k % count === 0) return head; // if the list length = to k that's mean will return  the same head
    var len = count - k
    while (len) {
        curr = curr.next
        --len
    }
    return curr
};
const list = new Node(1, new Node(2, new Node(3, new Node(4))))

console.log(rotateList(list, 3));