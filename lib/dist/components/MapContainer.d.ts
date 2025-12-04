import { Edge, Node, OnEdgesChange, OnNodesChange } from '@xyflow/react';
import { default as React, ReactNode } from 'react';
import { CelestialEdge } from '../types';
import { Breadcrumb } from './BreadcrumbTrail';
import { CelestialCardProps } from './CelestialCard/types';
interface MapContainerProps {
    nodes: Node<CelestialCardProps>[];
    edges: Edge[];
    onNodesChange: OnNodesChange<Node<CelestialCardProps>>;
    onEdgesChange: OnEdgesChange<Edge>;
    isLoading?: boolean;
    breadcrumbs: Breadcrumb[];
    onBreadcrumbClick: (breadcrumb: Breadcrumb, index: number) => void;
    onEdgeClick: (event: any, edge: CelestialEdge) => void;
    emptyState?: ReactNode;
    hotspot?: ReactNode;
    numMatches?: number;
}
export declare const MapContainer: React.FC<MapContainerProps>;
export {};
//# sourceMappingURL=MapContainer.d.ts.map