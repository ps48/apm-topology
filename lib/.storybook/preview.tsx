/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



import React from 'react';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        darkMode: {
            stylePreview: true,
            darkClass: 'awsui-polaris-dark-mode',
            lightClass: 'awsui-polaris-light-mode',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    }
};

export default preview;