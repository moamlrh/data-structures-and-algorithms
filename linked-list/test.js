class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**
 * Input:  list1 = 5->2->3->8
 * list2 = 1->7->4->5
 * Output:  New list = 5->7->4->8
 */

var test = function (head) {
    var prev = null;
    while (head) {
        [head.next, prev, head] = [prev, head, head.next]
    }
    return prev;
};

const head1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
const head2 = new Node(0, new Node(4, new Node(2, new Node(5, new Node(4)))))

console.log(test(head1));