// 交换位子
function change(arr, index1, index2) {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}

// 冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i + 1; j++) {
            if (arr[j] > arr[j+1]) {
                change(arr, j, j + 1)
            }
        }
    }
    return arr
}

// 插入排序
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j]
            } else {
                break
            }
            arr[j] = temp
        }
    }
    return arr
}

// 快速排序 
function quickSort (arr) {
    function _quickSort (left, right) {
        if (left >= right || left < 0 || right > arr.length - 1) {
            return
        }
        let low = left
        let high = right
        const temp = arr[high]
        while (low < high) {
            // 左边
            while (arr[low] <= temp && low < high) {
                low++
            }
            arr[high] = arr[low]
            // 右边
            while (arr[high] >= temp && low < high ) {
                high--
            }
            arr[low] = arr[high]
        }
        // 循环结束 low === high
        arr[low] = temp
        // 左边
        _quickSort(left, low - 1)
        // 右边
        _quickSort(low + 1, right)
        return arr
    }
    return _quickSort(0, arr.length - 1)
}

const arr = [5, 6, 15, 22, 8, 3, 7]
console.log(quickSort(arr))