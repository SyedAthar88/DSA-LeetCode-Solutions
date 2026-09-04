// ✅ Node class defined OUTSIDE (accessible everywhere)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;   // ✅ Directly on MyLinkedList
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;  // ✅ Fixed: >= not >
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.value;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);  // ✅ Fixed: 'val' not 'value'
    
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);  // ✅ Fixed: 'val' not 'value'
    
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;
    
    if (index === 0) {
        this.addAtHead(val);  // ✅ Fixed: 'val' not 'value'
        return;
    }
    
    if (index === this.size) {
        this.addAtTail(val);  // ✅ Fixed: 'val' not 'value'
        return;
    }
    
    const newNode = new Node(val);  // ✅ Fixed: 'val' not 'value'
    let current = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    
    if (index === 0) {
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;  // ✅ If list becomes empty, tail must be null
        }
        this.size--;
        return;
    }
    
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    
    // ✅ If deleting tail, update tail
    if (current.next === this.tail) {
        this.tail = current;
    }
    
    current.next = current.next.next;
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */