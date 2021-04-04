'use strict';

const graphs = require('../breadthFirst/breadth-first.js');

describe('Testing a breadth first traversla on a graph', () =>{

  test('should traverse the graph', () =>{
    let graph = new graphs.Graph();

    let one = new graphs.Vertex('101');
    let two = new graphs.Vertex('201');
    let three = new graphs.Vertex('301');
    let four = new graphs.Vertex('401');
    let five = new graphs.Vertex('code');
    let six = new graphs.Vertex('fellows');


    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);
    graph.addNode(six);

    graph.addEdge(one, three);
    graph.addEdge(two, four);
    graph.addEdge(one, four);
    graph.addEdge(four, two);
    graph.addEdge(four, five);
    graph.addEdge(two, six);
    console.log('seid', graph.breadthFirst(one).size);

    expect(graph.breadthFirst(one)).toBeTruthy();
    expect(graph.breadthFirst(one).size).toEqual(6);

  });

  test('should return the size of the graph', () =>{
    let graph = new graphs.Graph();

    let one = new graphs.Vertex('101');
    let two = new graphs.Vertex('201');
    let three = new graphs.Vertex('301');
    let four = new graphs.Vertex('401');
    let five = new graphs.Vertex('code');
    let six = new graphs.Vertex('fellows');


    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);
    graph.addNode(six);

    graph.addEdge(one, three);
    graph.addEdge(two, four);
    graph.addEdge(one, four);
    graph.addEdge(four, two);
    graph.addEdge(four, five);
    graph.addEdge(two, six);
    console.log('seid', graph.breadthFirst(one));


    expect(graph.breadthFirst(one).size).toEqual(6);

  });
});
