class Entry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  setValue(value) {
    this.value = value;
  }

  getKey() {
    return this.key;
  }

  getValue() {
    return this.value;
  }

  toString() {
    return "(" + this.key + ", " + this.value + ")";
  }
}

export { Entry };
