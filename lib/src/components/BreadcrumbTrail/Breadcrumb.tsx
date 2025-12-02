import { DividerIcon } from '@shared/resources';
import { PropsWithChildren } from 'react';

export interface BreadcrumbProps {
    title: string;
    onBreadcrumbClick?: (event: React.MouseEvent) => void;
}

export const Breadcrumb = ({ title, onBreadcrumbClick, children }: PropsWithChildren<BreadcrumbProps>) => (
    <span className="flex items-center">
        {children}
        {!onBreadcrumbClick ? (
            <span className="text-body-secondary px-2 py-1">{title}</span>
        ) : (
            <button
                onClick={onBreadcrumbClick}
                className="text-link-default hover:text-link-hover transition-colors duration-200 focus:outline-none rounded px-2 py-1 cursor-pointer"
            >
                {title}
            </button>
        )}
        {onBreadcrumbClick && (
            <span className="text-body-secondary mx-2">
                <DividerIcon className="w-4 h-4" />
            </span>
        )}
    </span>
);
