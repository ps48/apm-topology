import { Edge, Node } from '@xyflow/react';
/**
 * Enum defining node/edge visibility states for filtering operations.
 * Used throughout the hook to control which nodes/edges are included in results.
 *
 * @enum {string}
 */
export declare enum Visibility {
    /** Only include visible nodes/edges (hidden = false or undefined) */
    Visible = "visible",
    /** Only include hidden nodes/edges (hidden = true) */
    Hidden = "hidden",
    /** Include all nodes/edges regardless of visibility state */
    Any = "any"
}
/**
 * Interface defining all available node relationship analysis methods.
 * Provides comprehensive graph traversal capabilities with visibility filtering.
 */
export interface NodeRelationshipActions {
    /**
     * Retrieves all incoming edges for a specified node.
     * @param nodeId - The ID of the target node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Array of edges pointing to the specified node
     */
    getIncomingEdges: (nodeId: string, visibility?: Visibility) => Edge[];
    /**
     * Counts the number of incoming edges for a specified node.
     * @param nodeId - The ID of the target node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Number of incoming edges
     */
    getIncomingEdgesCount: (nodeId: string, visibility?: Visibility) => number;
    /**
     * Determines if a node has any incoming edges.
     * @param nodeId - The ID of the target node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns True if the node has incoming edges, false otherwise
     */
    hasIncomingEdges: (nodeId: string, visibility?: Visibility) => boolean;
    /**
     * Retrieves all outgoing edges from a specified node.
     * @param nodeId - The ID of the source node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Array of edges originating from the specified node
     */
    getOutgoingEdges: (nodeId: string, visibility?: Visibility) => Edge[];
    /**
     * Counts the number of outgoing edges from a specified node.
     * @param nodeId - The ID of the source node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Number of outgoing edges
     */
    getOutgoingEdgesCount: (nodeId: string, visibility?: Visibility) => number;
    /**
     * Determines if a node has any outgoing edges.
     * @param nodeId - The ID of the source node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns True if the node has outgoing edges, false otherwise
     */
    hasOutgoingEdges: (nodeId: string, visibility?: Visibility) => boolean;
    /**
     * Retrieves all parent nodes (nodes with edges pointing to the specified node).
     * Uses React Flow's getIncomers utility for efficient traversal.
     * @param nodeId - The ID of the child node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Array of parent nodes
     */
    getParentNodes: (nodeId: string, visibility?: Visibility) => Node[];
    /**
     * Retrieves all children nodes (nodes that the specified node points to).
     * Uses React Flow's getOutgoers utility for efficient traversal.
     * @param nodeId - The ID of the parent node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Array of children nodes
     */
    getChildrenNodes: (nodeId: string, visibility?: Visibility) => Node[];
    /**
     * Retrieves all sibling nodes (nodes that share the same parent(s)).
     * Siblings are determined by finding all children of the node's parents,
     * then deduplicating the results.
     * @param nodeId - The ID of the node to find siblings for
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Array of sibling nodes (includes the original node)
     */
    getSiblingNodes: (nodeId: string, visibility?: Visibility) => Node[];
    /**
     * Counts the number of parent nodes for a specified node.
     * @param nodeId - The ID of the child node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Number of parent nodes
     */
    getParentNodesCount: (nodeId: string, visibility?: Visibility) => number;
    /**
     * Counts the number of children nodes for a specified node.
     * @param nodeId - The ID of the parent node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Number of children nodes
     */
    getChildrenNodesCount: (nodeId: string, visibility?: Visibility) => number;
    /**
     * Counts the number of sibling nodes for a specified node.
     * @param nodeId - The ID of the node to count siblings for
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns Number of sibling nodes (includes the original node)
     */
    getSiblingNodesCount: (nodeId: string, visibility?: Visibility) => number;
    /**
     * Determines if a node has any children nodes.
     * @param nodeId - The ID of the potential parent node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns True if the node has children, false otherwise
     */
    hasChildren: (nodeId: string, visibility?: Visibility) => boolean;
    /**
     * Determines if a node has any parent nodes.
     * @param nodeId - The ID of the potential child node
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns True if the node has parents, false otherwise
     */
    hasParents: (nodeId: string, visibility?: Visibility) => boolean;
    /**
     * Determines if a node has any sibling nodes.
     * @param nodeId - The ID of the node to check for siblings
     * @param visibility - Filter by visibility state (defaults to Any)
     * @returns True if the node has siblings, false otherwise
     */
    hasSiblings: (nodeId: string, visibility?: Visibility) => boolean;
    /**
     * Determines if a node is an aggregate node (has aggregatedNodeId in data).
     * Aggregate nodes are typically created during grouping operations.
     * @param nodeId - The ID of the node to check
     * @param visibility - Filter by visibility state
     * @returns True if the node is an aggregate node, false otherwise
     */
    isAggregateNode: (nodeId: string, visibility: Visibility) => boolean;
    /**
     * Retrieves all sibling nodes that share the same aggregatedNodeId.
     * Used for finding nodes that were grouped together during aggregation.
     * @param nodeId - The ID of the aggregate node
     * @param visibility - Filter by visibility state
     * @returns Array of aggregate sibling nodes (excludes the original node)
     */
    getAggregateSiblings: (nodeId: string, visibility: Visibility) => Node[];
    /**
     * Counts the number of aggregate sibling nodes.
     * @param nodeId - The ID of the aggregate node
     * @param visibility - Filter by visibility state
     * @returns Number of aggregate sibling nodes
     */
    getAggregateSiblingsCount: (nodeId: string, visibility: Visibility) => number;
    /**
     * Determines if a node has any aggregate siblings.
     * @param nodeId - The ID of the aggregate node
     * @param visibility - Filter by visibility state
     * @returns True if the node has aggregate siblings, false otherwise
     */
    hasAggregateSiblings: (nodeId: string, visibility: Visibility) => boolean;
}
/**
 * Custom hook providing comprehensive node relationship analysis and graph traversal utilities.
 *
 * This hook leverages React Flow's built-in utilities (getIncomers, getOutgoers) combined with
 * custom logic to provide efficient graph navigation capabilities. All methods support visibility
 * filtering to work with both visible and hidden nodes/edges.
 *
 * @returns {NodeRelationshipActions} Object containing all relationship analysis methods
 */
export declare const useNodeRelationships: () => {
    getAggregateSiblings: (nodeId: string, visibility?: Visibility) => Node[];
    getAggregateSiblingsCount: (nodeId: string, visibility?: Visibility) => number;
    getChildrenNodes: (nodeId: string, visibility?: Visibility) => Node[];
    getChildrenNodesCount: (nodeId: string, visibility?: Visibility) => number;
    getIncomingEdges: (nodeId: string, visibility?: Visibility) => Edge[];
    getIncomingEdgesCount: (nodeId: string, visibility?: Visibility) => number;
    getOutgoingEdges: (nodeId: string, visibility?: Visibility) => Edge[];
    getOutgoingEdgesCount: (nodeId: string, visibility?: Visibility) => number;
    getParentNodes: (nodeId: string, visibility?: Visibility) => Node[];
    getParentNodesCount: (nodeId: string, visibility?: Visibility) => number;
    getSiblingNodes: (nodeId: string, visibility?: Visibility) => Node[];
    getSiblingNodesCount: (nodeId: string, visibility?: Visibility) => number;
    hasAggregateSiblings: (nodeId: string, visibility?: Visibility) => boolean;
    hasChildren: (nodeId: string, visibility?: Visibility) => boolean;
    hasIncomingEdges: (nodeId: string, visibility?: Visibility) => boolean;
    hasOutgoingEdges: (nodeId: string, visibility?: Visibility) => boolean;
    hasParents: (nodeId: string, visibility?: Visibility) => boolean;
    hasSiblings: (nodeId: string, visibility?: Visibility) => boolean;
    isAggregateNode: (nodeId: string, visibility?: Visibility) => boolean;
};
//# sourceMappingURL=use-node-relationships.hook.d.ts.map