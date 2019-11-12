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

  // console.log(getHeight(bst1)); // 5
  // console.log(getHeight(bst2)); // 7
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

  if (left > right){
    return left + 1;
  }
  else {
    return right + 1;
  }
}

