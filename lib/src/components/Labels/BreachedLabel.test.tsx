/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { render, screen } from '@tests/vitest.utilities';
import { vi } from 'vitest';
import { BreachedLabel } from './BreachedLabel';

// Mock the SliStatusIcon component
vi.mock('../SliStatusIcon', () => ({
    SliStatusIcon: () => <div data-testid="mock-sli-status-icon" />,
}));

describe('BreachedLabel', () => {
    it('renders with text and default icon', () => {
        render(<BreachedLabel text="Breached" />);

        expect(screen.getByText('Breached')).toBeInTheDocument();
        expect(screen.getByTestId('mock-sli-status-icon')).toBeInTheDocument();
    });

    it('renders with custom children', () => {
        render(
            <BreachedLabel text="Breached">
                <div data-testid="custom-child">Custom Child</div>
            </BreachedLabel>,
        );

        expect(screen.getByText('Breached')).toBeInTheDocument();
        expect(screen.getByTestId('custom-child')).toBeInTheDocument();
        expect(screen.queryByTestId('mock-sli-status-icon')).not.toBeInTheDocument();
    });
});
