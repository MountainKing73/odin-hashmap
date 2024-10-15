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

//test.clear();
//test.prettyPrint();

console.log("Keys: " + test.keys());
console.log("Values: " + test.values());
console.log("Entries: " + test.entries());

test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.prettyPrint();

test.set("moon", "silver");
test.prettyPrint();
