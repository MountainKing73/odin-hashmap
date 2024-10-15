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

  size() {
    let size = 0;
    let current = this.head;
    while (current != null) {
      size++;
      current = current.getNextNode();
    }

    return size;
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

  get(key) {
    let curr = this.head;

    while (curr != null) {
      if (curr.getValue().getKey() === key) {
        return curr.getValue().getValue();
      }
      curr = curr.getNextNode();
    }

    return null;
  }

  remove(key) {
    let curr = this.head;
    let prev = this.head;

    if (this.head === null) {
      return false;
    }

    while (curr != null) {
      if (curr.getValue().getKey() === key) {
        if (curr === this.head) {
          if (this.head.getNextNode() === null) {
            this.head = null;
            this.tail = null;
          } else {
            this.head = this.head.getNextNode();
          }
        } else {
          prev.setNextNode(curr.getNextNode());
        }

        return true;
      }

      prev = curr;
      curr = curr.getNextNode();
    }

    return false;
  }

  keys() {
    let keyList = [];
    let curr = this.head;

    while (curr != null) {
      keyList.push(curr.getValue().getKey());
      curr = curr.getNextNode();
    }

    return keyList;
  }

  values() {
    let valueList = [];
    let curr = this.head;

    while (curr != null) {
      valueList.push(curr.getValue().getValue());
      curr = curr.getNextNode();
    }

    return valueList;
  }

  entries() {
    let entryList = [];
    let curr = this.head;

    while (curr != null) {
      entryList.push(curr.getValue());
      curr = curr.getNextNode();
    }

    return entryList;
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
