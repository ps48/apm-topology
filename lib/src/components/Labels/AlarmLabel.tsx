import { SliStatusIcon } from '../SliStatusIcon';
import { Label } from './Label';
import { type LabelProps } from './types';

export const AlarmLabel = ({ text, children = <SliStatusIcon status="breached" size={22} /> }: LabelProps) => (
    <Label text={text}>{children}</Label>
);
