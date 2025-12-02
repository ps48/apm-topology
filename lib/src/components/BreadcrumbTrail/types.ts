import { type CelestialCardProps } from '../CelestialCard/types';

export interface Breadcrumb {
    title: string;
    node?: CelestialCardProps;
}
export interface BreadcrumbTrailProps {
    breadcrumbs: Breadcrumb[];
    onBreadcrumbClick: (Breadcrumb: Breadcrumb, index: number) => void;
    hotspot?: React.ReactNode;
}
