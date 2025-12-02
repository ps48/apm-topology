import { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { AlarmLabel } from './AlarmLabel';
import { BreachedLabel } from './BreachedLabel';
import { ErrorsLabel } from './ErrorsLabel';
import { FaultsLabel } from './FaultsLabel';
import { RecoveredLabel } from './RecoveredLabel';
import { OkLabel } from './OkLabel';

const meta: Meta<typeof Label> = {
    title: 'Components/Celestial/Labels',
    component: Label,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        text: 'Default Label',
        children: <div className="w-4 h-4 bg-blue-500 rounded-full" />,
    },
};

export const AllLabels: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Base Label</h3>
                <Label text="Base Label">
                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                </Label>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Status Labels</h3>
                <div className="flex gap-4">
                    <AlarmLabel text="Alarm" />
                    <BreachedLabel text="Breached" />
                    <RecoveredLabel text="Recovered" />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Metric Labels</h3>
                <div className="flex gap-4">
                    <ErrorsLabel text="Errors" />
                    <FaultsLabel text="Faults" />
                    <OkLabel text="Ok" />
                </div>
            </div>
        </div>
    ),
};

export const StatusLabels: Story = {
    render: () => (
        <div className="flex gap-4">
            <AlarmLabel text="Alarm" />
            <BreachedLabel text="Breached" />
            <RecoveredLabel text="Recovered" />
        </div>
    ),
};

export const MetricLabels: Story = {
    render: () => (
        <div className="flex gap-4">
            <ErrorsLabel text="Errors" />
            <FaultsLabel text="Faults" />
            <OkLabel text="Ok" />
        </div>
    ),
};

export const CustomLabel: Story = {
    render: () => (
        <Label text="Custom Label">
            <div className="w-4 h-4 bg-purple-500 rounded-full" />
        </Label>
    ),
};
