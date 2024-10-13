import hashMap from "./hashmap-factory.mjs";

const test = hashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("moon", "silver");
test.set("banana", "black");
console.log(test.get("banana"));
console.log(test.has("ice cream"));
console.log(test.length());
console.log(test.remove("kite"));
console.log(test.has("kite"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
test.clear();
console.log(test.length());
