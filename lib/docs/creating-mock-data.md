# Creating Mock Data for Celestial Component

This guide explains how to create and structure mock data for the Celestial component, which visualizes hierarchical infrastructure data with interactive nodes and edges.

## Table of Contents
- [Data Structure Overview](#data-structure-overview)
- [Node Types](#node-types)
- [Creating Nodes](#creating-nodes)
- [Creating Edges](#creating-edges)
- [Organizing with NodeMap](#organizing-with-nodemap)
- [Menu Items](#menu-items)
- [Alarm State Propagation](#alarm-state-propagation)
- [Layout Considerations](#layout-considerations)
- [Complete Example](#complete-example)

## Data Structure Overview

The Celestial component uses a hierarchical data structure to represent infrastructure components and their relationships. The main data structures are:

1. **Nodes**: Individual elements representing services or groups of services
2. **Edges**: Connections between nodes showing relationships
3. **NodeMap**: A collection of nodes and edges organized by group ID

### Key Types

```typescript
// Node with Celestial-specific properties
type Node<CelestialCardProps>

// Connection between nodes
type Edge

// Collection of nodes and edges for a specific group
type NodeMapItem = {
    nodes: Node<CelestialCardProps>[];
    edges: Edge[];
};

// Map of group IDs to their nodes and edges
type NodeMap = {
    [groupId: string]: NodeMapItem;
};
```

## Node Types

Celestial supports two main types of nodes:

1. **Regular Nodes**: Individual services (EC2 instances, Lambda functions, etc.)
2. **Group Nodes**: Containers that can hold other nodes (can be expanded to show contents)

## Creating Nodes

Each node requires the following properties:

```typescript
{
    id: string;                      // Unique identifier
    type: 'celestialNode';           // Always 'celestialNode' for Celestial component
    position: { x: number, y: number }; // Position in the flow
    data: {
        id: string;                  // Should match the node id
        title: string;               // Display name
        icon: React.ReactNode;       // Icon component
        subtitle: string;            // Additional information
        isGroup: boolean;            // Whether this is a group node
        isExpanded: boolean;         // Whether the group is expanded (for groups)
        isInstrumented: boolean;     // Whether the node has instrumentation
        isAlarming: boolean;         // Whether the node is in alarm state
        menuItems?: MenuItem[];      // Context menu items
        metrics?: {                  // Optional metrics data
            totalRequests: number;
            errors5xx: number;
            errors4xx: number;
            throttled: number;
        };
    }
}
```

### Example Node

```typescript
{
    id: 'node-001',
    type: 'celestialNode',
    position: { x: 50, y: 50 },
    data: {
        id: 'node-001',
        title: 'Web Server',
        icon: <Ec2Icon />,
        subtitle: 't3.large',
        isGroup: false,
        isExpanded: false,
        isInstrumented: true,
        isAlarming: false,
        menuItems: computeMenuItems,
        metrics: {
            totalRequests: 15000,
            errors5xx: 23,
            errors4xx: 156,
            throttled: 45,
        },
    },
}
```

## Creating Edges

Edges connect nodes and represent relationships. Each edge requires:

```typescript
{
    id: string;              // Unique identifier
    source: string;          // ID of source node
    target: string;          // ID of target node
    sourceHandle: string;    // Connection point on source ('source-right', etc.)
    targetHandle: string;    // Connection point on target ('target-left', etc.)
    type: string;            // Edge type ('smoothstep' recommended)
}
```

### Example Edge

```typescript
{
    id: 'edge-001-to-002',
    source: 'node-001',
    target: 'node-002',
    sourceHandle: 'source-right',
    targetHandle: 'target-left',
    type: 'smoothstep',
}
```

## Organizing with NodeMap

The `NodeMap` organizes nodes and edges by group ID:

1. **Root level**: Contains top-level groups
2. **Group level**: Contains nodes within a group
3. **Nested groups**: Use hyphenated IDs to indicate hierarchy (e.g., 'group-001-001')

### Naming Conventions

- **Group IDs**: Use 'group-XXX' format (e.g., 'group-001', 'group-001-001')
- **Node IDs**: Use 'node-XXX' format (e.g., 'node-001')
- **Edge IDs**: Use 'edge-XXX-to-YYY' format (e.g., 'edge-001-to-002')

## Menu Items

Define menu items for node context menus:

```typescript
type MenuItem = {
    id: string;      // Unique identifier
    label: string;   // Display text
};
```

You can create reusable menu item sets for different service types:

```typescript
const commonMenuItems: MenuItem[] = [
    { id: 'view', label: 'View Details' },
    { id: 'metrics', label: 'View Metrics' },
    { id: 'logs', label: 'View Logs' },
];

const computeMenuItems: MenuItem[] = [
    ...commonMenuItems,
    { id: 'ssh', label: 'SSH Connect' },
    { id: 'restart', label: 'Restart' },
];
```

## Alarm State Propagation

Alarm states propagate up the hierarchy. If any node in a group is alarming, the group will also show as alarming. Use the `updateAlarmStates` function to ensure proper propagation:

```typescript
const nodeMap = updateAlarmStates(initialNodeMap);
```

## Layout Considerations

For consistent node positioning:

1. Define constants for layout calculations:
   ```typescript
   const NODE_WIDTH = 255;
   const HORIZONTAL_PADDING = 45;
   ```

2. Position nodes with consistent spacing:
   ```typescript
   position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING) * index, y: 50 }
   ```

## Complete Example

Here's a simplified example of creating a NodeMap with two groups:

```typescript
const initialNodeMap: NodeMap = {
    // Root level with two groups
    root: {
        nodes: [
            {
                id: 'group-001',
                type: 'celestialNode',
                position: { x: 50, y: 50 },
                data: {
                    id: 'group-001',
                    title: 'Compute Services',
                    icon: <Ec2Icon />,
                    subtitle: 'AWS Compute Resources',
                    isGroup: true,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: groupMenuItems,
                },
            },
            {
                id: 'group-002',
                type: 'celestialNode',
                position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING), y: 50 },
                data: {
                    id: 'group-002',
                    title: 'Storage Services',
                    icon: <S3Icon />,
                    subtitle: 'AWS Storage Resources',
                    isGroup: true,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: groupMenuItems,
                },
            },
        ],
        edges: [],  // No edges at root level
    },

    // Compute Services group
    'group-001': {
        nodes: [
            {
                id: 'node-001',
                type: 'celestialNode',
                position: { x: 50, y: 50 },
                data: {
                    id: 'node-001',
                    title: 'Web Server',
                    icon: <Ec2Icon />,
                    subtitle: 't3.large',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: computeMenuItems,
                    metrics: {
                        totalRequests: 15000,
                        errors5xx: 23,
                        errors4xx: 156,
                        throttled: 45,
                    },
                },
            },
            {
                id: 'node-002',
                type: 'celestialNode',
                position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING), y: 50 },
                data: {
                    id: 'node-002',
                    title: 'Application Server',
                    icon: <Ec2Icon />,
                    subtitle: 'm5.xlarge',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: true,  // This node is alarming
                    menuItems: computeMenuItems,
                    metrics: {
                        totalRequests: 8500,
                        errors5xx: 1442,
                        errors4xx: 67,
                        throttled: 12,
                    },
                },
            },
        ],
        edges: [
            {
                id: 'edge-001-to-002',
                source: 'node-001',
                target: 'node-002',
                sourceHandle: 'source-right',
                targetHandle: 'target-left',
                type: 'smoothstep',
            },
        ],
    },
};

// Apply alarm state propagation
const nodeMap = updateAlarmStates(initialNodeMap);
```

## Best Practices

1. **Consistent IDs**: Follow the naming conventions for IDs
2. **Group Hierarchy**: Use hyphenated IDs to indicate hierarchy
3. **Alarm Propagation**: Always use `updateAlarmStates` on your final NodeMap
4. **Layout**: Use constants for consistent spacing
5. **Menu Items**: Create reusable menu item sets for different service types
6. **Metrics**: Include realistic metrics data for a better visualization

By following this guide, you can create rich, interactive visualizations of your infrastructure using the Celestial component.