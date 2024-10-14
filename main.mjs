import { HashMap } from "./hashmap.mjs";

const test = new HashMap();

test.set("apple", "red");
console.log(test);

test.set("apple", "green");
console.log(test);

test.set("banana", "yellow");
console.log(test);

test.prettyPrint();

console.log("apple: " + test.get("apple"));
