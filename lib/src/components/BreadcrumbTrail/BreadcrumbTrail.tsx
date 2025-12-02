import { GlobeIcon } from '@shared/resources';
import { DEFAULT_METRICS } from '@shared/constants/common.constants';
import { Breadcrumb } from './Breadcrumb';
import { type BreadcrumbTrailProps } from './types';
import { HealthDonut } from '../HealthDonut';

/**
 * BreadcrumbTrail component displays a navigation breadcrumb path
 *
 * @param {Object} props - Component props
 * @param {Array} props.breadcrumbs - Array of breadcrumb items with id and title
 * @param {Function} props.onBreadcrumbClick - Click handler for breadcrumb items
 * @returns {JSX.Element} Rendered breadcrumb trail
 */
export const BreadcrumbTrail = ({ breadcrumbs, onBreadcrumbClick, hotspot }: BreadcrumbTrailProps) => (
    <div className="flex items-center px-4 py-3">
        {breadcrumbs.map((breadcrumb, index) => (
            <Breadcrumb
                key={breadcrumb.node?.id || breadcrumb.title}
                title={breadcrumb.title}
                onBreadcrumbClick={
                    index < breadcrumbs.length - 1 ? () => onBreadcrumbClick(breadcrumb, index) : undefined
                }
            >
                {index === 0 ? (
                    <GlobeIcon className="w-5 h-5 text-body-secondary" />
                ) : (
                    <HealthDonut
                        metrics={breadcrumb.node?.metrics || { ...DEFAULT_METRICS }}
                        size={30}
                        icon={breadcrumb.node?.icon}
                        health={breadcrumb.node?.health}
                    />
                )}
            </Breadcrumb>
        ))}
        {hotspot}
    </div>
);
