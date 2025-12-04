import { CelestialEdge, CelestialMapModel, CelestialNode } from '../../types';
/**
 * Custom hook for initializing and processing celestial map data.
 *
 * This hook performs two main operations:
 * 1. Node aggregation - Groups related nodes and collapses siblings to reduce visual clutter
 * 2. Focus application - Highlights specific nodes while fading others for better visibility
 *
 * @param nodes - Array of celestial nodes to be processed
 * @param edges - Array of celestial edges connecting the nodes
 * @param nodesInFocus - Optional array of nodes to highlight (others will be faded)
 *
 * @returns Processed map model with transformed nodes and edges
 */
export declare const useMapInitialization: (nodes: CelestialNode[], edges: CelestialEdge[], nodesInFocus?: CelestialNode[], topN?: number) => CelestialMapModel;
//# sourceMappingURL=use-map-initialization.hook.d.ts.map