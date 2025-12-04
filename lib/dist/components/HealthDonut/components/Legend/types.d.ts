import { Metrics, SloHealth } from '../../../../shared/types/common.types';
export type TrianglePosition = 'left' | 'right';
export interface LegendProps {
    metrics: Metrics;
    health?: SloHealth;
    trianglePosition?: TrianglePosition;
}
//# sourceMappingURL=types.d.ts.map