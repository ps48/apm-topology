import { render, screen } from '@tests/vitest.utilities';
import { vi } from 'vitest';
import { OkLabel } from './OkLabel';

// Mock the OkSwatch component
vi.mock('../Swatches/OkSwatch', () => ({
    OkSwatch: () => <div data-testid="mock-ok-swatch" />,
}));

describe('OkLabel', () => {
    it('renders with text and default swatch', () => {
        render(<OkLabel text="Ok" />);

        expect(screen.getByText('Ok')).toBeInTheDocument();
        expect(screen.getByTestId('mock-ok-swatch')).toBeInTheDocument();
    });

    it('renders with custom children', () => {
        render(
            <OkLabel text="Ok">
                <div data-testid="custom-child">Custom Child</div>
            </OkLabel>,
        );

        expect(screen.getByText('Ok')).toBeInTheDocument();
        expect(screen.getByTestId('custom-child')).toBeInTheDocument();
        expect(screen.queryByTestId('mock-ok-swatch')).not.toBeInTheDocument();
    });
});
