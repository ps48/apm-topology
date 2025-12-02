import { SliStatusIcon } from '../SliStatusIcon';
import { Label } from './Label';
import { type LabelProps } from './types';

export const RecoveredLabel = ({ text, children = <SliStatusIcon status="recovered" size={22} /> }: LabelProps) => (
    <Label text={text} className="gap-0.5">
        {children}
    </Label>
);
