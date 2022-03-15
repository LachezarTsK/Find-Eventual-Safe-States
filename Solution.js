
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    if (graph === undefined || graph === null || graph.length === 0) {
        return [];
    }

    this.NOT_VISITED = 0;
    this.CYCLICAL = 1;
    this.NOT_CYCLICAL = 2;

    const size = graph.length;
    const nodeStatus = new Array(size).fill(0);
    const allEventualSafeNodes = [];

    for (let node = 0; node < size; node++) {
        if (depthFirstSearch_nodeIsPartOfCycle(node, graph, nodeStatus) === false) {
            allEventualSafeNodes.push(node);
        }
    }
    return allEventualSafeNodes;
};

/**
 * @param {number} node 
 * @param {number[][]} graph
 * @param {number[]} nodeStatus
 * @return {boolean}
 */
function depthFirstSearch_nodeIsPartOfCycle(node, graph, nodeStatus) {
    if (nodeStatus[node] !== this.NOT_VISITED) {
        return nodeStatus[node] === this.CYCLICAL;
    }

    nodeStatus[node] = this.CYCLICAL;
    for (const neigbours of graph[node]) {
        if (depthFirstSearch_nodeIsPartOfCycle(neigbours, graph, nodeStatus)) {
            return true;
        }
    }

    nodeStatus[node] = this.NOT_CYCLICAL;
    return false;
}
