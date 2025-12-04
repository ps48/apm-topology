import { default as React, PropsWithChildren } from 'react';
import { CelestialCardProps } from '../../components/CelestialCard';
interface CelestialNodeActionsType {
    selectedNodeId?: string;
    onGroupToggle?: (event: React.MouseEvent, node: CelestialCardProps) => void;
    onDashboardClick?: (event: React.MouseEvent, node: CelestialCardProps) => void;
    onUnstackNode?: (event: React.MouseEvent, node: CelestialCardProps) => void;
    onStackNode?: (event: React.MouseEvent, node: CelestialCardProps) => void;
}
interface CelestialNodeActionsProviderProps {
    onDataFetch?: (node?: CelestialCardProps) => void;
    addBreadcrumb?: (title: string, node?: CelestialCardProps) => void;
    onDashboardClick?: (node?: CelestialCardProps) => void;
    onUnstackNode?: (stackedNodeId: string) => void;
}
export declare const CelestialNodeActionsProvider: React.FC<PropsWithChildren<CelestialNodeActionsProviderProps>>;
export declare const useCelestialNodeActionsContext: () => CelestialNodeActionsType;
export {};
//# sourceMappingURL=NodeActionsContext.d.ts.map