import { Edge, Node } from '@xyflow/react';
import { CelestialCardProps } from '../components/CelestialCard';
type NodeMapItem = {
    nodes: Node<CelestialCardProps>[];
    edges: Edge[];
};
type NodeMap = {
    [groupId: string]: NodeMapItem;
};
export declare const canaryEdges: Edge[];
export declare const layoutMap: NodeMap;
export {};
//# sourceMappingURL=layout.fixture.d.ts.map