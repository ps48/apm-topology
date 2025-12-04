import { CelestialNode, CelestialEdge } from '../../types';
export type Direction = 'TB' | 'BT' | 'LR' | 'RL';
/**
 * Options for configuring the Dagre layout algorithm
 */
export interface LayoutOptions {
    direction?: Direction;
    nodeWidth?: number;
    nodeHeight?: number;
    rankSeparation?: number;
    nodeSeparation?: number;
    edgeSeparation?: number;
    marginX?: number;
    marginY?: number;
    nodesPerRow?: number;
    gridPadding?: number;
}
/**
 * Custom hook for applying celestial layout to nodes and edges
 *
 * @param defaultOptions - Default layout options
 * @returns Object containing layout functions
 */
export declare const useCelestialLayout: (defaultOptions?: LayoutOptions) => {
    getLaidOutElements: (nodes: CelestialNode[], edges: CelestialEdge[], options?: LayoutOptions) => {
        nodes: CelestialNode[];
        edges: CelestialEdge[];
    };
};
//# sourceMappingURL=use-celestial-layout.hook.d.ts.map