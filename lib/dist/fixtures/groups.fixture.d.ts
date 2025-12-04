import { Edge, Node } from '@xyflow/react';
import { CelestialCardProps } from '../components/CelestialCard/types';
type NodeMapItem = {
    nodes: Node<CelestialCardProps>[];
    edges: Edge[];
};
type NodeMap = {
    [groupId: string]: NodeMapItem;
};
declare const nodeMap: NodeMap;
export { nodeMap, type NodeMap };
//# sourceMappingURL=groups.fixture.d.ts.map