export default linkedList;

function nodeFactory() {
  let value = null;
  let nextNode = null;
  return { value, nextNode };
}

function linkedList() {
  let headNode = null;

  function append(value) {
    let newNode = nodeFactory();
    newNode.value = value;
    if (!headNode) {
      headNode = newNode;
      return;
    }
    let currentNode = headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }

  function prepend(value) {
    let newNode = nodeFactory();
    newNode.value = value;
    newNode.nextNode = headNode;
    headNode = newNode;
  }

  function size(length = 0, node = headNode) {
    if (!headNode) {
      return 0;
    }
    if (!node.nextNode) {
      length += 1;
      return length;
    }
    length += 1;
    return size(length, node.nextNode);
  }

  function head() {
    return headNode;
  }

  function at(index, currentIndex = 0, node = headNode) {
    if (!node) {
      return null;
    }
    if (currentIndex === index) {
      return node;
    }
    return at(index, currentIndex + 1, node.nextNode);
  }

  function contains(key, node = headNode) {
    if (!node) {
      return false; //if we traversed through entire linked list and did not find the required value
    }
    if (node.value.key === key) {
      return true;
    }
    return contains(key, node.nextNode);
  }

  function find(key, node = headNode, index = 0) {
    if (!node) {
      return null;
    }
    if (node.value.key === key) {
      return index;
    }
    return find(key, node.nextNode, index + 1);
  }

  function insertAt(value, index, node = headNode, currentIndex = 0) {
    if (!node) {
      return null;
    }
    if (index === 0) {
      prepend(value);
      return;
    }
    if (currentIndex === index - 1) {
      let newNode = nodeFactory();
      newNode.value = value;
      newNode.nextNode = node.nextNode;
      node.nextNode = newNode;
      return;
    }
    return insertAt(value, index, node.nextNode, currentIndex + 1);
  }

  function removeAt(index, node = headNode, currentIndex = 0) {
    if (!node) {
      return null;
    }
    if (index === 0) {
      headNode = node.nextNode;
      return;
    }
    if (currentIndex === index - 1) {
      node.nextNode = node.nextNode.nextNode;
    }
    return removeAt(index, node.nextNode, currentIndex + 1);
  }
  return {
    append,
    prepend,
    size,
    head,
    at,
    contains,
    find,
    insertAt,
    removeAt,
  };
}
