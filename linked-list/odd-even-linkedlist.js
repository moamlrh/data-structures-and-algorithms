class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**
 * 
 * @param {LinkedList} head 
 * @returns {LinkedList} head
 */
var oddEvenLinkedList = function (head) {
    if (!head) return head;
    var odd = head // odd = 1' node
    var even = head.next // even = 2' node
    var evenHead = even //  evenHead = 2' node
    while (odd.next) {
        odd.next = even.next // odd.next = 3
        odd = odd.next // odd = 3
        even.next = odd.next // odd = 3 so even = 4
        even = even.next // even = 4 cuz even.next=4
    }
    odd.next = evenHead
    return head;  // head = 1,3,5,7,2,4,6
};
const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7)))))))

console.log(oddEvenLinkedList(head));