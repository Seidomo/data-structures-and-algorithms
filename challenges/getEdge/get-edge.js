'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}


class Graph {
  constructor() {
    this.adjacencyList = new Map(); // key = some vertex / value = some edge
  }

  addNode(node){
    this.adjacencyList.set(node, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight)); // adds our edge to the vertex's list of connections.
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('no neighbors for that vertex');
    }

    return [...this.adjacencyList.get(vertex)]; // spread into new array to avoid mutation.
  }

  breadthFirst(vertex) {

    const queue = []; // order of visited node will be FiFo
    const visited = new Set(); // track any visited vertices

    queue.unshift(vertex);
    visited.add(vertex);

    while (queue.length) {

      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex); // gives us an array of neighbors;

      for (let neighbor of neighbors) { // each neighbor is an edge

        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)) { // if we have already visited skip
          continue;
        } else { // if not add to visited list, and queue it up
          visited.add(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }

    return visited;
  }

  depthFirst(vertex) {

    // const stack = [];
    const visitedVertices = new Set();

    // stack.push(vertex);
    visitedVertices.add(vertex);
    const traverse = (current, visited) => {

      visited.add(current);

      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }
      }
    };


    traverse(vertex, visitedVertices);
    return visitedVertices;
  }

  size(start){
    let graphArr = this.breadFirst(start);
    return graphArr.lenght;
  }

  //   getEdge(city){
  //     let cost = 0;
  //     let arr = [];
  //     if(this.adjacencyList[city[0]]){
  //       return 'False, 0';
  //     }

  //     for(let i = 0; i < city.length - 1; i++){
  //       let neighbors = this.getNeighbors(city[i]);
  //       let found = false;

  //       for(let j = 0; j < neighbors.length; i++){
  //         if(neighbors[j][0] === city[i + 1]){
  //           found + true;
  //           cost += neighbors[j][1];
  //         }
  //       }
  //       if(!found){
  //         return 'False, 0';
  //       }
  //       arr.pop();
  //     }
  //     return `True, ${cost}`;
  //   }

}


let test = new Graph();

let one = new Vertex('one');
let two = new Vertex('two');
let three = new Vertex('three');
let four = new Vertex('four');
let five = new Vertex('five');
let six = new Vertex('six');

test.addNode(one);
test.addNode(two);
test.addNode(three);
test.addNode(four);
test.addNode(five);
test.addNode(six);

test.addEdge(one, three, 80);
test.addEdge(four, one, 80);
test.addEdge(two, four, 90);
test.addEdge(one, four, 65);
test.addEdge(four, two, 98);
test.addEdge(four, five, 52);
test.addEdge(two, six, 54);


console.log(test.breadthFirst(one));
console.log(getEdge(test, ['one', 'four']));

module.exports ={
  Graph,
  Vertex,
  Edge,
};
