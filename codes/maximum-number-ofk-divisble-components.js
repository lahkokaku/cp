// Difficulty: Hard
// Topics: Tree, BFS, DFS
// https://leetcode.com/problems/maximum-number-of-k-divisible-components

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    if (n < 2) {
        return 1
    }

    const edgeLen = edges.length
    const graph = new Map()

    // Construct graph which consist of nodeToNeighbours
    for (let i = 0; i < edgeLen; i++) {
        const [node1, node2] = edges[i]
        graph.set(node1, (graph.get(node1) || new Set()).add(node2))
        graph.set(node2, (graph.get(node2) || new Set()).add(node1))
    }

    // Initialize queue which are only filled with leaf nodes
    const queue = []
    for (const [node, neighbours] of graph) {
        if (neighbours.size === 1) {
            queue.push(node)
        }
    }

    // Algorithm to count K divisible components
    let componentCount = 0
    while (queue.length) {
        const currNode = queue.shift()

        // Initialize neighbour node to be not found
        let neighbourNode = -1

        // Get neighbourNode
        if (graph.get(currNode).size) {
            neighbourNode = graph.get(currNode).values().next().value
        }

        // Remove edge that connects currNode to neightbourNode
        if (neighbourNode > -1) {
            graph.get(currNode).delete(neighbourNode)
            graph.get(neighbourNode).delete(currNode)
        }

        // Check divisibility of currNode value
        if (values[currNode] % k === 0) {
            componentCount++

        // If not divisible by K, value of currNode will added to value of its neighbourNode
        } else if (neighbourNode > -1) {
            values[neighbourNode] += values[currNode]
        }

        // If neighbourNode becomes leaf node, add it to queue
        if (
            neighbourNode > -1 &&
            graph.get(neighbourNode).size === 1
        ) {
            queue.push(neighbourNode)
        }
    }

    return componentCount
};