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

console.log("Has apple: " + test.has("apple"));
console.log("Has pineapple: " + test.has("pineapple"));

test.remove("banana");
test.prettyPrint();

test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");

test.prettyPrint();

console.log("Length: " + test.length());

test.clear();
test.prettyPrint();
