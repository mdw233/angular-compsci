class AdjacencyMatrixGraph extends Graph {

    private matrix: number[][];

    constructor(numVerticies: number, directed: boolean = false) {
        super(numVerticies, directed);

        for(let i = 0; i < numVerticies; i++) {
            for(let j = 0; j < numVerticies; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    private throwRangeError() {
        throw new RangeError(`One of the values is larger than the matrix (${this.numVerticies}) or less than 0.`);
    }

    private throwErrorIfOutOfBounds(v1: number, v2: number) {
        if (v1 >= this.numVerticies || v2 >= this.numVerticies || v1 < 0 || v2 < 0)
            this.throwRangeError();
    }
    

    addEdge(v1: number, v2: number, weight: number = 1) {
        this.throwErrorIfOutOfBounds(v1, v2);

        if (weight < 1)
            throw new RangeError(`Weight must be >= 1.`);

        this.matrix[v1][v2] = weight;
        
        //when the graph isn't weighted, we need to make sure the edges go both ways
        if (!this.directed)
            this.matrix[v2][v1] = weight;
    }

    getAdjacentVerticies(v: number): number[] {
        if (v < 0 || v >= this.numVerticies)
            this.throwRangeError();
        
        let adjacentVerticies: number[] = [];
        for (let i = 0; i < this.numVerticies; i++) {
            if (this.matrix[v][i] > 0) {
                adjacentVerticies.push(i);
            }
        }

        return adjacentVerticies;
    }

    getIndegree(v: number): number {
        if (v < 0 || v >= this.numVerticies)
            this.throwRangeError();

        let indegree: number = 0;
        for (let i = 0; i < this.numVerticies; i++) {
            if (this.matrix[i][v] > 0) {
                indegree++;
            }
        }

        return indegree;
    }

    getEdgeWeight(v1: number, v2: number): number {
        this.throwErrorIfOutOfBounds(v1, v2);

        return this.matrix[v1][v2];
    }

    getDisplayLines(): string[] {
        let display: string[] = [];

        for (let i = 0; i < this.numVerticies; i++) {
            var adjacentVerticies = this.getAdjacentVerticies(i);
            for (let v = 0; v < adjacentVerticies.length; v++) {
                display.push(`${i} --> ${v}`);
            }
        }

        return display;
    }
}