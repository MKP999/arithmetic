function Node (value) {
    this.value = value
    this.next = null
}

var node1 = new Node(5)
var node2 = new Node(3)
var node3 = new Node(7)
node1.next = node2
node2.next = node3

// console.log(node1)

// 1 遍历打印
function print(root) {
    if (!root) {
        return false
    }
    console.log(root.value)
    if (root.next) {
        print(root.next)
    }
}
// print(node1)

// 2 获取链表长度
function getLength(root) {
    if (!root) {
        return 0
    }
    return 1 + getLength(root.next)
}
// var length = getLength(node1)
// console.log(length)


// 3 通过下标获取链表中的某个数据
function getValue(root, index) {
    function _getValue(node, curIndex) {
        if (!node) {
            return false
        }
        if (curIndex === index) {
            return node.value 
        } else {
           return _getValue(node.next, curIndex + 1)
        }
    }
    return _getValue(root, 0)
}

// const value = getValue(node1, 2)
// console.log(value)


// 4 通过下标设置链表中的某个数据
function setValue(root, index, newValue) {
    function _setValue(node, curIndex) {
        if (!node) {
            return false
        }
        if (curIndex === index) {
            return node.value = newValue
        } else {
            return _setValue(node.next, curIndex + 1)
        }
    }
    _setValue(root, 0)
}

// const value = setValue(node1, 1, 100)
// console.log(node1)


// 5 在链表某一个节点之后加入一个新节点 gai
function insert(root, index, newValue) {
    function _insert(node, curIndex) {
        if (!node || !node.next) {
            // 不能是最后一个
            return false
        }

        // 要在index前面那个数 才能改变它的指向
        if (curIndex === index - 1) {
            var temp = new Node(newValue)
            temp.next = node.next
            node.next = temp
        } else {
            return _insert(node.next, curIndex + 1)
        }
    }
    _insert(root, 0)
}

// insert(node1, 1, 100)
// console.log(node1)


// 6 在链表末尾加入新节点
function push(root, newValue) {
    function _push(node, curIndex) {
        if (!node) {
            return false
        }
        if (!node.next) {
            var temp = new Node(newValue)
            node.next = temp
            return
        } else {
            return _push(node.next, curIndex + 1)
        }
    }
    return _push(root, 0)
}

// push(node1, 100)
// console.log(node1)


// 7 删除一个链表节点
function remove(root, index) {
    function _remove(node, curIndex) {
        if (!node) {
            return false
        }

        if(curIndex === index - 1) {
            var temp = node.next
            node.next = node.next.next
            temp.next = null
        } else {
            return _remove(node.next, curIndex + 1)
        }
    }
    return _remove(root, 0)
}

// remove(node1, 1)
// console.log(node1)


// 8 链表倒序
function reserve(root) {
    function _reserve(node) {
        // 没有 或者仅有一个节点
        if (!node || !node.next) {
            return false
        }
        if (!node.next.next) {
            // 两个节点的链表
            var temp = node.next
            node.next = null
            temp.next = node
            return temp
        } else {
            // 两个以上节点
            var temp = _reserve(node.next)
            temp.next.next = node
            node.next = null
            return temp
        }
    }
    return _reserve(root)
}

const arr = reserve(node1)
console.log(arr)