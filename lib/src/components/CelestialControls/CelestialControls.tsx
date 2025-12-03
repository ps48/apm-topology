/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { ZoomInIcon, ZoomOutIcon, FitViewIcon } from '@shared/resources';
import { t } from '@shared/i18n/t';
import { useCelestialControls } from './use-celestial-controls.hook';
/**
 * Control buttons for zooming and fitting the Celestial map view
 */
export const CelestialControls = () => {
    const { onZoomIn, onZoomOut, onFitView } = useCelestialControls();

    // Create direct references to the button elements
    return (
        <div className="flex flex-col gap-2 bg-container-default text-body-secondary p-2 rounded-full shadow-md dark:shadow-md z-50">
            <button
                type="button"
                onClick={onZoomIn}
                className="w-6 h-6 flex items-center justify-center hover:text-interactive transition-all cursor-pointer"
                title={t('controls.zoomIn')}
                aria-label={t('controls.zoomIn')}
            >
                <ZoomInIcon className="w-4 h-4" />
            </button>
            <button
                type="button"
                onClick={onFitView}
                className="w-6 h-6 flex items-center justify-center hover:text-interactive transition-all cursor-pointer"
                title={t('controls.fitView')}
                aria-label={t('controls.fitView')}
            >
                <FitViewIcon className="w-4 h-4" />
            </button>
            <button
                type="button"
                onClick={onZoomOut}
                className="w-6 h-6 flex items-center justify-center hover:text-interactive transition-all cursor-pointer"
                title={t('controls.zoomOut')}
                aria-label={t('controls.zoomOut')}
            >
                <ZoomOutIcon className="w-4 h-4" />
            </button>
        </div>
    );
};
