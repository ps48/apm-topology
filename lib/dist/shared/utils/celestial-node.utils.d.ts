import { TopologyNode, TopologyEdge } from '../types/sdk.types';
interface GridConfig {
    nodesPerRow: number;
    horizontalSpacing: number;
    verticalSpacing: number;
    startX: number;
    startY: number;
}
export declare const DEFAULT_GRID_CONFIG: GridConfig;
export declare const calculatePosition: (index: number, config: GridConfig) => {
    x: number;
    y: number;
};
/**
 * Truncates a string to fit within a maximum length by adding an ellipsis
 *
 * @param input - The string to truncate
 * @param maxLength - The maximum allowed length
 * @returns The truncated string with ellipsis if needed, or original string if within length
 */
export declare const truncateToFitInWidget: (input: string, maxLength: number) => string;
/**
 * Populates dependency types for a given node by finding edges where it is the source node
 * and checking if target nodes have ResourceType in their keyAttributes
 *
 * @param node - The topology node to populate dependency types for
 * @param edges - Array of edges from the service map
 * @param allNodes - Array of all topology nodes to find target nodes
 * @returns Array of dependency types (ResourceType values from target nodes)
 */
export declare const computeDependencyTypes: (node: TopologyNode, edges: TopologyEdge[], allNodes: TopologyNode[]) => string[];
export {};
//# sourceMappingURL=celestial-node.utils.d.ts.map