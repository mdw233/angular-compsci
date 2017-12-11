abstract class Graph {
    constructor(protected numVerticies: number, protected directed: boolean = false) {

    }

    abstract addEdge(v1: number, v2: number, weight: number);
    abstract getAdjacentVerticies(v: number): number[];
    abstract getIndegree(v: number): number;
    abstract getEdgeWeight(v1: number, v2: number): number;
    abstract getDisplayLines(): string[];
}
