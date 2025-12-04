import { CelestialCardProps } from '../CelestialCard/types';
import { Breadcrumb } from './types';
/**
 * Custom hook for managing breadcrumb navigation in a flow diagram
 */
export declare const useBreadcrumbs: () => {
    breadcrumbs: Breadcrumb[];
    addBreadcrumb: (title: string, node?: CelestialCardProps) => void;
    navigateToBreadcrumb: (index: number) => void;
};
//# sourceMappingURL=use-breadcrumbs.hook.d.ts.map