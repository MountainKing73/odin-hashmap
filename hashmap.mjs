import { Entry } from "./entry.mjs";
import { LinkedList } from "./list.mjs";

function hash(key, size) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % size;
  }

  return hashCode;
}

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null);
  }

  setLoadFactor(val) {
    this.loadFactor = val;
  }

  add(key, value) {
    const hashCode = hash(key, this.buckets.length);
    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (this.buckets[hashCode] === null) {
      const entry = new Entry(key, value);
      const list = new LinkedList();
      list.append(entry);
      this.buckets[hashCode] = list;
    } else {
      const list = this.buckets[hashCode];
      list.updateInsert(key, value);
    }
  }

  set(key, value) {
    // Check if we are over load factor now and grow if needed
    const currSize = this.length();
    if ((currSize + 1) / this.capacity > this.loadFactor) {
      let currEntries = this.entries();
      this.capacity += 16;
      this.buckets = new Array(this.capacity).fill(null);
      currEntries.forEach((entry) => {
        this.add(entry.getKey(), entry.getValue());
      });
    }

    this.add(key, value);
  }

  get(key) {
    const hashCode = hash(key, this.buckets.length);

    return this.buckets[hashCode].get(key);
  }

  has(key) {
    const hashCode = hash(key, this.buckets.length);
    if (!this.buckets[hashCode]) {
      return false;
    }

    const value = this.buckets[hashCode].get(key);

    return value === null ? false : true;
  }

  remove(key) {
    const hashCode = hash(key, this.buckets.length);

    const retval = this.buckets[hashCode].remove(key);

    // If the last item was removed, set this to null
    if (this.buckets[hashCode].size() === 0) {
      this.buckets[hashCode] = null;
    }
    return retval;
  }

  length() {
    let len = 0;
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i]) {
        len += this.buckets[i].size();
      }
    }

    return len;
  }

  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = null;
    }
  }

  keys() {
    let keyList = [];

    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i]) {
        keyList.push(this.buckets[i].keys());
      }
    }

    return keyList;
  }

  values() {
    let valueList = [];

    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i]) {
        valueList.push(this.buckets[i].values());
      }
    }

    return valueList;
  }

  entries() {
    let entryList = new Array();

    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i]) {
        entryList = entryList.concat(this.buckets[i].entries());
      }
    }

    return entryList;
  }

  prettyPrint() {
    console.log("Capacity: " + this.capacity);
    console.log("Load Factor: " + this.loadFactor);
    console.log("Buckets: ");
    for (let i = 0; i < this.capacity; i++) {
      if (!this.buckets[i]) {
        console.log("  " + i + ": Null");
      } else {
        console.log("  " + i + ": " + this.buckets[i].toString());
      }
    }
  }
}

export { hash, HashMap };
