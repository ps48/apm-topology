import { render, screen } from '@tests/vitest.utilities';
import { FaultsSwatch } from './FaultsSwatch';
import { COLOR_SWATCH_TEST_ID } from './ColorSwatch';

describe('FaultsSwatch', () => {
    it('renders with the correct color variable', () => {
        render(<FaultsSwatch />);

        const swatchElement = screen.getByTestId(COLOR_SWATCH_TEST_ID);
        expect(swatchElement).toBeInTheDocument();
        expect(swatchElement).toHaveStyle({ backgroundColor: 'var(--color-faults)' });
    });
});
