'use strict';


class AnimalShelter{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(animal){
    if(!animal) return null;
    if(!animal !== 'cat' && animal !== 'dog') return `Queue only for 'cat' or 'dog'.`;
    animal = {animal, next: null};
    console.log(animal);
    if(!this.front){
      this.front = animal;
      this.rear = animal;
      return this.front;
    }

    if(this.front){
      this.rear.next = animal;
      this.rear = animal;
      return this.front;
    }
  }


  dequeue(pref){
    if(!pref){
      let adopt = this.front;
      this.front = this.front.next;
      return adopt.pref;
    }

    if(pref !== 'cat' && pref !== 'dog') return null;

    if (pref === this.front.animal){
      let adopt = this.front.next;
      return adopt.pref;
    }

    let current = this.front;
    while(current.next && current.next.animal !== pref){
      current.animal;
      current = current.next;
    }
    if(!current.next) return `no pref in shelter`;
    let adopt = current.next;
    current.next = adopt.next;
    return adopt.pref;

  }

  

}

let see = new AnimalShelter();



see.enqueue('dog');
see.enqueue('rat');

see.enqueue('cat');
see.dequeue('dog');



module.exports= AnimalShelter;
