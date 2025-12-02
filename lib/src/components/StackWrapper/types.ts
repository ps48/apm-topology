import { ReactNode } from 'react';

export interface StackWrapperProps {
    children: ReactNode;
    hiddenChildrenCount: number;
    stackSpacing?: number;
    maxVisibleStacks?: number;
    button?: ReactNode;
    isFaded: boolean;
}
