/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { render, screen } from '@tests/vitest.utilities';
import { ErrorsSwatch } from './ErrorsSwatch';
import { COLOR_SWATCH_TEST_ID } from './ColorSwatch';

describe('ErrorsSwatch', () => {
    it('renders with the correct color variable', () => {
        render(<ErrorsSwatch />);

        const swatchElement = screen.getByTestId(COLOR_SWATCH_TEST_ID);
        expect(swatchElement).toBeInTheDocument();
        expect(swatchElement).toHaveStyle({ backgroundColor: 'var(--color-errors)' });
    });
});
