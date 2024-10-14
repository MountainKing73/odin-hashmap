import { Entry } from "./entry.mjs";
import { Node } from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new Node();
    newNode.setValue(value);
    if (this.head === null) {
      this.head = newNode;
    }
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.tail.setNextNode(newNode);
      this.tail = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node();
    newNode.setValue(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.setNextNode(this.head);
      this.head = newNode;
    }

    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  size() {
    let size = 0;
    let current = this.head;
    while (current != null) {
      size++;
      current = current.getNextNode();
    }

    return size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0) {
      return null;
    }

    let ind = 0;
    let value = null;

    let current = this.head;
    while (current != null && ind < index) {
      ind++;
      current = current.getNextNode();
    }

    if (current != null) {
      value = current.getValue();
    }

    return value;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    let curr = this.head;

    if (this.head === this.tail) {
      const val = this.getValue();
      this.head = null;
      this.tail = null;
      return val;
    }

    while (curr.getNextNode() != this.tail) {
      curr = curr.getNextNode();
    }

    const val = curr.getNextNode().getValue();
    curr.setNextNode(null);
    this.tail = curr;
    return val;
  }

  find(value) {
    let curr = this.head;
    let pos = 0;

    while (curr != null) {
      if (curr.getValue() === value) {
        return pos;
      }
      pos++;
      curr = curr.getNextNode();
    }

    return null;
  }

  contains(value) {
    const pos = this.find(value);
    if (pos === null) {
      return false;
    } else {
      return true;
    }
  }

  insertAt(value, index) {
    if (this.head === null && index != 0) {
      throw "Invalid index";
    }

    if (index === 0) {
      let newNode = new Node();
      newNode.setValue(value);
      newNode.setNextNode(this.head);
      this.head = newNode;
      if (this.tail === null) {
        this.tail = newNode;
      }
      return;
    }

    let curr = this.head;
    let pos = 0;

    while (curr != null && pos < index - 1) {
      if (pos === index) {
        break;
      } else {
        curr = curr.getNextNode();
        pos++;
      }
    }

    if (curr === null) {
      throw "Invalid index";
    }
    let newNode = new Node();
    newNode.setValue(value);
    newNode.setNextNode(curr.getNextNode());
    curr.setNextNode(newNode);
  }

  removeAt(index) {
    if (this.head === null) {
      return null;
    }
    if (index < 0) {
      return null;
    }

    if (index === 0) {
      if (this.head === this.tail) {
        this.tail = null;
      }
      let val = this.head.getValue();
      this.head = this.head.getNextNode();
      return val;
    }

    let curr = this.head;
    let prev = this.head;
    let pos = 0;

    while (curr != null && pos < index) {
      prev = curr;
      curr = curr.getNextNode();
      pos++;
    }

    if (curr === null) {
      return null;
    }

    let val = curr.getValue();
    prev.setNextNode(curr.getNextNode());
    return val;
  }

  // Update value if key exists or insert new entry at end of list
  updateInsert(key, value) {
    let curr = this.head;

    while (curr != null) {
      if (curr.getValue().getKey() === key) {
        curr.getValue().setValue(value);
        return;
      }
      curr = curr.getNextNode();
    }

    const entry = new Entry(key, value);
    const newNode = new Node();
    newNode.setValue(entry);
    newNode.setNextNode(curr);
    this.tail.setNextNode(newNode);
  }

  toString() {
    let str = "";
    let current = this.head;
    while (current != null) {
      str += "( " + current.value.key + ", " + current.value.value + " ) ";
      current = current.getNextNode();
      if (current != null) {
        str += " -> ";
      }
    }

    return str;
  }
}

export { LinkedList };
