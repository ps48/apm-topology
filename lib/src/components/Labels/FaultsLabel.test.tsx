/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { render, screen } from '@tests/vitest.utilities';
import { vi } from 'vitest';
import { FaultsLabel } from './FaultsLabel';

// Mock the FaultsSwatch component
vi.mock('../Swatches/FaultsSwatch', () => ({
    FaultsSwatch: () => <div data-testid="mock-faults-swatch" />,
}));

describe('FaultsLabel', () => {
    it('renders with text and default swatch', () => {
        render(<FaultsLabel text="Faults" />);

        expect(screen.getByText('Faults')).toBeInTheDocument();
        expect(screen.getByTestId('mock-faults-swatch')).toBeInTheDocument();
    });

    it('renders with custom children', () => {
        render(
            <FaultsLabel text="Faults">
                <div data-testid="custom-child">Custom Child</div>
            </FaultsLabel>,
        );

        expect(screen.getByText('Faults')).toBeInTheDocument();
        expect(screen.getByTestId('custom-child')).toBeInTheDocument();
        expect(screen.queryByTestId('mock-faults-swatch')).not.toBeInTheDocument();
    });
});
