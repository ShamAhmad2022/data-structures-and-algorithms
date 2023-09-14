'use strict';

const Edge = require('./Edge');
const Vertext = require('./Vertex');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if(!this.adjacencyList.has(start) && !this.adjacencyList.has(end)) {
      console.log('invalid');
      return;
    }

    const startVertex = this.adjacencyList.get(start);
    const edge = new Edge(end, weight);

    startVertex.push(edge);
  }

  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(vertex) {
    if(!this.adjacencyList.has(vertex)) {
      console.log('Vertex does not exist!!');
      return [];
    }

    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(fvertex) {
    if (!this.adjacencyList.has(fvertex)) {
      console.log('vertex does not exist!!');
      return [];
    }

    const queue = [];
    const visited = new Set();

    queue.push(fvertex);
    visited.add(fvertex);

    while (queue.length) {
      const currentVertex = queue.shift();
      const neighbors = this.getNeighbors(currentVertex);

      for (let edge of neighbors) {
        const neighborVertex = edge.vertex;

        if (!visited.has(neighborVertex)) {
          visited.add(neighborVertex);
          queue.push(neighborVertex);
        }
      }
    }

    return Array.from(visited).map(vertex => vertex.value);
  }

}

module.exports = Graph;

const graph = new Graph();

const one = new Vertext(1);
const two = new Vertext(2);
const three = new Vertext(3);
const four = new Vertext(4);
const five = new Vertext(5);
const six = new Vertext(6);

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


for(const [k, v] of graph.adjacencyList.entries()) {
  console.log('Key =>', k, 'V =>', v);
}

console.log(graph.getVertices());

console.log(graph.getNeighbors(one));

console.log(graph.size());

console.log(graph.breadthFirst(one));
