import { type SliStatus } from '@shared/types/common.types';

export interface SliStatusIconProps {
    size: number;
    isPulsing?: boolean;
    status: SliStatus;
}
