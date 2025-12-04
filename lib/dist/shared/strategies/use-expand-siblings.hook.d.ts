import { CelestialEdge, CelestialNode } from '../../types';
export declare const useExpandSiblings: () => (nodeId: string) => {
    nodes: CelestialNode[];
    edges: (CelestialEdge | {
        hidden: boolean;
    })[];
};
//# sourceMappingURL=use-expand-siblings.hook.d.ts.map