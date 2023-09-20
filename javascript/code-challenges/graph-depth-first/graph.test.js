'use-strict';

const Graph = require('./Graph');
const Vertex = require('./Vertex');

describe('Graph', () => {

  it('the depthFirst method works properly', () => {

    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);
    const six = new Vertex(6);

    graph.addVertex(one);
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addVertex(four);
    graph.addVertex(five);
    graph.addVertex(six);


    graph.addEdge(one, two);
    graph.addEdge(one, three, 5);
    graph.addEdge(two, four);
    graph.addEdge(two, five);
    graph.addEdge(four, three);
    graph.addEdge(five, six);

    expect(graph.depthFirst(one)).toEqual([{"value": 1}, {"value": 2}, {"value": 3}, {"value": 4}, {"value": 5}, {"value": 6}]);
  });

  it('return the correct answer when the graph has only one vertex', () => {

    const graph = new Graph();

    const one = new Vertex(1);

    graph.addVertex(one);

    expect(graph.depthFirst(one)).toEqual([{"value": 1}]);
  });

  it('return undefined when the graph is empty', () => {

    const graph = new Graph();

    expect(graph.depthFirst()).toEqual([undefined]);
  });

});
