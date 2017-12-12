import { AdjacencyMatrixGraph } from "./adjacency-matrix-graph.model";


describe('AdjacencyMatrixGraph', () => {
    let _numVerticies: number = 0;
    let graph: AdjacencyMatrixGraph;

    describe("when there are 4 verticies", () => {
        _numVerticies = 4;
        graph = new AdjacencyMatrixGraph(_numVerticies);
    });

    it("should add at vertex 3 without failing", () => {
        graph.addEdge(3,3);
    })
});