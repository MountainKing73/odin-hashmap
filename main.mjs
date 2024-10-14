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
