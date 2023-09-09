'use-strict';

const Graph = require('./Graph');
const Vertex = require('./Vertex');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('Vertex can be successfully added to the graph', () => {
    const one = new Vertex(1);
    graph.addVertex(one);

    expect(graph.getVertices()).toContain(one);
  });

  it('An edge can be successfully added to the graph', () => {
    const one = new Vertex(1);
    const two = new Vertex(2);
    graph.addVertex(one);
    graph.addVertex(two);

    graph.addEdge(one, two, 5);
    const neighbors = graph.getNeighbors(one);

    expect(neighbors.length).toBe(1);
    expect(neighbors[0].vertex).toBe(two);
    expect(neighbors[0].weight).toBe(5);
  });

  it('A collection of all vertices can be properly retrieved from the graph', () => {
    const one = new Vertex(1);
    const two = new Vertex(2);
    graph.addVertex(one);
    graph.addVertex(two);

    const vertices = graph.getVertices();

    expect(vertices).toContain(one);
    expect(vertices).toContain(two);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    const one = new Vertex(1);
    const two = new Vertex(2);
    graph.addVertex(one);
    graph.addVertex(two);

    graph.addEdge(one, two, 5);
    const neighbors = graph.getNeighbors(one);

    expect(neighbors.length).toBe(1);
    expect(neighbors[0].vertex).toBe(two);
  });

  it('Neighbors are returned with the weight between vertices included', () => {
    const one = new Vertex(1);
    const two = new Vertex(2);
    graph.addVertex(one);
    graph.addVertex(two);

    graph.addEdge(one, two, 5);
    const neighbors = graph.getNeighbors(one);

    expect(neighbors[0].weight).toBe(5);
  });

  it('The proper size is returned, representing the number of vertices in the graph', () => {
    const one = new Vertex(1);
    const two = new Vertex(2);
    graph.addVertex(one);
    graph.addVertex(two);

    expect(graph.size()).toBe(2);
  });

  it('A graph with only one vertex and edge can be properly returned', () => {
    const one = new Vertex(1);
    graph.addVertex(one);
    graph.addEdge(one, one, 0);

    expect(graph.size()).toBe(1);
    const neighbors = graph.getNeighbors(one);
    expect(neighbors.length).toBe(1);
    expect(neighbors[0].vertex).toBe(one);
    expect(neighbors[0].weight).toBe(0);
  });
});
