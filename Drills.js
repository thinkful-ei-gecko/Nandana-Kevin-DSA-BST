const BST = require("./BST");

function main() {
  let bst1 = new BST();
  let insertVals = [3, 1, 4, 6, 9, 2, 5, 7];
  for (let i = 0; i < insertVals.length; i++) {
    bst1.insert(insertVals[i]);
  }
  // bst1.display();

  let bst2 = new BST();
  let chars = "EASYQUESTION".split("");
  for (let i = 0; i < chars.length; i++) {
    bst2.insert(chars[i]);
  }
  // bst2.display();

  let bst3 = new BST(0, 1);
  let keys = [1, 2, 3, 4, 5, 6, 7];
  for (let i = 0; i < keys.length; i++) {
    bst3.insert(keys[i], 2);
  }
  // console.log(tree(bst3));

  console.log(getHeight(bst1)); // 5
  console.log(getHeight(bst2)); // 7

  let bst4 = new BST();
  let bst4Keys = [3, 5, 7, 9, 11, 13, 15, 17];
  for (let i = 0; i < bst4Keys.length; i++) {
    bst4.insert(bst4Keys[i]);
  }
  // console.log(isBST(bst1));
  // console.log(isBST(bst2));
  // console.log(isBST(bst3));
  // console.log(isBST(bst4));

  // console.log(thirdLargest(bst4));

  let bst5 = new BST();
  let bst5Keys = [2, 1, 3];
  for (let i = 0; i < bst5Keys.length; i++) {
    bst5.insert(bst5Keys[i]);
  }
  // console.log(isBalanced(bst5));
}
main();

// returns sum of all values in the BST (if child nodes have non-null value)
// O(2^N)
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// O(2^N)
function getHeight(bst) {
  if (!bst) {
    return 0;
  }

  let left = getHeight(bst.left);
  let right = getHeight(bst.right);

  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
}

// function isBST(tree) {
//   if (!tree) {
//     return { key: -99999 };
//   }

//   let left = isBST(tree.left);
//   let right = isBST(tree.right);

//   return right.key > tree.key > left.key;
// }

function isBST(tree) {
  return isBSTUtil(tree, -99999, 99999);
}

function isBSTUtil(tree, min, max) {
  if (!tree) {
    return true;
  }

  if (tree.key <= min || tree.key >= max) {
    return false;
  }

  return isBSTUtil(tree.left, min, tree.right) &&
         isBSTUtil(tree.right, tree.key, max);
}

function thirdLargest(bst) {
  let result = [];
  traverseInOrder(bst, result);
  return result[result.length - 3];
}

function traverseInOrder(bst, result) {
  bst.left && traverseInOrder(bst.left, result);
  result.push(bst.key);
  bst.right && traverseInOrder(bst.right, result);
}

function isBalanced(bst) {
  let left = getHeight(bst.left);
  let right = getHeight(bst.right);

  console.log('left', left);
  console.log('right', right);

  return Math.abs(left - right) < 2;
}

// 3, 5, 4, 6, 1, 0, 2
// 3, 1, 5, 2, 4, 6, 0

// first element must match
// lengths must match
// all elements must match
// do not go in order
// left and right cannot come before root

function isIdentical(arr1, arr2) {
  let n = arr1.length;
  if (n !== arr2.length) {
    return false;
  }

  if(arr1[0] === arr2[0]) {
    // 
  }

  return false;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}