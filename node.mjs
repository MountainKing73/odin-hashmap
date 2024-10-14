class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }

  setValue(val) {
    this.value = val;
  }

  setNextNode(node) {
    this.nextNode = node;
  }

  getValue() {
    return this.value;
  }

  getNextNode() {
    return this.nextNode;
  }
}

export { Node };
