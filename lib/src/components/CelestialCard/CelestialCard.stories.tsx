import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@shared/resources/services';
import { CelestialStateProvider } from '@shared/contexts/CelestialStateContext';
import { CelestialNodeActionsProvider } from '@shared/contexts/NodeActionsContext';
import { ReactFlowProvider } from '@xyflow/react';
import { CelestialCard } from './CelestialCard';
import { CelestialCardProps } from './types';

const meta: Meta<typeof CelestialCard> = {
    title: 'Components/Celestial/CelestialCard',
    component: CelestialCard,
    argTypes: {
        isInstrumented: { control: 'boolean' },
        isGroup: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<typeof CelestialCard>;

const CelestialCardTemplate = (props: CelestialCardProps) => (
    <div className="flex items-center justify-center min-h-screen">
        <ReactFlowProvider>
            <CelestialStateProvider>
                <CelestialNodeActionsProvider>
                    <CelestialCard {...props} />
                </CelestialNodeActionsProvider>
            </CelestialStateProvider>
        </ReactFlowProvider>
    </div>
);

// Helper function to create default metrics
const defaultMetrics = {
    requests: 100,
    faults5xx: 0,
    errors4xx: 0,
};

// Create a story for each icon
export const APIGateway: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'api-gateway-node',
        title: 'API Gateway',
        keyAttributes: { foo: 'bar' },
        subtitle: 'REST API Endpoint',
        icon: <Icons.ApiGatewayIcon />,
        metrics: defaultMetrics,
        isInstrumented: true,
    },
};

export const AppMesh: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'app-mesh-node',
        title: 'App Mesh',
        subtitle: 'Service Mesh',
        keyAttributes: { foo: 'bar' },
        icon: <Icons.AppMeshIcon />,
        metrics: defaultMetrics,
        isInstrumented: true,
    },
};

export const AppRunner: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'app-runner-node',
        title: 'App Runner',
        subtitle: 'Container Service',
        keyAttributes: { foo: 'bar' },
        icon: <Icons.AppRunnerIcon />,
        metrics: defaultMetrics,
        isInstrumented: true,
    },
};

export const AppSync: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'app-sync-node',
        title: 'AppSync',
        subtitle: 'GraphQL API',
        keyAttributes: { foo: 'bar' },
        icon: <Icons.AppSyncIcon />,
        metrics: defaultMetrics,
        isInstrumented: true,
    },
};

export const AutoScaling: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'auto-scaling-node',
        title: 'Auto Scaling',
        subtitle: 'EC2 Auto Scaling',
        keyAttributes: { foo: 'bar' },
        icon: <Icons.AutoScalingIcon />,
        metrics: defaultMetrics,
        isInstrumented: true,
    },
};

export const Client: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'client-node',
        title: 'Client',
        subtitle: 'External Client',
        keyAttributes: { foo: 'bar' },
        icon: <Icons.ClientIcon />,
        metrics: defaultMetrics,
        isInstrumented: true,
    },
};

export const CloudFormation: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'cloud-formation-node',
        title: 'CloudFormation',
        subtitle: 'Infrastructure as Code',
        keyAttributes: { foo: 'bar' },
        icon: <Icons.CloudFormationIcon />,
        metrics: defaultMetrics,
        isInstrumented: true,
    },
};

// Continue for each icon...

// Example with alarming state
export const AlarmingService: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'service-node',
        title: 'Alarming Service',
        subtitle: 'Service with Errors',
        keyAttributes: { foo: 'bar' },
        icon: <Icons.ServiceIcon />,
        metrics: {
            ...defaultMetrics,
            faults5xx: 5,
        },
        health: {
            status: 'breached',
            breached: 1,
            recovered: 0,
            total: 1,
        },
        isInstrumented: true,
    },
};

// Example of an uninstrumented service
export const UninstrumentedService: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'service-lens-node',
        title: 'Uninstrumented Service',
        subtitle: 'No Metrics Available',
        keyAttributes: { foo: 'bar' },
        icon: <Icons.ServiceLensUnknownNodeIcon />,
        isInstrumented: false,
    },
};

// Example of a group
export const GroupNode: Story = {
    render: CelestialCardTemplate,
    args: {
        id: 'service-group-node',
        title: 'Service Group',
        keyAttributes: { foo: 'bar' },
        subtitle: 'Collection of Services',
        icon: <Icons.ApplicationIcon />,
        isGroup: true,
        isInstrumented: true,
    },
};

// Grid view of all icons
export const AllIcons: Story = {
    render: () => (
        <div className="grid grid-cols-4 gap-4 p-4">
            <ReactFlowProvider>
                <CelestialStateProvider>
                    <CelestialNodeActionsProvider>
                        {Object.entries(Icons).map(([name, Icon]) => (
                            <CelestialCard
                                id={name}
                                key={name}
                                title={name.replace('Icon', '')}
                                keyAttributes={{ Name: name }}
                                subtitle={`AWS ${name.replace('Icon', '')}`}
                                icon={<Icon />}
                                metrics={defaultMetrics}
                                isInstrumented={true}
                            />
                        ))}
                    </CelestialNodeActionsProvider>
                </CelestialStateProvider>
            </ReactFlowProvider>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Displays all available AWS service icons in a grid layout.',
            },
        },
    },
};

// Add more stories for remaining icons following the same pattern...
