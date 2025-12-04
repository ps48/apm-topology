/// <reference types="react" />
export interface CelestialControlsActions {
    onZoomIn: (e: React.MouseEvent) => void;
    onZoomOut: (e: React.MouseEvent) => void;
    onFitView: (e: React.MouseEvent) => void;
}
/**
 * Custom hook for managing celestial view controls
 * Provides zoom and fit view functionality for the celestial map
 * @returns Object containing zoom and fit view control functions
 */
export declare const useCelestialControls: () => CelestialControlsActions;
//# sourceMappingURL=use-celestial-controls.hook.d.ts.map