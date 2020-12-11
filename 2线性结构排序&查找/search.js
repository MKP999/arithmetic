// 顺序查找
function inorderSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true
        }
    }
    return false
}

// 二分查找
let num = 0
function binarySearch(arr, target) {
    function _binarySearch(left, right) {
        num ++
        if (left === right) {
            return arr[left] === target
        }
        if (left > right || left < 0 || right > arr.length - 1) {
            return false
        }
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return true
        } else if (arr[mid] > target) {
            // 左边
            return _binarySearch(left, mid - 1)
        } else if (arr[mid] < target) {
            // 右边
            return _binarySearch(mid + 1, right)
        }
    }
    return _binarySearch(0, arr.length - 1)
} 

// 插值查询
function interpolationSearch(arr, target) {
    function _interpolationSearch(left, right) {
        num ++
        if (left === right) {
            return arr[left] === target
        }
        if (left > right || left < 0 || right > arr.length - 1) {
            return false
        }
        const mid = Math.floor((target - arr[left]) / (arr[right] - arr[left]) * (right - left) + left)
        if (arr[mid] === target) {
            return true
        } else if (arr[mid] > target) {
            // 左边
            return _interpolationSearch(left, mid - 1)
        } else {
            // 右边
            return _interpolationSearch(mid + 1, right)
        }
    }
    return _interpolationSearch(0, arr.length - 1)
}
// function interpolationSearch(arr, target) {
//     function _interpolationSearch(left, right) {
//       num++;
//       if (left === right) {
//         return arr[left] === target;
//       }
//       if (left > right || left < 0 || right > arr.length - 1) {
//         return false;
//       }
//       var mid = Math.floor(
//         ((target - arr[left]) / (arr[right] - arr[left])) * (right - left) + left
//       );
//       console.log(mid);
//       if (arr[mid] === target) {
//         return true;
//       } else if (arr[mid] > target) {
//         //在左边继续寻找
//         return _interpolationSearch(left, mid - 1);
//       } else {
//         //在右边继续寻找
//         return _interpolationSearch(mid + 1, right);
//       }
//     }
  
//     return _interpolationSearch(0, arr.length - 1);
//   }

const arr = [1,3,5,7,9,11,13,15,17,19]
console.log(interpolationSearch(arr, 10), num)

