# Using Storybook with APM Celestial

This guide explains how to use Storybook to develop and test components in the APM Celestial package.

## Getting Started

Storybook provides an isolated environment to develop and showcase UI components. Before running Storybook, you need to build the package first:

```bash
brazil-build
```

Then, to start the Storybook development server:

```bash
brazil-build storybook
```

This will launch Storybook at [http://localhost:6006](http://localhost:6006) by default.

## Story Structure

Stories in APM Celestial follow the Component Story Format (CSF). Each story file exports a default object that defines metadata about the component and one or more named exports that define individual stories.

### Basic Structure

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

// Component metadata
const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
};

export default meta;

// Define the Story type
type Story = StoryObj<typeof MyComponent>;

// Individual stories
export const Default: Story = {
  args: {
    // Component props go here
  },
};
```

## Celestial Component Stories

The Celestial component requires special setup because it uses ReactFlow:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from '@xyflow/react';
import { Celestial } from './Celestial';
import type { CelestialMapProps } from './types';

const meta: Meta<typeof Celestial> = {
  title: 'Components/Celestial/Map',
  component: Celestial,
};

export default meta;

type Story = StoryObj<typeof Celestial>;

// Template that wraps Celestial with ReactFlowProvider
const CelestialTemplate = (props: CelestialMapProps) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>
        <Celestial {...props} />
      </ReactFlowProvider>
    </div>
  );
};

// Story using the template
export const Plain: Story = {
  render: CelestialTemplate,
  args: {
    map: {
      root: {
        nodes: [...],
        edges: [...],
      },
    },
  },
};
```

## Using Fixtures

APM Celestial includes fixture files to provide test data for stories:

```typescript
import { createInitialNodes } from './fixtures/basic.fixture';
import { nodeMap } from './fixtures/groups.fixture';

// Use fixtures in stories
export const Plain: Story = {
  render: CelestialTemplate,
  args: {
    map: {
      root: {
        nodes: createInitialNodes(20), // Creates 20 test nodes
        edges: [],
      },
    },
  },
};

export const Groups: Story = {
  render: CelestialTemplate,
  args: {
    map: nodeMap, // Pre-configured node map with groups
  },
};
```

## Available Fixtures

### basic.fixture.ts

Provides utility functions to create basic test nodes:

- `createInitialNodes(count)`: Creates a specified number of test nodes

### groups.fixture.ts

Provides pre-configured node maps with group hierarchies:

- `nodeMap`: A complete node map with nested groups for testing navigation

## Controls and Interactions

Storybook provides controls to manipulate component props in real-time. For Celestial components, you can:

1. Modify node properties
2. Test navigation between different levels
3. Experiment with different layouts

## Testing in Storybook

You can use Storybook's interaction testing capabilities to test component behavior:

```typescript
export const WithInteractions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Simulate user interactions
    await userEvent.click(canvas.getByText('Group Node'));
  },
};
```

## Building Storybook for Deployment

To build a static version of Storybook for deployment:

```bash
brazil-build storybook:build
```

This will create a static build in the `build/storybook` directory that can be deployed to any static hosting service.

## Best Practices

1. **Create stories for each component variant**: Show different states and configurations
2. **Use args for dynamic controls**: Make props controllable via Storybook controls
3. **Document component usage**: Add comments and descriptions to help other developers
4. **Test edge cases**: Create stories that test boundary conditions
5. **Use play functions**: Test interactive behaviors with play functions