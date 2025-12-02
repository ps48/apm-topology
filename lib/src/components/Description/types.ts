import { HTMLAttributes } from 'react';

export interface DescriptionProps extends HTMLAttributes<HTMLElement> {
    label: string;
    value: string;
}
