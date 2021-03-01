class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
var removeLastNodeInList = function (head) {
    var curr = head;
    while (curr.next.next) curr = curr.next;
    curr.next = null;
    return head;
};

const head = new Node(1, new Node(2, new Node(3, new Node(4))))

console.log(removeLastNodeInList(head));