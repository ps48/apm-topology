import type { Meta, StoryObj } from '@storybook/react';
import { LoadBalancerIcon, Ec2Icon, EcsIcon, EksIcon, ApplicationIcon, K8sIcon, LambdaIcon } from '@shared/resources/services';
import { HealthDonut } from './HealthDonut';
import { type HealthDonutProps } from './types';

const meta: Meta<typeof HealthDonut> = {
    title: 'Components/Celestial/HealthDonut',
    component: HealthDonut,
};

export default meta;

type Story = StoryObj<typeof HealthDonut>;

const HealthDonutTemplate = (props: HealthDonutProps) => (
    <div className="flex items-center justify-center min-h-screen">
        <HealthDonut {...props} />
    </div>
);

const HealthDonutSizesTemplate = (props: HealthDonutProps) => (
    <div className="flex items-center justify-center min-h-screen gap-8">
        <div className="flex flex-col items-center gap-2">
            <HealthDonut {...props} size={30} />
            <span className="text-sm text-gray-500">Extra Small (30px)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <HealthDonut {...props} size={40} />
            <span className="text-sm text-gray-500">Small (40px)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <HealthDonut {...props} size={80} />
            <span className="text-sm text-gray-500">Medium (80px)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <HealthDonut {...props} size={160} />
            <span className="text-sm text-gray-500">Large (160px)</span>
        </div>
    </div>
);

// Alarming with different sizes
export const AlarmingSizes: Story = {
    name: 'Alarming Sizes',
    args: {
        metrics: {
            errors4xx: 146,
            faults5xx: 50,
            requests: 484,
        },
        size: 80,
        icon: <Ec2Icon className="w-full h-full object-cover" />,
        health: {
            status: 'breached',
            breached: 1,
            recovered: 0,
            total: 1,
        },
    },
    render: HealthDonutSizesTemplate,
};

// Recovered with different sizes
export const RecoveredSizes: Story = {
    name: 'Recovered Sizes',
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 150,
            errors4xx: 100,
        },
        size: 80,
        icon: <Ec2Icon className="w-full h-full object-cover" />,
        health: {
            status: 'recovered',
            breached: 0,
            recovered: 1,
            total: 1,
        },
    },
    render: HealthDonutSizesTemplate,
};

// Basic example with Lambda icon
export const WithLambdaIcon: Story = {
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 50, // 5%
            errors4xx: 100, // 10%
        },
        size: 40,
        icon: <LambdaIcon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// High traffic with Load Balancer icon
export const LoadBalancerHighTraffic: Story = {
    args: {
        metrics: {
            requests: 10000,
            faults5xx: 50, // 0.5%
            errors4xx: 200, // 2%
        },
        size: 40,
        icon: <LoadBalancerIcon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// Critical errors with EC2 icon
export const EC2HighErrors: Story = {
    name: 'EC2 High Errors',
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 300, // 30%
            errors4xx: 200, // 20%
        },
        size: 40,
        icon: <Ec2Icon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// High throttling with ECS icon
export const ECSHighThrottling: Story = {
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 20, // 2%
            errors4xx: 50, // 5%
        },
        size: 40,
        icon: <EcsIcon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// Client errors with EKS icon
export const EKSClientErrors: Story = {
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 30, // 3%
            errors4xx: 450, // 45%
        },
        size: 40,
        icon: <EksIcon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// K8s with moderate errors
export const K8sModerateErrors: Story = {
    name: 'Kubernetes Moderate Errors',
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 50, // 5%
            errors4xx: 100, // 10%
        },
        size: 40,
        icon: <K8sIcon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// Group icon with mixed errors
export const GroupMixedErrors: Story = {
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 50, // 5%
            errors4xx: 100, // 10%
        },
        size: 40,
        icon: <ApplicationIcon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// Perfect health with Load Balancer
export const LoadBalancerPerfectHealth: Story = {
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 0,
            errors4xx: 0,
        },
        size: 40,
        icon: <LoadBalancerIcon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// Low traffic with Lambda
export const LambdaLowTraffic: Story = {
    args: {
        metrics: {
            requests: 10,
            faults5xx: 1, // 10%
            errors4xx: 2, // 20%
        },
        size: 40,
        icon: <LambdaIcon className="w-full h-full object-cover" />,
    },
    render: HealthDonutTemplate,
};

// No icon example
export const NoIcon: Story = {
    args: {
        metrics: {
            requests: 1000,
            faults5xx: 50,
            errors4xx: 100,
        },
        size: 40,
    },
    render: HealthDonutTemplate,
};
