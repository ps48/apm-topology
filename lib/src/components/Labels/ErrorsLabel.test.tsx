import { render, screen } from '@tests/vitest.utilities';
import { vi } from 'vitest';
import { ErrorsLabel } from './ErrorsLabel';

// Mock the ErrorsSwatch component
vi.mock('../Swatches/ErrorsSwatch', () => ({
    ErrorsSwatch: () => <div data-testid="mock-errors-swatch" />,
}));

describe('ErrorsLabel', () => {
    it('renders with text and default swatch', () => {
        render(<ErrorsLabel text="Errors" />);

        expect(screen.getByText('Errors')).toBeInTheDocument();
        expect(screen.getByTestId('mock-errors-swatch')).toBeInTheDocument();
    });

    it('renders with custom children', () => {
        render(
            <ErrorsLabel text="Errors">
                <div data-testid="custom-child">Custom Child</div>
            </ErrorsLabel>,
        );

        expect(screen.getByText('Errors')).toBeInTheDocument();
        expect(screen.getByTestId('custom-child')).toBeInTheDocument();
        expect(screen.queryByTestId('mock-errors-swatch')).not.toBeInTheDocument();
    });
});
