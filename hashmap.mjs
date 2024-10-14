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
    this.buckets = new Array(this.capacity);
  }

  setLoadFactor(val) {
    this.loadFactor = val;
  }

  set(key, value) {
    const hashCode = hash(key, this.buckets.length);
    console.log("hashCode: " + hashCode);

    if (this.buckets[hashCode] === undefined) {
      const entry = new Entry(key, value);
      const list = new LinkedList();
      list.append(entry);
      this.buckets[hashCode] = list;
    } else {
      const list = this.buckets[hashCode];
      list.updateInsert(key, value);
    }
  }

  prettyPrint() {
    console.log("Capacity: " + this.capacity);
    console.log("Load Factor: " + this.loadFactor);
    console.log("Buckets: ");
    for (let i = 0; i <= this.capacity; i++) {
      if (this.buckets[i]) {
        console.log("  " + i + ": " + this.buckets[i].toString());
      } else {
        console.log("  " + i + ": Null");
      }
    }
  }
}

export { hash, HashMap };
