import { CelestialNode } from '../../types';
/**
 * Custom hook that provides functionality to focus the camera on specific nodes
 * Calculates bounding box of target nodes and uses ReactFlow's fitBounds to focus on them
 *
 * @returns Function to focus on a set of nodes
 */
export declare const useFocusOnNodes: () => {
    focusOnNodes: (nodesInFocus: CelestialNode[], layoutNodes: CelestialNode[], delay?: number) => void;
};
//# sourceMappingURL=use-focus-on-nodes.hook.d.ts.map