'use-strict';

const Graph = require('./Graph');
const Vertex = require('./Vertex');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('the breadthFirst method works properly', () => {
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

    expect(graph.breadthFirst(one)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('return the two nodes when there is only one edge', () => {
    const one = new Vertex(1);
    const two = new Vertex(2);

    graph.addVertex(one);
    graph.addVertex(two);

    graph.addEdge(one, two);

    expect(graph.breadthFirst(one)).toEqual([1,2]);
  });

  it('return empty array when the graph is empty', () => {
    const one = new Vertex(1);
    expect(graph.breadthFirst(one)).toEqual([]);
  });

});
