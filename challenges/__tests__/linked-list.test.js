'use strict';

const linkedList = require('../linkedList/linked-list.js');

describe('testing the linked list module', () => {
  test('should get an empty  list', () => {
    const list = new linkedList.ll();

    expect(list).toEqual({ head: null });
  });

  test('should insert a new value to the head of the list', () => {
    let insertNode = new linkedList.ll();
    insertNode.insert('4');
    insertNode.insert('7');

    expect(insertNode.head.value).toEqual('7');
  });

  test('should point to the first node in the list as the head', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);

    expect(list.head.value === 0).toBeTruthy;
  });

  test('should insert multiple nodes to the first in the list', () => {
    let insertNode = new linkedList.ll();
    for (let i = 1; i <= 3; i++) {
      insertNode.insert(`test${i}`);
    }

    expect(insertNode.head.next.next.value).toEqual('test1');
    expect(insertNode.head.next.value).toEqual('test2');
    expect(insertNode.head.value).toEqual('test3');
  });

  test('should return true when finding a value wihin the list that exists', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const doesInclude = list.includes(3);

    expect(doesInclude).toEqual(true);
  });

  test('should return false when the value is not included in the list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const doesNotInclude = list.includes(5);

    expect(doesNotInclude).toEqual(false);
  });

  test('should return a string represnting all the values in the list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.head.next.next = new linkedList.node(3);
    list.insert(0);
    const test = list.toString();

    expect(test).toEqual('{ 0 } -> { 1 } -> { 2 } -> { 3 } -> {NULL}');
  });

});