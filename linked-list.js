class ListNode {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  size () {
    let curr = this.head
    let count = 0

    while (curr) {
      count++
      curr = curr.next
    }
    return count
  }

  append (val) {
    const newNode = new ListNode(val)

    if (!this.head) {
      this.head = newNode
      return newNode
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
    return newNode
  }

  delete (val) {
    if (this.head === null) {
      return false
    }
    if (this.head.value === val) {
      this.head = this.head.next
      return true
    }

    let prev = null
    let curr = this.head
    while (curr && curr.value !== val) {
      prev = curr
      curr = curr.next
    }

    if (!curr) {
      return false
    }

    prev.next = curr.next
    return true
  }
}

const node1 = new ListNode(1)

const linkedList = new LinkedList(node1)
linkedList.append(2)
console.log(linkedList.delete(1), linkedList)