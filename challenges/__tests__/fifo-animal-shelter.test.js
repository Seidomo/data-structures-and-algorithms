'use strict';

const stuff = require('../fifoAnimalShelter/fifo-animal-shelter.js');

describe('testing animal shelter functionality', () => {
  const shelter = new stuff.AnimalShelter();
  const dog = new stuff.Dog();
  const cat = new stuff.Cat();

  it('should be able to enqueue a dog to the shelter', () => {
    shelter.shelterEnqueue(dog);
    // console.log(shelter.dog.front.value);
    expect(shelter.dog.front.value).toEqual('dog');
  });

  it('should be able to enqueue a cat to the shelter', () => {
    shelter.shelterEnqueue(cat);
    // console.log(shelter.dog.front.value);
    expect(shelter.cat.front.value).toEqual('cat');
  });

  it('should be able to dequeue the correct animal (dog)', () => {
    shelter.shelterEnqueue(cat);
    shelter.shelterEnqueue(dog);

    expect(shelter.shelterDequeue('dog')).toEqual('dog');
  });

  it('should be able to dequeue the correct animal (cat)', () => {

    expect(shelter.shelterDequeue('cat')).toEqual('cat');
  });

  it('should return null when the pref is not a cat or dog', () => {

    expect(shelter.shelterDequeue('turtle')).toEqual(null);
  });
});
