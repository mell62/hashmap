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
  }

  function get(key) {
    const hashedKey = hash(key);
    if (!buckets[hashedKey]) {
      return null;
    }
    if (buckets[hashedKey].contains(key)) {
      const index = buckets[hashedKey].find(key);
      return buckets[hashedKey].at(index).value.value;
    }
    return null;
  }

  function has(key) {
    const hashedKey = hash(key);
    if (!buckets[hashedKey]) {
      return false;
    }
    if (buckets[hashedKey].contains(key)) {
      return true;
    }
    return false;
  }

  function remove(key) {
    const hashedKey = hash(key);
    if (!buckets[hashedKey]) {
      return false;
    }
    if (buckets[hashedKey].contains(key)) {
      const index = buckets[hashedKey].find(key);
      buckets[hashedKey].removeAt(index);
      if (buckets[hashedKey].size() === 0) {
        buckets[hashedKey] = null;
      }
      return true;
    }
    return false;
  }

  function length() {
    let num = 0;
    for (let i = 0; i < capacity; i++) {
      if (buckets[i]) {
        num += buckets[i].size();
      }
    }
    return num;
  }

  function clear() {
    for (let i = 0; i < capacity; i++) {
      buckets[i] = null;
    }
  }

  function keys() {
    let keysArray = [];
    for (let i = 0; i < capacity; i++) {
      if (buckets[i]) {
        let currentNode = buckets[i].head();
        while (currentNode !== null) {
          keysArray.push(currentNode.value.key);
          currentNode = currentNode.nextNode;
        }
      }
    }
    return keysArray;
  }

  function values() {
    let valuesArray = [];
    for (let i = 0; i < capacity; i++) {
      if (buckets[i]) {
        let currentNode = buckets[i].head();
        while (currentNode !== null) {
          valuesArray.push(currentNode.value.value);
          currentNode = currentNode.nextNode;
        }
      }
    }
    return valuesArray;
  }

  function entries() {
    let entriesArray = [];
    for (let i = 0; i < capacity; i++) {
      if (buckets[i]) {
        let currentNode = buckets[i].head();
        while (currentNode !== null) {
          entriesArray.push([currentNode.value.key, currentNode.value.value]);
          currentNode = currentNode.nextNode;
        }
      }
    }
    return entriesArray;
  }

  return { set, get, has, remove, length, clear, keys, values, entries };
}
