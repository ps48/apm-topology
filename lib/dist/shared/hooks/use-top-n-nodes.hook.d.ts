import { CelestialEdges, CelestialNodes } from 'src/types';
export interface UseTopNNodesProps {
    nodes: CelestialNodes;
    edges: CelestialEdges;
    topN: number;
}
/**
 * Custom hook that selects the top N nodes from a celestial map using topological traversal.
 *
 * The algorithm prioritizes nodes based on their position in the dependency graph:
 * 1. First, selects nodes with no incoming edges (root nodes)
 * 2. Then traverses their immediate children level by level
 * 3. Continues until topN nodes are selected
 *
 * This ensures that the most "upstream" nodes in the dependency chain are prioritized,
 * providing better visibility into the root causes of issues in the system.
 *
 * @param props - Configuration object containing nodes, edges, and topN limit
 * @param props.nodes - Array of CelestialNode objects to process
 * @param props.edges - Array of CelestialEdge objects representing connections
 * @param props.topN - Maximum number of nodes to return
 * @returns Object containing the selected nodes, remaining count, and root nodes
 *
 * @example
 * ```typescript
 * const { topNNodes, remainingCount, rootNodes } = useTopNNodes({
 *   nodes: celestialNodes,
 *   edges: celestialEdges,
 *   topN: 20
 * });
 * ```
 */
export declare const useTopNNodes: ({ nodes, edges, topN, }: UseTopNNodesProps) => CelestialNodes;
//# sourceMappingURL=use-top-n-nodes.hook.d.ts.map