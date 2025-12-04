import { Node } from '@xyflow/react';
import { CelestialCardProps } from '../components/CelestialCard/types';
interface GridConfig {
    nodesPerRow: number;
    horizontalSpacing: number;
    verticalSpacing: number;
    startX: number;
    startY: number;
}
export declare const createInitialNodes: (count: number, config?: Partial<GridConfig>) => Node<CelestialCardProps>[];
export {};
//# sourceMappingURL=basic.fixture.d.ts.map