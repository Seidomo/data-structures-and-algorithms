const graphs = require('../graph/graph.js');




describe('testing if the graph works', () => {
  test('shoul add a vertex to the graph', () =>{
    let graph = new graphs.Graph();

    let one = new graphs.Vertex('one');
    let two = new graphs.Vertex('two');
    let three = new graphs.Vertex('three');
    let four = new graphs.Vertex('four');
    let five = new graphs.Vertex('five');
    let six = new graphs.Vertex('six');


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

    expect(graph.adjacencyList.get(one)).toBeTruthy();


  });

  test('should succesfully add a new edge to the graph', () =>{
    let graph = new graphs.Graph();
    let one = new graphs.Vertex('one');
    let two = new graphs.Vertex('two');

    graph.addNode(one);
    graph.addNode(two);
    graph.addEdge(one, two);

    expect(graph.adjacencyList.get(one)[0].vertex.value).toEqual('two');
  });

  test('should succesfully add a node to the graph', () =>{
    let graph = new graphs.Graph();
    let one = new graphs.Vertex('one');
    graph.addNode(one);
    // console.log('add', graph.adjacencyList.get(one));
    expect(graph.adjacencyList.get(one)).toBeTruthy();
  });

  // test('should return the size of the graph', () =>{
  //   let graph = new graphs.Graph();

  //   let one = new graphs.Vertex('101');
  //   let two = new graphs.Vertex('201');
  //   let three = new graphs.Vertex('301');
  //   let four = new graphs.Vertex('401');
  //   let five = new graphs.Vertex('code');
  //   let six = new graphs.Vertex('fellows');


  //   graph.addNode(one);
  //   graph.addNode(two);
  //   graph.addNode(three);
  //   graph.addNode(four);
  //   graph.addNode(five);
  //   graph.addNode(six);

  //   graph.addEdge(one, three);
  //   graph.addEdge(two, four);
  //   graph.addEdge(one, four);
  //   graph.addEdge(four, two);
  //   graph.addEdge(four, five);
  //   graph.addEdge(two, six);


  //   expect(graph.breadthFirst(one).size).toEqual(6);

  // });

});
