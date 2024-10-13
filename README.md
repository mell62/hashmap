# Hashmap

This is a code repository containing functions which implements Hash Maps through JavaScript. To test it, open the file, open command line, run `node <file-name>`.

# Features

Various operations like:

- hash: Hashes a string key using a prime number and buckets capacity
- set: Takes a key and its value and inserts it into the hash map. If key already exists, new value overwrites old value
- get: Returns the value of the given key
- has: Returns true if given key exists in the hash map, else returns false
- remove: Removes the given key from the hash map and returns true, else returns false
- length: Returns the number of stored keys in the hash map
- clear: Removes all entries in the hash map
- keys: Returns an array containing all the keys inside the hash map
- values: Returns an array containing all the values inside the hash map
- entries: Returns an array that contains each key-value pair inside the hashmap in the format `[[firstKey, firstValue],[secondKey,secondValue]]`

# Achievements

- True hashmap behavior achieved in JavaScript
- Collision handling techniques implemented:
- - **Chaining**: Recursion-powered linked lists implemented so every entry in hashmap is stored as a node inside a linked list
- - **Rehashing**: Buckets size is dynamically grown after a certain computed capacity threshold has passed
