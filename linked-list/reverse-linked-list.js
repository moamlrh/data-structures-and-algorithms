class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * newHead = null
 * while(head){
 *  temp = head
 *  head = head.next
 *  temp.next = newHead
 *  newHead = temp 
 * }
 * return perv;
 * 
 */
var reverseLinkedList = function (head) {
    var newHead = null;
    while (head) {
        [head.next, newHead, head] = [newHead, head, head.next]
    }
    return newHead;
};

const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

console.log(reverseLinkedList(list));