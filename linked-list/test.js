class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**
 * Merge two sorted linked lists such that merged list is in reverse order
   
    Input:  a: 5->10->15->40
            b: 2->3->20 
    Output: res: 40->20->15->10->5->3->2
*/

var test = function (head1, head2) {
};

const head1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
const head2 = new Node(0, new Node(4, new Node(2, new Node(6, new Node(4)))))

console.log(test(head1, head2));