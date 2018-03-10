/*
Preloaded for you is a class/struct Node (depending on the language) used to construct linked lists in this Kata:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
Prerequisites
This Kata assumes that you are already familiar with the idea of a linked list. If you do not know what that is, you may want to read up on this article on Wikipedia. Specifically, the linked lists this Kata is referring to are singly linked lists, where the value of a specific node is stored in its data/$data/Data property, the reference to the next node is stored in its next/$next/Next property and the terminator for a list is null/NULL/nil/nullptr.

Additionally, this Kata assumes that you have basic knowledge of Object-Oriented Programming (or a similar concept) in the programming language you are undertaking. If you have not come across Object-Oriented Programming in your selected language, you may want to try out an online course or read up on some code examples of OOP in your selected language up to (but not necessarily including) Classical Inheritance.

Specifically, if you are attempting this Kata in PHP and haven't come across OOP, you may want to try out the first 4 Kata in this Series.

Task
Create a function parse which accepts exactly one argument string/$string/s (or similar, depending on the language) which is a string representation of a linked list. Your function must return the corresponding linked list, constructed from instances of the Node class. The string representation of a list has the following format: the value of the node, followed by a whitespace, an arrow and another whitespace (" -> "), followed by the rest of the linked list. Each string representation of a linked list will end in "null"/"NULL"/"nil"/"nullptr" depending on the language you are undertaking this Kata in. For example, given the following string representation of a linked list:

"1 -> 2 -> 3 -> null"
... your function should return:

new Node(1, new Node(2, new Node(3)))

*/

function parse(string) {
  let x = string.split(' -> ').map(y => parseInt(y));
  if (x.length < 2) { return null; }
  
  let head = new Node(x[0]);
  let curr = head;
  for (let i = 1; i < x.length-1; i++) {
    curr.next = new Node(x[i]);
    curr = curr.next;
  }

  return head;
}