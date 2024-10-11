// Defination for singly linked list

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Helper function to convert an array to a linked list

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Merge Two Sorted Linked Lists

function mergeTwoSortedList(list1, list2) {
  let dummy = new ListNode(0);
  let head = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }

  if (list1 !== null) {
    dummy.next = list1;
  } else {
    dummy.next = list2;
  }

  return head.next;
}

list1 = arrayToList([1, 2, 4]);
list2 = arrayToList([1, 3, 4]);
let mergedList = mergeTwoSortedList(list1, list2);

// Helper Function to Print the Merged List

function printList(list) {
  let arr = [];
  let result = "";
  while (list) {
    arr.push(list.val);
    result += list.val;
    list = list.next;
    if (list) {
      result += " -> ";
    }
  }

  console.log(arr);
  console.log(result);
}

printList(mergedList);
