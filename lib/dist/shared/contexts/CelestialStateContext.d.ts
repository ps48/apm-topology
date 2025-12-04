import { default as React, PropsWithChildren } from 'react';
interface CelestialStateContextType {
    selectedNodeId?: string;
    setSelectedNodeId: (id: string | undefined) => void;
    unstackedAggregateNodeIds: string[];
    setUnstackedAggregateNodeIds: (ids: string[]) => void;
    activeMenuNodeId: string | null;
    setActiveMenuNodeId: React.Dispatch<React.SetStateAction<string | null>>;
}
export interface CelestialStateProviderProps {
    mocks?: CelestialStateContextType;
}
export declare const CelestialStateProvider: React.FC<PropsWithChildren<CelestialStateProviderProps>>;
export declare const useCelestialStateContext: () => CelestialStateContextType;
export {};
//# sourceMappingURL=CelestialStateContext.d.ts.map