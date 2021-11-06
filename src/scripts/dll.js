// Creating a node
class Node {
  constructor(data) {
    this.musicNode = { ...data };
    this.prev = null;
    this.next = null;
  }
}

// creating double liked list obj and pointer
class DoubllyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.tempPos = null;
  }

  // push node to DLL
  insert({ ...data }) {
    const newNode = new Node(data);
    
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  remove(id) {
    let p = this.head;
    let q = null;
    while (p.musicNode.id !== id) {
      q = p;
      p = p.next;
    }
    if (q) q.next = p.next;
    else this.head = p.next;
    if (p.next) p.next.prev = q;
    p.prev = null;
    p.next = null;
    this.length--;
  }

  // set position of current node
  // default is pointer of head node
  setDefaulltPointer() {
    this.tempPos = this.head;
  }
  getAllNodes() {
    const result = [];

    let p = this.head;
    while (p) {
      result.push({ ...p.musicNode });
      p = p.next;
    }
    return [...result];
  }
  // traverse DLL and return music obj
  traverse(direction) {
    // forward direction
    if (direction === 1 && this.tempPos.next != null) {
      this.tempPos = this.tempPos.next;
      return this.tempPos.musicNode;
    } else if (direction === -1 && this.tempPos.prev != null) {
      //backward direction
      this.tempPos = this.tempPos.prev;
      return this.tempPos.musicNode;
    } else {
      return 0;
    }
  }

  // check for position of node
  nodePosition() {
    if (this.tempPos.next == null) {
      return -1; // last pos
    } else if (this.tempPos.prev == null) {
      return 1; // first pos
    } else {
      return 0; // middle pos
    }
  }
}

// inserting music in double linked list
const dll = new DoubllyLinkedList();

dll.setDefaulltPointer();
export default dll;
