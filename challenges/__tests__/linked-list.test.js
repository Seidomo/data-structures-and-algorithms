/* eslint-disable new-cap */
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

    expect(test).toEqual('{ 0 } -> { 1 } -> { 2 } -> { 3 } -> {null}');
  });

  test('should add a node to the end of the linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.append(3);

    expect(list.head.next.next.value).toEqual(3);
  });

  test('should add multiple nodes to the end of the list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.append(2);
    list.append(3);

    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
  });

  test('should insert a node before a node located in the middle of list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.insertBefore(2, 4);


    expect(list.head.next.value).toEqual(4);
  });

  test('should insert a node before before the first node of list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.insertBefore(1, 4);

    expect(list.head.value).toEqual(4);
  });

  test('should insert a node after a node in the middle of the list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.insertAfter(1, 4);

    expect(list.head.next.value).toEqual(4);
  });

  test('should insert a node after the last node of the list', () =>{
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.insertAfter(2, 4);

    expect(list.head.next.next.value).toEqual(4);
  });

  test('should return null if the value is greater than the list', () =>{
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    const test = list.getKthElement(5);

    expect(test).toEqual(null);
  });

  test('should return where the value and the length of the list are the same', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    const test = list.getKthElement(3);

    expect(test).toEqual(0);
  });

  test('should return where the value is not a posetive integer', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    const test = list.getKthElement(7);

    expect(test).toEqual(null);
  });

  test('should return where the linked list is of a size 1', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    const test = list.getKthElement(1);

    expect(test).toEqual(0);
  });

  test('should return the value is not at the end, but somewhere in the middle', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const test = list.getKthElement(2);

    expect(test).toEqual(2);
  });
});

