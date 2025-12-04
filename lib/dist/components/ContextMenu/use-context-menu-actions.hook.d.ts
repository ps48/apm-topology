/**
 * Custom hook that provides context menu actions for node manipulation
 *
 * This hook encapsulates the logic for various node operations that can be triggered
 * from context menus or action buttons. It handles:
 * - Expanding/collapsing sibling nodes (stacking/unstacking)
 * - Expanding children nodes (showing hidden descendants)
 * - Collapsing descendant nodes (hiding child hierarchies)
 *
 * All actions update the React Flow state and optionally close the context menu.
 *
 * @param nodeId - The ID of the node these actions will operate on
 * @param onClose - Optional callback to close the context menu after action execution
 * @returns Object containing all available action handlers
 */
export declare const useContextMenuActions: (nodeId: string, onClose?: () => void) => {
    onExpandSiblings: (event: React.MouseEvent) => void;
    onCollapseSiblings: (event: React.MouseEvent) => void;
    onExpandChildren: (event: React.MouseEvent) => void;
    onCollapseDescendants: (event: React.MouseEvent) => void;
};
//# sourceMappingURL=use-context-menu-actions.hook.d.ts.map