export default hashMap;
import linkedList from "./linked-list-factory.mjs";

function hashMap() {
  let buckets = [];
  let capacity = 16;
  let loadFactor = 0.75;
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key, value) {
    const hashedKey = hash(key);
    if (hashedKey < 0 || hashedKey >= capacity) {
      throw new Error("Trying to access index out of bound");
    }
    if (!buckets[hashedKey]) {
      buckets[hashedKey] = linkedList();
    }
    const itemObj = { key, value };
    const bucket = buckets[hashedKey];
    if (bucket.contains(key)) {
      const index = bucket.find(key);
      buckets[hashedKey].insertAt(itemObj, index);
      buckets[hashedKey].removeAt(index + 1);
    } else {
      buckets[hashedKey].append(itemObj);
    }
    console.log(buckets[hashedKey].toString());
  }

  return { set };
}
