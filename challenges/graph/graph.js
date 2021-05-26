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

  //   addVertex(vertex) {
  //     this.adjacencyList.set(vertex, []); // this array will be filled with edges.
  //   }

  addEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight)); // adds our edge to the vertex's list of connections.
  }

  // helper function to help with traversals
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      // throw new Error('no neighbors for that vertex');
      return null;
    }

    return [...this.adjacencyList.get(vertex)]; // spread into new array to avoid mutation.
  }

  //   addNode(value){
  //     let node = new Vertex(value);
  //     if(!this.adjacencyList) this.node = [];
  //    this.adjacencyList.push(node);

  //   }

  breadthFirst(vertex) {
    if(!this.size()) {
      return null;
    }

    const queue = [];
    const visited = new Set();
    const valueArray = [];

    queue.unshift(vertex);
    visited.add(vertex);
    valueArray.push(vertex.value);

    while (queue.length) {

      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {

        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)) {
          continue;
        } else {
          visited.add(neighborVertex);
          valueArray.push({ neighbor: neighborVertex.value, weight: neighbor.weight });
          queue.unshift(neighborVertex);
        }
      }
    }

    return valueArray;
  }


  // breadFirst(vertex) {

  //   const queue = []; // order of visited node will be FiFo
  //   const visited = new Set(); // track any visited vertices

  //   queue.unshift(vertex);
  //   visited.add(vertex);

  //   while (queue.length) {

  //     const currentVertex = queue.pop();
  //     const neighbors = this.getNeighbors(currentVertex); // gives us an array of neighbors;

  //     for (let neighbor of neighbors) { // each neighbor is an edge

  //       const neighborVertex = neighbor.vertex;

  //       if (visited.has(neighborVertex)) { // if we have already visited skip
  //         continue;
  //       } else { // if not add to visited list, and queue it up
  //         visited.add(neighborVertex);
  //         queue.unshift(neighborVertex);
  //       }
  //     }
  //   }

  //   return visited;
  // }

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

    // while (stack.length) {

    //   let currentVertex = stack.pop();
    //   let neighbors = this.getNeighbors(currentVertex);

    //   for (let neighbor of neighbors) {

    //     let neighborVertex = neighbor.vertex;

    //     if (visited.has(neighborVertex)) { // if we have already visited skip
    //       continue;
    //     } else { // if not add to visited list, and queue it up
    //       visited.add(neighborVertex);
    //       stack.push(neighborVertex);
    //     }
    //   }
    // }
    traverse(vertex, visitedVertices);
    return visitedVertices;
  }

  size(){
    return this.adjacencyList.size;
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


// console.log(test.breadFirst(one));
// console.log(test.depthFirst(one));

module.exports ={
  Graph,
  Vertex,
  Edge,
};
