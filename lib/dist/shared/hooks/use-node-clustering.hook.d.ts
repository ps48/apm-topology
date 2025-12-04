/**
 * Custom hook for managing node clustering states in React Flow diagrams
 *
 * This hook provides utilities to determine various clustering states of nodes:
 * - Stacking: Visual grouping of sibling nodes
 * - Collapsing/Expanding: Hiding/showing child node hierarchies
 * - State transitions: Determining what actions are available for each node
 *
 * The hook works with the node relationship system to understand:
 * - Which nodes can be stacked together (siblings)
 * - Which nodes have expandable/collapsible children
 * - Current visibility states of related nodes
 *
 * @returns Object containing state checking functions for different clustering operations
 */
export declare const useNodeClustering: () => {
    isStacked: (nodeId: string) => boolean;
    isStackable: (nodeId: string) => boolean;
    isCollapsed: (nodeId: string) => boolean;
    isCollapsable: (nodeId: string) => boolean;
    isExpanded: (nodeId: string) => boolean;
    isExpandable: (nodeId: string) => boolean;
};
//# sourceMappingURL=use-node-clustering.hook.d.ts.map