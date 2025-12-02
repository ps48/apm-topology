import { FaultsSwatch } from '../Swatches/FaultsSwatch';
import { Label } from './Label';
import { type LabelProps } from './types';

export const FaultsLabel = ({ text, children = <FaultsSwatch /> }: LabelProps) => (
    <Label text={text} className="gap-1.5">
        {children}
    </Label>
);
