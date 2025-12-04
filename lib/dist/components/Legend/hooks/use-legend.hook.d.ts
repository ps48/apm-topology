import { Position } from '../../Portal';
/**
 * Interface representing the state and handlers for the legend component
 */
export interface LegendState {
    /** Reference to the legend button element */
    ref: React.RefObject<HTMLButtonElement>;
    /** Whether the legend is currently open */
    isOpen: boolean;
    /** Position coordinates for the legend */
    position?: Position;
    /** Handler to close the legend */
    onClose: () => void;
    /** Handler to toggle the legend open/closed state */
    onToggle: (e: React.MouseEvent) => void;
}
/**
 * Hook that manages legend state and positioning
 * @returns {LegendState} Object containing legend state and handlers
 */
export declare const useLegend: () => LegendState;
//# sourceMappingURL=use-legend.hook.d.ts.map