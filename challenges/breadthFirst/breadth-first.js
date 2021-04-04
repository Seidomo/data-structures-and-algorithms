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

}

// let test = new Graph();

// let one = new Vertex('one');
// let two = new Vertex('two');
// let three = new Vertex('three');
// let four = new Vertex('four');
// let five = new Vertex('five');
// let six = new Vertex('six');

// test.addNode(one);
// test.addNode(two);
// test.addNode(three);
// test.addNode(four);
// test.addNode(five);
// test.addNode(six);

// test.addEdge(one, three);
// test.addEdge(two, four);
// test.addEdge(one, four);
// test.addEdge(four, two);
// test.addEdge(four, five);
// test.addEdge(two, six);


// console.log(test.breadthFirst(one));


module.exports ={
  Graph,
  Vertex,
  Edge,
};
