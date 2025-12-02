import { render, screen } from '@tests/vitest.utilities';
import { OkSwatch } from './OkSwatch';
import { COLOR_SWATCH_TEST_ID } from './ColorSwatch';

describe('OkSwatch', () => {
    it('renders with the correct color variable', () => {
        render(<OkSwatch />);

        const swatchElement = screen.getByTestId(COLOR_SWATCH_TEST_ID);
        expect(swatchElement).toBeInTheDocument();
        expect(swatchElement).toHaveStyle({ backgroundColor: 'var(--color-ok)' });
    });
});
