export type SliStatus = 'breached' | 'recovered' | string;
export interface Metrics {
    requests: number;
    faults5xx: number;
    errors4xx: number;
    throttled?: number;
    errors5xx?: number;
    totalRequests?: number;
}
export interface SloHealth {
    status: SliStatus;
    breached: number;
    recovered: number;
    total: number;
}
export interface ChangeEvents {
    latestDeployment?: number;
    eventId?: string;
    username?: string;
}
//# sourceMappingURL=common.types.d.ts.map