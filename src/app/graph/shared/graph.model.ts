export abstract class Graph {
    constructor(public numVerticies: number, protected directed: boolean = false) {

    }

    abstract addEdge(v1: number, v2: number, weight: number);
    abstract getAdjacentVerticies(v: number): number[];
    abstract getIndegree(v: number): number;
    abstract getEdgeWeight(v1: number, v2: number): number;
    abstract getDisplayLines(): string[];

    //todo: move this to a more generic create 2 dimensional array helper
    protected createEmptyMatrix(length: number): any[][] {
        let matrix = new Array(length);
        for (let i = 0; i < length; i++) {
            matrix[i] = [];
            for (let j = 0; j < length; j++) {
                matrix[i].push(0);
            }
        }
        return matrix;
    }
}
