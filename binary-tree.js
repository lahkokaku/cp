class TreeNode {
  constructor(value = null) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root
  }

  find(val) {
    let curr = this.root

    while (curr) {
      if (curr.value === val) {
        return curr
      }
      if (val < curr.value) {
        curr = curr.left
      } else if (val > curr.value) {
        curr = curr.right
      }
    }

    return null
  }

  insert(val) {
    const newNode = new TreeNode(val)
    this.root = this.#insertNode(this.root, newNode)
    // if (!this.root) {
    //   this.root = newNode
    //   return newNode
    // }

    // let curr = this.root
    // while (curr) {
    //   if (val < curr.value) {
    //     if (curr.left === null) {
    //       curr.left = newNode
    //       return newNode
    //     }
    //     curr = curr.left
    //   } else if (val > curr.value) {
    //     if (curr.right === null) {
    //       curr.right = newNode
    //       return newNode
    //     }
    //     curr = curr.right
    //   } else {
    //     return false
    //   }
    // }
  }

  #insertNode(curr, newNode) {
    if (!curr) {
      return newNode
    }

    if (newNode.value < curr.value) {
      curr.left = this.#insertNode(curr.left, newNode)
    } else if (newNode.value > curr.value) {
      curr.right = this.#insertNode(curr.right, newNode)
    }
    return curr
  }

  delete(val) {
    this.root = this.#removeNode(this.root, val)
  }

  #removeNode(currNode, val) {
    if (currNode === null) {
      return null
    }

    if (val < currNode.value) {
      currNode.left = this.#removeNode(currNode.left, val)
    } else if (val > currNode.value) {
      currNode.right = this.#removeNode(currNode.right, val)
    } else {
      if (currNode.left === null || currNode.right === null) {
        let temp = currNode.left ? currNode.left : currNode.right
        if (temp === null) {
          currNode = null
        } else {
          currNode = temp
        }
      } else {
        let predecessor = this.#findPredecessor(currNode)
        currNode.value = predecessor.value
        currNode.left = this.#removeNode(currNode.left, predecessor.value)
      }
    }
    return currNode
  }
  #findPredecessor(node) {
    let predecessor = node.left
    while (predecessor.right) {
      predecessor = predecessor.right
    }

    return predecessor
  }

  static preorder(node) {
    if (node) {
      console.log(node.value)
      this.preorder(node.left)
      this.preorder(node.right)
    }
  }
  static inorder(node) {
    if (node) {
      this.inorder(node.left)
      console.log(node.value)
      this.inorder(node.right)
    }
  }
  static postorder(node) {
    if (node) {
      this.postorder(node.left)
      this.postorder(node.right)
      console.log(node.value)
    }
  }
}

const node1 = new TreeNode(5)

const tree = new BinaryTree(node1)
tree.insert(3)
tree.insert(4)
tree.insert(6)
tree.insert(7)
tree.insert(8)
tree.insert(9)
console.log(tree.delete(5))

BinaryTree.preorder(tree.root)
console.log('dor')
BinaryTree.inorder(tree.root)
console.log('dor')
BinaryTree.postorder(tree.root)
