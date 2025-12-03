/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch';
import { OkSwatch } from './OkSwatch';
import { ErrorsSwatch } from './ErrorsSwatch';
import { FaultsSwatch } from './FaultsSwatch';

const meta: Meta<typeof ColorSwatch> = {
    title: 'Components/Celestial/Swatches',
    component: ColorSwatch,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ColorSwatch>;

export const Default: Story = {
    args: {
        color: '#007bff',
    },
    render: (args) => <ColorSwatch {...args} />,
};

export const CustomColors: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center gap-2">
                <ColorSwatch color="#FF0000" />
                <span className="text-xs">Red</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <ColorSwatch color="#00FF00" />
                <span className="text-xs">Green</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <ColorSwatch color="#0000FF" />
                <span className="text-xs">Blue</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <ColorSwatch color="#FFFF00" />
                <span className="text-xs">Yellow</span>
            </div>
        </div>
    ),
};

export const SystemSwatches: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center gap-2">
                <ErrorsSwatch />
                <span className="text-xs">Errors</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <FaultsSwatch />
                <span className="text-xs">Faults</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <OkSwatch />
                <span className="text-xs">Ok</span>
            </div>
        </div>
    ),
};
