import { Breadcrumb } from '../../components/BreadcrumbTrail/types';
import { CelestialCardProps } from '../../components/CelestialCard/types';
import { CelestialEdge } from '../../types';
/**
 * Interface defining the props required for the celestial map actions
 */
interface CelestialMapActionsProps {
    /** Optional callback for fetching data with key attributes */
    onDataFetch?: (node?: CelestialCardProps) => void;
    /** Function to navigate to a specific breadcrumb by index */
    navigateToBreadcrumb: (index: number) => void;
    /** Function for when an edge in the map is clicked */
    onEdgeClick?: (edge: CelestialEdge) => void;
    /** Optional callback for when a breadcrumb is clicked */
    onBreadcrumbClick?: (breadcrumb: Breadcrumb, index: number) => void;
}
/**
 * Custom hook that provides actions for the celestial map component
 * @param props - The props object containing required callbacks and state
 * @returns Object containing callback functions for breadcrumb clicks, context menu closing, and edge clicks
 */
export declare const useCelestialMapActions: ({ onDataFetch, navigateToBreadcrumb, onEdgeClick, onBreadcrumbClick: propOnBreadcrumbClick, }: CelestialMapActionsProps) => {
    onBreadcrumbClick: (breadcrumb: Breadcrumb, index: number) => void;
    onEdgeClick: (_event: any, edge: CelestialEdge) => void;
};
export {};
//# sourceMappingURL=use-celestial-map-actions.hook.d.ts.map