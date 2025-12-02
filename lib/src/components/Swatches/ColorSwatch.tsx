import { ColorSwatchProps } from './types';

export const COLOR_SWATCH_TEST_ID = 'color-swatch';

export const ColorSwatch = ({ color, ...rest }: ColorSwatchProps) => (
    <div
        {...rest}
        data-testid={COLOR_SWATCH_TEST_ID}
        className="w-4 aspect-square rounded-xs inline-block"
        style={{ backgroundColor: color }}
    />
);
