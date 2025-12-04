import { Metrics } from '../../../shared/types/common.types';
import { Segment } from '../../Donut/types';
/**
 * Hook that generates donut chart segments from metrics data
 *
 * @param metrics - Object containing request metrics (total, errors, throttled)
 * @returns Array of donut chart segments with percentages, colors and labels
 */
export declare const useDonutSegments: (metrics: Metrics) => Segment[];
//# sourceMappingURL=use-donut-segments.hook.d.ts.map