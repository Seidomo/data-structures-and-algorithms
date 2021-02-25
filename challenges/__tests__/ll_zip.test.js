/* eslint-disable new-cap */
'use strict';


const linkedList = require('../llZip/ll_zip.js');

describe('testing the zip a linked list function', () => {
  test('should properly return the zip of the two lists', () => {
    const listOne = new linkedList.ll;
    listOne.head = new linkedList.node(1);
    listOne.append(2);
    listOne.append(3);

    const listTwo = new linkedList.ll;
    listTwo.head = new linkedList.node(4);
    listTwo.append(5);
    listTwo.append(6);
    const test = linkedList.zipList(listOne, listTwo).toString();


    expect(test).toEqual('{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> { 6 } -> {null}');
  });

  test('should properly return the zip of the two lists', () => {
    const listOne = new linkedList.ll;
    listOne.head = new linkedList.node(1);
    listOne.append(2);

    const listTwo = new linkedList.ll;
    listTwo.head = new linkedList.node(3);
    listTwo.append(4);
    listTwo.append(5);
    const test = linkedList.zipList(listOne, listTwo).toString();


    expect(test).toEqual('{ 1 } -> { 3 } -> { 2 } -> { 4 } -> { 5 } -> {null}');
  });

  test('should properly return the zip of the two lists', () => {
    const listOne = new linkedList.ll;
    listOne.head = new linkedList.node(1);
    listOne.append(2);
    listOne.append(3);

    const listTwo = new linkedList.ll;
    listTwo.head = new linkedList.node(4);
    listTwo.append(5);
    const test = linkedList.zipList(listOne, listTwo).toString();


    expect(test).toEqual('{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> {null}');
  });
});
