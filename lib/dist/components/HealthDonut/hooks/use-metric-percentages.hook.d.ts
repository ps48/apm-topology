import { Metrics } from '../../../shared/types/common.types';
import { MetricPercentages } from '../types';
/**
 * Custom hook that calculates percentage metrics for different types of errors
 * relative to total requests.
 *
 * @param metrics - Object containing raw metric values including total requests
 *                 and counts for different error types
 * @returns Object containing calculated percentages for 5xx errors, 4xx errors
 *          and throttled requests
 */
export declare const useMetricPercentages: (metrics: Metrics) => MetricPercentages;
//# sourceMappingURL=use-metric-percentages.hook.d.ts.map