import { ErrorsSwatch } from '../Swatches/ErrorsSwatch';
import { Label } from './Label';
import { type LabelProps } from './types';

export const ErrorsLabel = ({ text, children = <ErrorsSwatch /> }: LabelProps) => (
    <Label text={text} className="gap-1.5">
        {children}
    </Label>
);
