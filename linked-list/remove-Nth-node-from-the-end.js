class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// 1-2-3-4-5  n=2    remove the 2 node from the last;
var removeTheNthNodeFromTheLastOfList = function (head, n) {
    var curr = head;
    var len = 1;
    while (curr.next) {
        len++
        curr = curr.next;
    }
    if (n%len === 0 || n < 1) return null;
    var newHead =  head;
    for(let i=1; i < len-n; i++){
        newHead = newHead.next
    }
    newHead.next = newHead.next.next;
    return newHead;
};

const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

console.log(removeTheNthNodeFromTheLastOfList(head, 4));