import { HTMLAttributes, PropsWithChildren } from 'react';

export interface LabelProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
    text: string;
}
