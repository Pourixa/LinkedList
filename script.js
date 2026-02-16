class LinkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    if (this.headNode == null) this.headNode = new Node(value);
    else {
      let node = this.headNode;
      while (node.nextNode != null) node = node.nextNode;
      node.nextNode = new Node(value);
    }
  }
  prepend(value) {
    let node = new Node(value, this.headNode);
    this.headNode = node;
  }
  size() {
    if (this.headNode == null) return 0;
    else {
      let c = 1;
      let node = this.headNode;
      while (node.nextNode != null) {
        c++;
        node = node.nextNode;
      }
      return c;
    }
  }
  head() {
    if (this.headNode == null) return undefined;
    else return this.headNode.value;
  }
  tail() {
    if (this.headNode == null) return undefined;
    else {
      let node = this.headNode;
      while (node.nextNode != null) node = node.nextNode;
      return node.value;
    }
  }
  at(index) {
    let size = this.size();
    if (!(index >= 0 && index < size)) return undefined;
    let node = this.headNode;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }
    if (node == null) return undefined;
    return node.value;
  }
  pop() {
    if (this.headNode != null) {
      let value = this.headNode.value;
      this.headNode = this.headNode.nextNode;
      return value;
    } else return undefined;
  }
  contains(value) {
    let node = this.headNode;
    let flag = false;
    while (node != null && !flag) {
      if (node.value === value) flag = true;
      else node = node.nextNode;
    }
    return flag;
  }
  findIndex(value) {
    let node = this.headNode;
    let flag = false;
    let c = 0;
    let i = -1;
    while (node != null && !flag) {
      if (node.value === value) {
        flag = true;
        i = c;
      } else c++;
      node = node.nextNode;
    }
    return i;
  }
  toString() {
    let node = this.headNode;
    let string = "";
    while (node != null) {
      string += ` ( ${node.value} ) -> `;
      node = node.nextNode;
    }
    string += "null";
    return string;
  }
  insertAt(index, ...values) {
    let size = this.size();
    if (!(index >= 0 && index < size)) throw RangeError;
    else {
      if (this.headNode != null) {
        if (index === 0) {
          for (let i = values.length - 1; i >= 0; i--) this.prepend(values[i]);
        } else if (index === size) {
          for (let i = 0; i < values.length; i++) this.append(values[i]);
        } else {
          let beforeNode = this.headNode;
          let nextNode = this.headNode.nextNode;
          for (let i = 1; i < index; i++) {
            beforeNode = nextNode;
            nextNode = nextNode.nextNode;
          }
          let valuesList = new LinkedList();
          for (let i = 0; i < values.length; i++) {
            valuesList.append(values[i]);
          }
          beforeNode.nextNode = valuesList.headNode;

          let tempTail = valuesList.headNode;
          while (tempTail.nextNode != null) tempTail = tempTail.nextNode;
          tempTail.nextNode = nextNode;
        }
      } else return undefined;
    }
  }
  removeAt(index) {
    let size = this.size();
    if (!(index >= 0 && index < size)) throw RangeError;
    else {
      if (this.headNode != null) {
        if (index === 0) {
          this.headNode = this.headNode.nextNode;
        } else if (index === size - 1) {
          let node = this.headNode;
          while (node.nextNode.nextNode != null) node = node.nextNode;
          node.nextNode = null;
        } else {
          let beforeNode = this.headNode;
          let nextNode = this.headNode.nextNode;
          for (let i = 1; i < index; i++) {
            beforeNode = nextNode;
            nextNode = nextNode.nextNode;
          }
          beforeNode.nextNode = nextNode.nextNode;
        }
      } else return undefined;
      } 
    }
  }

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
