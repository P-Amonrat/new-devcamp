let tree = {
  head: {
    value: 12,
    left: null,
    right: {
      value: 99,
      left: {
        value: 37,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

const input = [88, 3, 27, 100];
// const input = [88]

function treeInsert(tree, num) {
    // console.log(tree);
    // console.log(num) 
    if (num < tree.value) {
        if (tree.left == null) {
            tree.left = num;
        } else {
            treeInsert(tree.left, num);
        }
    } else {
        if (tree.right == null) {
            // console.log("test",num);
            tree.right = num;
            // console.log(num);
        } else {
            treeInsert(tree.right, num)
        }
    }
}

for (let i = 0; i < input.length; i++) {
    treeInsert(tree.head, input[i]);
}
console.log(tree)

