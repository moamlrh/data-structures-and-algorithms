class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
var removeNodeByIndex = function (head, index) {
    var curr = head;
    if (index > 1) head = curr.next;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next
    }
    console.log(curr)
    if (!curr) return null
    // if curr = 1 so will delete 2 cuz 1->2->3 
    // that's mean : 1.next = 1.next.next [1.next is 2 and 1.next.next is 3] so the list will be 1->3
    curr.next = curr.next.next
    console.log(curr)
    return head;
};

const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

console.log(removeNodeByIndex(head, 3)); // list and Index