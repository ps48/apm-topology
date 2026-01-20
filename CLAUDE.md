# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the OpenSearch APM Topology library - a standalone React library for visualizing application performance monitoring (APM) service topologies. The library was extracted from OpenSearch Dashboards APM plugin and provides interactive service maps using React Flow and dagre layout algorithms.

## Repository Structure

```
apm-topology/
├── lib/                    # Main library source code
│   ├── src/
│   │   ├── Celestial.tsx              # Core topology component (requires provider)
│   │   ├── CelestialMap.tsx           # Wrapper with React Flow provider (USE THIS)
│   │   ├── CelestialMapWidget.tsx     # Widget variant
│   │   ├── components/                # UI components (nodes, cards, controls, etc.)
│   │   ├── shared/
│   │   │   ├── hooks/                 # React hooks for layout, state, interactions
│   │   │   ├── contexts/              # React contexts (state, actions)
│   │   │   ├── strategies/            # Node collapse/expand strategies
│   │   │   ├── utils/                 # Utilities (icons, colors, graph relationships)
│   │   │   ├── constants/             # Constants (icons, colors)
│   │   │   └── resources/             # SVG icons and assets
│   │   └── fixtures/                  # Test fixtures and mock data
│   ├── dist/               # Build output (ESM + CJS)
│   ├── .storybook/         # Storybook configuration
│   └── package.json        # Library dependencies and scripts
├── example/                # Example React app demonstrating library usage
└── package.json            # Root package.json for GitHub dependencies
```

## Essential Development Commands

### Library Development (run from `lib/` directory)

```bash
cd lib/

# Installation
npm install

# Build
npm run build                    # Build library (ESM + CJS)
npm run watch                    # Build in watch mode

# Testing
npm test                         # Run tests with coverage
npm run test:watch               # Run tests in watch mode
npm run test:update-snapshots    # Update test snapshots

# Code Quality
npm run lint                     # Check linting (ESLint)
npm run lint:fix                 # Fix linting issues
npm run prettier                 # Check formatting
npm run prettier:fix             # Fix formatting
npm run types:check              # TypeScript type checking

# Storybook
npm run storybook                # Start Storybook dev server on port 6006
npm run storybook:build          # Build Storybook for deployment

# Bundle Analysis
npm run bundle:analyzer          # Visualize bundle size
npm run bundle:analyzer:network  # Network visualization
npm run bundle:analyzer:sunburst # Sunburst visualization
```

### Example App (run from `example/` directory)

```bash
cd example/

npm install
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Full Development Workflow

When making library changes and testing in the example app:

```bash
# Terminal 1: Build library in watch mode
cd lib/
npm run watch

# Terminal 2: Run example app
cd example/
npm run dev
```

## Architecture

### Component Hierarchy

**CelestialMap** (entry point - provides React Flow context)
  └─ **Celestial** (main topology component)
      ├─ **MapContainer** (React Flow wrapper)
      │   ├─ **CelestialNode** (custom node type)
      │   │   └─ **CelestialCard** (node visualization)
      │   │       ├─ **HealthDonut** (health status indicator)
      │   │       ├─ **SliStatusIcon** (SLI status badge)
      │   │       └─ **Labels** (metrics display)
      │   ├─ **BreadcrumbTrail** (navigation)
      │   ├─ **CelestialControls** (zoom/pan controls)
      │   ├─ **Legend** (service type legend)
      │   └─ **ContextMenu** (right-click menu)
      └─ Providers:
          ├─ **CelestialNodeActionsProvider** (node interaction handlers)
          └─ **CelestialStateProvider** (global state)

### Key Hooks

- **use-map-initialization.hook.ts**: Core hook that processes raw node/edge data, applies node aggregation (groups siblings), and handles "top N" filtering to reduce visual clutter
- **use-celestial-layout.hook.ts**: Wraps dagre layout algorithm, calculates node positions using hierarchical layout with configurable spacing
- **use-celestial-nodes.hook.ts**: Transforms raw data into CelestialNode format with proper data structure
- **use-focus-on-nodes.hook.ts**: Highlights specific nodes while fading others, used for breadcrumb navigation
- **use-fit-view-with-delay.hook.ts**: Manages viewport fitting with delay to ensure layout is complete

### Strategies

Located in `lib/src/shared/strategies/`, these hooks implement node expansion/collapse behavior:
- **use-collapse-descendants.hook.ts**: Collapses all descendant nodes
- **use-collapse-siblings.hook.ts**: Collapses sibling nodes into aggregate stacks
- **use-expand-children.hook.ts**: Expands collapsed child nodes
- **use-expand-siblings.hook.ts**: Expands collapsed sibling stacks

### Data Flow

1. **Input**: Consumer passes `map: { root: { nodes, edges } }` to `CelestialMap`
2. **Initialization**: `useMapInitialization` processes nodes:
   - Applies "top N" filtering to limit visible nodes
   - Aggregates sibling nodes to reduce clutter
   - Applies focus highlighting if `nodesInFocus` provided
3. **Layout**: `useCelestialLayout` calculates positions using dagre algorithm
4. **Rendering**: React Flow renders nodes using custom `CelestialNode` component
5. **Interaction**: User clicks trigger actions (onDashboardClick, onEdgeClick, onDataFetch)

## Critical Implementation Details

### Always Use CelestialMap, Not Celestial

The `Celestial` component requires React Flow's provider context. Always use `CelestialMap`:

```tsx
// ✅ CORRECT
import { CelestialMap } from '@ps48/apm-topology';
<CelestialMap map={{ root: { nodes, edges } }} />

// ❌ WRONG - will cause "zustand provider" error
import { Celestial } from '@ps48/apm-topology';
<Celestial map={{ root: { nodes, edges } }} />
```

### Node Structure Requirements

Every node MUST have this exact structure:

```tsx
{
  id: 'unique-id',           // Required: unique identifier
  type: 'celestialNode',     // Required: must be 'celestialNode'
  position: { x: 100, y: 100 }, // Required: x, y coordinates
  data: {                    // Required: all node properties
    id: 'unique-id',
    title: 'Service Name',
    subtitle: 'AWS::ServiceType',
    icon: getIcon('AWS::ServiceType'),  // Use getIcon() helper
    isGroup: false,
    keyAttributes: {},
    isInstrumented: true,
    health: {
      breached: 0,
      recovered: 0,
      total: 0,
      status: 'ok' | 'recovered' | 'breached',
    },
    metrics: {
      requests: 1000,
      faults5xx: 10,
      errors4xx: 20,
    },
  },
}
```

### Icon Usage

Icons must be retrieved using `getIcon()` helper from `lib/src/shared/utils/icons.utils.ts`:

```tsx
import { getIcon } from '@ps48/apm-topology';

icon: getIcon('AWS::Lambda')
icon: getIcon('AWS::DynamoDB')
icon: getIcon('AWS::APIGateway')
```

Available AWS service types are defined in `lib/src/shared/constants/icons.constants.ts` (40+ icons).

### TypeScript Path Aliases

The library uses these path aliases (configured in `tsconfig.json`):

```tsx
import { Component } from '@components/Component';
import { hook } from '@shared/hooks/hook';
import { util } from '@shared/utils/util';
import { fixture } from '@fixtures/fixture';
```

When adding new files, use these aliases consistently.

## Build Configuration

### Library Build (Vite)

The library uses Vite with these key plugins:
- **vite-plugin-dts**: Generates TypeScript declarations (.d.ts files)
- **cssInjectedByJs**: Injects CSS into JS bundle (no separate CSS file)
- **vite-plugin-svgr**: Imports SVGs as React components
- **vite-tsconfig-paths**: Resolves TypeScript path aliases
- **@tailwindcss/vite**: Processes Tailwind CSS at build time

Output: `lib/dist/index.js` (ESM), `lib/dist/index.cjs` (CJS), `lib/dist/index.d.ts` (types)

### Package Exports

```json
{
  "main": "./dist/index.cjs",     // CommonJS entry
  "module": "./dist/index.js",    // ESM entry
  "types": "./dist/index.d.ts",   // Type definitions
  "exports": {
    "require": "./dist/index.cjs",
    "import": "./dist/index.js"
  }
}
```

## Testing

### Test Framework

- **Vitest**: Test runner with coverage via v8
- **@testing-library/react**: Component testing utilities
- **jsdom**: Browser environment simulation
- **vitest-canvas-mock**: Mocks HTML Canvas API

### Test Conventions

- Test files: `*.test.ts`, `*.test.tsx`
- Fixtures: `lib/src/fixtures/`
- Setup: `lib/src/test-utils/vitest.setup.ts`

### Running Specific Tests

```bash
# Run specific test file
npm test -- src/components/CelestialCard/CelestialCard.test.tsx

# Run tests matching pattern
npm test -- --grep "CelestialCard"

# Update snapshots
npm run test:update-snapshots
```

## Code Style

### Prettier Configuration

- **Print width**: 120 characters
- **Tab width**: 4 spaces (for .ts, .tsx, .js, .jsx)
- **Tab width**: 2 spaces (for .json, .yaml, .yml)
- **Single quotes**: true
- **Trailing commas**: all
- **Semicolons**: true

### Pre-commit Hooks

Husky and lint-staged are configured to run:
1. Prettier formatting
2. ESLint with `--max-warnings 0` (no warnings allowed)

Changes are automatically fixed before commit.

## Common Development Tasks

### Adding a New Component

1. Create component directory in `lib/src/components/ComponentName/`
2. Create component file: `ComponentName.tsx`
3. Create test file: `ComponentName.test.tsx`
4. Create story file: `ComponentName.stories.tsx` (optional)
5. Export from `lib/src/components/index.ts`
6. Export from `lib/src/index.ts` if public API

### Adding a New Hook

1. Create hook in `lib/src/shared/hooks/use-hook-name.hook.ts`
2. Create test: `lib/src/shared/hooks/use-hook-name.hook.test.ts`
3. Export from `lib/src/shared/hooks/index.ts` if needed
4. Export from `lib/src/index.ts` if public API

### Adding a New Icon

1. Add SVG to `lib/src/shared/resources/`
2. Add icon mapping in `lib/src/shared/constants/icons.constants.ts`
3. Icon automatically available via `getIcon('ServiceType')`

### Modifying Node Aggregation Logic

Node aggregation (sibling collapsing) is handled in:
- `lib/src/shared/hooks/use-map-initialization.hook.ts` (orchestration)
- `lib/src/shared/strategies/use-collapse-siblings.hook.ts` (collapse logic)
- `lib/src/shared/strategies/use-expand-siblings.hook.ts` (expand logic)
- `lib/src/shared/utils/raw-graph-relationships.utils.ts` (graph utilities)

### Working with Storybook

Stories are located alongside components with `.stories.tsx` extension. To add a story:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    // props
  },
};
```

## Troubleshooting

See `TROUBLESHOOTING.md` for comprehensive troubleshooting guide covering:
- Component rendering issues
- Data structure problems
- TypeScript errors
- Performance optimization
- Build issues

## Publishing

The library uses `prepublishOnly` script that runs build and tests before npm publish:

```bash
# Automatically runs: npm run build && npm run test
npm publish
```

The package is published to npm as `@ps48/apm-topology`.

## Key Dependencies

- **React 18**: Peer dependency (required by consumer)
- **@xyflow/react**: Flow diagram rendering engine
- **@dagrejs/dagre**: Hierarchical graph layout algorithm
- **ramda**: Functional programming utilities

## Distribution Strategy

**Git repository**: Contains source code only - NO dist files in version control
**Local development**: Uses npm tarball (`opensearch-apm-topology-1.0.0.tgz`) for realistic testing
**External users**: Install from GitHub Releases tarball attachment
**Future**: Will publish to npm registry for easier distribution

### Why This Approach?

- **Clean git history**: No generated files bloating commits or causing merge conflicts
- **GitHub Releases**: Professional distribution using GitHub's infrastructure
- **Tarball testing**: Local development uses same package format as production
- **Catches issues early**: Validates `files` field, entry points, and packaging before release

## Developer Workflow

### Making Changes and Testing Locally

From the lib directory:

```bash
cd lib/
npm run build && npm run pack:install
```

This command:
1. Builds the library (`npm run build`)
2. Creates tarball (`npm pack`)
3. Reinstalls in example app (`cd ../example && npm install`)

The example app will now use the freshly built tarball.

Alternatively, run individual commands:

```bash
cd lib/
npm run build       # Build the library
npm pack            # Create tarball
cd ../example/
npm install         # Install tarball in example app
npm run dev         # Start dev server
```

### Preparing a GitHub Release

1. **Update version** in `lib/package.json`

2. **Build and create tarball:**
   ```bash
   cd lib/
   npm run release:pack
   ```
   This creates `opensearch-apm-topology-{version}.tgz`

3. **Update example app** if version changed:
   Edit `example/package.json` to reference new version:
   ```json
   "@ps48/apm-topology": "file:../lib/opensearch-apm-topology-1.0.1.tgz"
   ```

4. **Create git tag:**
   ```bash
   git tag v1.0.1
   git push --tags
   ```

5. **Create GitHub Release:**
   - Go to: https://github.com/opensearch-project/apm-topology/releases/new
   - Select the tag (e.g., `v1.0.1`)
   - Upload `lib/opensearch-apm-topology-{version}.tgz` as a release asset
   - Document installation URL in release notes:
     ```
     npm install https://github.com/opensearch-project/apm-topology/releases/download/v1.0.1/opensearch-apm-topology-1.0.1.tgz
     ```

### Script Reference

**lib/package.json:**
- `npm run build` - Build library (TypeScript + Vite)
- `npm run pack` - Create tarball from current build
- `npm run pack:install` - Pack and install in example app
- `npm run release:pack` - Full build + pack (for releases)

## Important Notes

- **Tarball naming**: `opensearch-apm-topology-{version}.tgz` (no `@` in filename)
- **Version coupling**: When library version changes, update `example/package.json` dependency path
- **No dist in git**: The `dist/` directory is built locally but never committed
- **Tarballs ignored**: `*.tgz` files are in `.gitignore` and should not be committed
- The library injects CSS into JS (no separate CSS file to import)
- React Flow styles are imported in `Celestial.tsx`: `import '@xyflow/react/dist/style.css'`
- All node positions are calculated dynamically by dagre unless manually specified
- The "top N" feature limits visible nodes to improve performance (default: 20)
- Node aggregation automatically groups sibling nodes to reduce clutter
- All exports are in `lib/src/index.ts` - this is the public API
