# Storybook Guide: Creating Nested Groups and Connections in Celestial

This guide is designed to help you quickly set up or modify Storybook stories for the Celestial component, with a focus on creating nested groups and connections between nodes.

## Quick Start

1. **Build the package first**:
   ```bash
   brazil-build
   ```

2. **Launch Storybook**:
   ```bash
   brazil-build storybook
   ```

## Creating a New Story

### Step 1: Create a new fixture file

Create a new file in `src/APMCelestial/fixtures/` (e.g., `nested-groups.fixture.ts`):

```typescript
import { NodeMap } from '../types';
import { MenuItem } from '../components/CelestialCard';

// Constants for layout
const NODE_WIDTH = 255;
const HORIZONTAL_PADDING = 45;
const VERTICAL_PADDING = 100;

// Menu items
const groupMenuItems: MenuItem[] = [
    { id: 'view', label: 'View Details' },
    { id: 'metrics', label: 'View Metrics' },
];

const serviceMenuItems: MenuItem[] = [
    { id: 'view', label: 'View Details' },
    { id: 'metrics', label: 'View Metrics' },
    { id: 'logs', label: 'View Logs' },
];

// Create the node map with nested groups
export const nestedGroupsMap: NodeMap = {
    // Root level - contains top-level groups
    root: {
        nodes: [
            // First top-level group
            {
                id: 'group-001',
                type: 'celestialNode',
                position: { x: 50, y: 50 },
                data: {
                    id: 'group-001',
                    title: 'Frontend Services',
                    subtitle: 'User-facing components',
                    isGroup: true,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: groupMenuItems,
                },
            },
            // Second top-level group
            {
                id: 'group-002',
                type: 'celestialNode',
                position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING), y: 50 },
                data: {
                    id: 'group-002',
                    title: 'Backend Services',
                    subtitle: 'Data processing components',
                    isGroup: true,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: groupMenuItems,
                },
            },
        ],
        // Connection between top-level groups
        edges: [
            {
                id: 'edge-group001-to-group002',
                source: 'group-001',
                target: 'group-002',
                sourceHandle: 'source-right',
                targetHandle: 'target-left',
                type: 'smoothstep',
            },
        ],
    },

    // First top-level group contents
    'group-001': {
        nodes: [
            // Nested group inside the first top-level group
            {
                id: 'group-001-001',
                type: 'celestialNode',
                position: { x: 50, y: 50 },
                data: {
                    id: 'group-001-001',
                    title: 'Web Tier',
                    subtitle: 'Web servers and load balancers',
                    isGroup: true,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: groupMenuItems,
                },
            },
            // Regular node inside the first top-level group
            {
                id: 'node-001-002',
                type: 'celestialNode',
                position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING), y: 50 },
                data: {
                    id: 'node-001-002',
                    title: 'API Gateway',
                    subtitle: 'API management',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: serviceMenuItems,
                    metrics: {
                        totalRequests: 12500,
                        errors5xx: 15,
                        errors4xx: 120,
                        throttled: 30,
                    },
                },
            },
        ],
        // Connection between nodes in the first top-level group
        edges: [
            {
                id: 'edge-group001001-to-node001002',
                source: 'group-001-001',
                target: 'node-001-002',
                sourceHandle: 'source-right',
                targetHandle: 'target-left',
                type: 'smoothstep',
            },
        ],
    },

    // Nested group contents (Web Tier)
    'group-001-001': {
        nodes: [
            // Nodes inside the nested group
            {
                id: 'node-001-001-001',
                type: 'celestialNode',
                position: { x: 50, y: 50 },
                data: {
                    id: 'node-001-001-001',
                    title: 'Load Balancer',
                    subtitle: 'ALB',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: serviceMenuItems,
                    metrics: {
                        totalRequests: 18000,
                        errors5xx: 5,
                        errors4xx: 85,
                        throttled: 0,
                    },
                },
            },
            {
                id: 'node-001-001-002',
                type: 'celestialNode',
                position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING), y: 50 },
                data: {
                    id: 'node-001-001-002',
                    title: 'Web Server 1',
                    subtitle: 't3.large',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: true, // This node is alarming
                    menuItems: serviceMenuItems,
                    metrics: {
                        totalRequests: 9000,
                        errors5xx: 450,
                        errors4xx: 65,
                        throttled: 0,
                    },
                },
            },
            {
                id: 'node-001-001-003',
                type: 'celestialNode',
                position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING) * 2, y: 50 },
                data: {
                    id: 'node-001-001-003',
                    title: 'Web Server 2',
                    subtitle: 't3.large',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: serviceMenuItems,
                    metrics: {
                        totalRequests: 9000,
                        errors5xx: 12,
                        errors4xx: 78,
                        throttled: 0,
                    },
                },
            },
        ],
        // Connections between nodes in the nested group
        edges: [
            {
                id: 'edge-001-001-001-to-001-001-002',
                source: 'node-001-001-001',
                target: 'node-001-001-002',
                sourceHandle: 'source-right',
                targetHandle: 'target-left',
                type: 'smoothstep',
            },
            {
                id: 'edge-001-001-001-to-001-001-003',
                source: 'node-001-001-001',
                target: 'node-001-001-003',
                sourceHandle: 'source-right',
                targetHandle: 'target-left',
                type: 'smoothstep',
            },
        ],
    },

    // Second top-level group contents
    'group-002': {
        nodes: [
            {
                id: 'node-002-001',
                type: 'celestialNode',
                position: { x: 50, y: 50 },
                data: {
                    id: 'node-002-001',
                    title: 'Database',
                    subtitle: 'RDS MySQL',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: serviceMenuItems,
                    metrics: {
                        totalRequests: 7500,
                        errors5xx: 8,
                        errors4xx: 25,
                        throttled: 5,
                    },
                },
            },
            {
                id: 'group-002-002',
                type: 'celestialNode',
                position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING), y: 50 },
                data: {
                    id: 'group-002-002',
                    title: 'Processing Services',
                    subtitle: 'Batch and stream processing',
                    isGroup: true,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: groupMenuItems,
                },
            },
        ],
        edges: [
            {
                id: 'edge-node002001-to-group002002',
                source: 'node-002-001',
                target: 'group-002-002',
                sourceHandle: 'source-right',
                targetHandle: 'target-left',
                type: 'smoothstep',
            },
        ],
    },

    // Nested group in the second top-level group
    'group-002-002': {
        nodes: [
            {
                id: 'node-002-002-001',
                type: 'celestialNode',
                position: { x: 50, y: 50 },
                data: {
                    id: 'node-002-002-001',
                    title: 'Batch Processor',
                    subtitle: 'Lambda',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: serviceMenuItems,
                    metrics: {
                        totalRequests: 3500,
                        errors5xx: 45,
                        errors4xx: 12,
                        throttled: 8,
                    },
                },
            },
            {
                id: 'node-002-002-002',
                type: 'celestialNode',
                position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING), y: 50 },
                data: {
                    id: 'node-002-002-002',
                    title: 'Stream Processor',
                    subtitle: 'Kinesis',
                    isGroup: false,
                    isExpanded: false,
                    isInstrumented: true,
                    isAlarming: false,
                    menuItems: serviceMenuItems,
                    metrics: {
                        totalRequests: 5200,
                        errors5xx: 18,
                        errors4xx: 35,
                        throttled: 12,
                    },
                },
            },
        ],
        edges: [
            {
                id: 'edge-002-002-001-to-002-002-002',
                source: 'node-002-002-001',
                target: 'node-002-002-002',
                sourceHandle: 'source-right',
                targetHandle: 'target-left',
                type: 'smoothstep',
            },
        ],
    },
};
```

### Step 2: Create a new story

Add a new story to `src/APMCelestial/Celestial.stories.tsx`:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from '@xyflow/react';
import { Celestial } from './Celestial';
import type { CelestialMapProps } from './types';
import { nestedGroupsMap } from './fixtures/nested-groups.fixture';

const meta: Meta<typeof Celestial> = {
    title: 'Components/Celestial/NestedGroups',
    component: Celestial,
};

export default meta;

type Story = StoryObj<typeof Celestial>;

const CelestialTemplate = (props: CelestialMapProps) => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlowProvider>
                <Celestial {...props} />
            </ReactFlowProvider>
        </div>
    );
};

export const NestedGroups: Story = {
    render: CelestialTemplate,
    args: {
        map: nestedGroupsMap,
    },
};
```

## Modifying an Existing Story

To modify an existing story:

1. **Locate the fixture file** that contains the node map (usually in `src/APMCelestial/fixtures/`)
2. **Modify the node map** to add or change groups and connections
3. **Rebuild and restart Storybook** to see your changes

## Node Properties Explained

Each node in the Celestial component has several properties that control its appearance and behavior:

### Base Node Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier for the node. Must match the key in the NodeMap for group nodes. |
| `type` | string | Always set to `'celestialNode'` for standard nodes or `'stackedCelestialNode'` for stacked nodes. |
| `position` | object | The x,y coordinates of the node in the flow (`{ x: number, y: number }`). |

### Node Data Properties

The `data` object contains the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Should match the node's `id` property for consistency. |
| `title` | string | The main display name of the node. |
| `subtitle` | string | Secondary text displayed below the title (e.g., instance type, service description). |
| `icon` | ReactNode | Optional icon component to display in the node. |
| `isGroup` | boolean | **IMPORTANT: Currently not functional.** The system determines if a node is a group based on whether its ID exists as a key in the NodeMap. Always set to `true` for nodes that should be groups, but be aware that this property alone doesn't make a node a group. |
| `isExpanded` | boolean | **IMPORTANT: Currently not functional.** The expansion state is controlled by the navigation system, not this property. |
| `isInstrumented` | boolean | Indicates if the node has instrumentation (affects visual indicators). |
| `isAlarming` | boolean | Indicates if the node is in an alarm state (shows red indicators and propagates up the hierarchy). |
| `menuItems` | MenuItem[] | Array of menu items for the node's context menu. |
| `metrics` | object | Optional metrics data to display in the node: `{ totalRequests, errors5xx, errors4xx, throttled }`. |

## Key Concepts for Nested Groups

### 1. Group Hierarchy

Groups are organized in a hierarchical structure:

- **Root level**: Contains top-level groups
- **First level**: Groups directly under root (e.g., `group-001`)
- **Second level**: Groups nested inside first-level groups (e.g., `group-001-001`)
- **Third level**: Groups nested inside second-level groups (e.g., `group-001-001-001`)

### 2. ID Naming Convention

Use a consistent naming convention for IDs:

- **Groups**: `group-XXX` or `group-XXX-YYY` for nested groups
- **Nodes**: `node-XXX` or `node-XXX-YYY-ZZZ` for nodes in nested groups
- **Edges**: `edge-[source-id]-to-[target-id]`

### 3. NodeMap Structure

The NodeMap is an object where:

- Each key is a group ID
- Each value is an object with `nodes` and `edges` arrays
- The special key `root` represents the top level

**IMPORTANT:** The NodeMap structure is what actually determines if a node is a group, not the `isGroup` property. If a node's ID exists as a key in the NodeMap, the system treats it as a group that can be navigated into, regardless of the `isGroup` property value (though you should still set `isGroup: true` for consistency).

```typescript
{
    root: { nodes: [...], edges: [...] },
    'group-001': { nodes: [...], edges: [...] },
    'group-001-001': { nodes: [...], edges: [...] },
    // ...
}
```

### 4. Connections Between Groups

To create connections between groups:

- Add an edge in the parent group's `edges` array
- Use the group IDs as `source` and `target`
- Use appropriate handle positions (`source-right`, `target-left`, etc.)

```typescript
{
    id: 'edge-group001-to-group002',
    source: 'group-001',
    target: 'group-002',
    sourceHandle: 'source-right',
    targetHandle: 'target-left',
    type: 'smoothstep',
}
```

### 5. Alarm State Propagation

Alarm states automatically propagate up the hierarchy:

- If a node is alarming, its parent group will also show as alarming
- This propagation happens automatically in the component

## Important Implementation Notes

1. **Group Determination**: A node is treated as a group if and only if its ID exists as a key in the NodeMap, regardless of the `isGroup` property. The `isGroup` property should still be set to `true` for visual consistency, but it doesn't control the grouping behavior.

2. **Expansion State**: The `isExpanded` property is currently not functional. The expansion state is controlled by the navigation system when users click on a group node.

3. **Navigation System**: When a user clicks on a group node, the system:
   - Looks up the group's ID in the NodeMap
   - Replaces the current view with the nodes and edges from that group
   - Adds a breadcrumb to the navigation trail

## Tips for Creating Effective Visualizations

1. **Consistent Spacing**: Use constants for node positioning to maintain consistent spacing
   ```typescript
   const NODE_WIDTH = 255;
   const HORIZONTAL_PADDING = 45;
   ```

2. **Logical Grouping**: Group related services together to create a meaningful hierarchy

3. **Meaningful Connections**: Create edges that represent actual data or control flow

4. **Depth Limitation**: Try to limit hierarchy depth to 3-4 levels for better usability

5. **Group Naming**: Use descriptive titles for groups to make navigation intuitive

## Debugging

If your visualization doesn't appear as expected:

1. Check the browser console for errors
2. Verify that all node IDs are unique
3. Ensure that group IDs in the NodeMap match the node IDs
4. Confirm that all required node properties are set
5. Validate that edge source and target IDs exist in the nodes array

## Example: Adding a New Nested Group

To add a new nested group to an existing fixture:

1. **Add the group node** to its parent's nodes array
   ```typescript
   {
       id: 'group-001-002',
       type: 'celestialNode',
       position: { x: 50 + (NODE_WIDTH + HORIZONTAL_PADDING) * 2, y: 50 },
       data: {
           id: 'group-001-002',
           title: 'New Nested Group',
           subtitle: 'Description',
           isGroup: true,
           isExpanded: false,
           isInstrumented: true,
           isAlarming: false,
           menuItems: groupMenuItems,
       },
   }
   ```

2. **Add a new entry** to the NodeMap for the group's contents
   ```typescript
   'group-001-002': {
       nodes: [
           // Nodes inside the new nested group
       ],
       edges: [
           // Edges inside the new nested group
       ],
   }
   ```

3. **Add connections** to the new group in the parent's edges array
   ```typescript
   {
       id: 'edge-node001002-to-group001002',
       source: 'node-001-002',
       target: 'group-001-002',
       sourceHandle: 'source-right',
       targetHandle: 'target-left',
       type: 'smoothstep',
   }
   ```

## Conclusion

By following this guide, you can create rich, interactive visualizations with nested groups and connections in the Celestial component. The key is to maintain a consistent structure in your NodeMap and follow the naming conventions for IDs.

Remember to rebuild and restart Storybook after making changes to see your updates in action.