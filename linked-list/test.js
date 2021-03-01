class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// 1-2-3-4-5  n=2    remove the 2 node from the last;
var test = function (head, n) {
    var curr = head;
    var len = 1;
    while (curr.next) {
        len++
        curr = curr.next
    }
    var nH = head;
    for(let i=1; i < len-n; i++) {
        nH = nH.next
    }
    return nH.next
};

const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

console.log(test(head, 2));