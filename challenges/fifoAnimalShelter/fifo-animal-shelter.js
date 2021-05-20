'use strict';

class Animal {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Dog extends Animal {
  constructor(value) {
    super('dog');
  }
}

class Cat extends Animal {
  constructor(value) {
    super('cat');
  }
}

class AnimalShelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
    // this.front = null;
    // this.rear = null;
  }

  shelterEnqueue(animal) {
    if (animal.value === 'cat') {
      this.cat.enqueue(animal);
    } else {
      this.dog.enqueue(animal);
    }
  }

  shelterDequeue(pref) {
    if (pref === 'dog') {
      return this.dog.dequeue();
    } else if (pref === 'cat') {
      return this.cat.dequeue();
    } else {
      return null;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(node) {
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw 'Error no animals in queue';
    } else {
      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

// let shelter = new AnimalShelter();
// shelter.shelterEnqueue(new Dog());
// shelter.shelterEnqueue(new Cat());
// console.log(shelter);
// shelter.shelterEnqueue(new Dog());
// console.log(shelter);
// console.log(shelter.shelterDequeue('dog'));
// console.log(shelter);
// shelter.shelterEnqueue(new Dog());
// console.log(shelter.shelterDequeue('cat'));

// let dog = new Animal('dog');
// let cat = new Animal('cat');

// console.log(dog);


module.exports = {
  Animal,
  Dog,
  Cat,
  AnimalShelter,
  Queue,
};
