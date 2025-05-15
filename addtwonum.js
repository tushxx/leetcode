var addTwoNumbers = function (l1, l2) {
  let arr1 = listToArray(l1).reverse();
  let arr2 = listToArray(l2).reverse();

  let num1 = BigInt(arr1.join(""));
  let num2 = BigInt(arr2.join(""));

  let sum = num1 + num2;

  let result = sum.toString().split("").map(Number).reverse();

  return arrayToList(result);
};

// Convert Linked List ➝ Array
function listToArray(list) {
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

// Convert Array ➝ Linked List
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}
