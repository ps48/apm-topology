import type { Metrics } from '@shared/types/common.types';

export const DEFAULT_METRICS: Metrics = {
    requests: 0,
    faults5xx: 0,
    errors4xx: 0,
};

export const GROUP_NODE_TYPE = 'ServiceGroup';
export const AWS_SERVICE_NODE_TYPE = 'AWS::Service';