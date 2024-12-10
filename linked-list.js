/** Node: node for a singly linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    let newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = this.head;
    this.length += 1;
  }

  /** pop(): return & remove last item. */
  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */
  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): Insert val at idx */
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index is invalid");
    }

    let newNode = new Node(val);
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      if (newNode.next === null) this.tail = newNode;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx */
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }

    let current = this.head;
    if (idx === 0) {
      this.head = current.next;
      if (this.length === 1) this.tail = null;
    } else {
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      current.next = current.next ? current.next.next : null;
      if (current.next === null) this.tail = current;
    }
    this.length--;
  }

  /** average(): return an average of all values in the list */
  average() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
