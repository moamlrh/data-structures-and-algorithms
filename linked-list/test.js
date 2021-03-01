class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
var removeLastNodeInList = function (head, val) {
    var curr = head;
    if(head.val === val) head = head.next;
    while (curr.next) {
        if(curr.next.val === val) {
            break
        }
        curr = curr.next;        
    }
    curr.next = curr.next.next;        
    return head;
};

const head = new Node(1, new Node(2, new Node(3)))

console.log(removeLastNodeInList(head, 1));