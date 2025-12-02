import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'Components/Celestial/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Loader>;

const LoaderTemplate = () => (
    <div className="flex items-center justify-center min-h-screen">
        <Loader />
    </div>
);

export const Default: Story = {
    render: LoaderTemplate,
};
