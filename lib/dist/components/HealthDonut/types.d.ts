import { Metrics, SloHealth } from '../../shared/types/common.types';
import { PropsWithChildren } from 'react';
export interface MetricPercentages {
    faults5xxPercent: number;
    errors4xxPercent: number;
    ok2xxPercent: number;
}
export interface HealthDonutProps extends PropsWithChildren {
    metrics: Metrics;
    health?: SloHealth;
    icon?: React.ReactNode;
    size: number;
    status?: string;
    isLegendEnabled?: boolean;
}
//# sourceMappingURL=types.d.ts.map