# OpenSearch APM Topology - Service Topology Visualization Library

An open-source React library for visualizing application performance monitoring (APM) service topologies and dependencies.

## Installation

For consumers of this library:
```bash
npm install @ps48/apm-topology react react-dom
```

For library development:
```bash
npm install
```

## Usage

See the [main repository README](../README.md) for usage examples and the [example app](../example/) for a complete working implementation.

### Quick Reference

**Required Component:**
```tsx
import { CelestialMap, getIcon } from '@ps48/apm-topology';
```

**Data Structure:**
```tsx
const mapData = {
  map: {
    root: {
      nodes: [/* array of celestial nodes */],
      edges: [/* array of edges */],
    },
  },
};
```

**Node Structure:**
- `id` - Unique identifier
- `type` - Must be `'celestialNode'`
- `position` - `{ x: number, y: number }`
- `data` - Contains all node properties (title, subtitle, icon, health, metrics, etc.)

**Getting Icons:**
```tsx
icon: getIcon('AWS::Lambda')
icon: getIcon('AWS::DynamoDB')
icon: getIcon('AWS::APIGateway')
```

**Event Handlers:**
- `onDashboardClick` - "View insights" button clicks
- `onEdgeClick` - Edge/connection clicks
- `onDataFetch` - Data fetch events

## Development

### Build

```bash
npm run build          # Build the library
npm run watch          # Build in watch mode
```

### Testing

```bash
npm test               # Run tests with coverage
npm run test:watch     # Run tests in watch mode
npm run test:update-snapshots  # Update test snapshots
```

### Linting & Formatting

```bash
npm run lint           # Check linting
npm run lint:fix       # Fix linting issues
npm run prettier       # Check formatting
npm run prettier:fix   # Fix formatting
```

### Storybook

```bash
npm run storybook      # Start storybook dev server
npm run storybook:build  # Build storybook
```

### Bundle Analysis

```bash
npm run bundle:analyzer           # Visualize bundle
npm run bundle:analyzer:network   # Network visualization
npm run bundle:analyzer:sunburst  # Sunburst visualization
```

## Package Structure

This package is configured as a library:
- Generates TypeScript declaration files (.d.ts)
- Provides both ESM and CommonJS outputs
- Entry points configured in package.json:
  - `exports` for modern runtimes
  - `main` for legacy runtimes
- Compiled files (.js, .d.ts, .js.map) included in dist directory

## Library Usage

The library exports React components for building service topology visualizations.

```typescript
import { Celestial, CelestialMapWidget } from '@ps48/apm-topology';
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **@xyflow/react** - Flow diagram rendering
- **@dagrejs/dagre** - Graph layout algorithm
- **Vite** - Build tool
- **Vitest** - Testing framework
- **Storybook** - Component documentation

## Contributing

1. Make changes to source files in `src/`
2. Run tests: `npm test`
3. Run linting: `npm run lint`
4. Build the package: `npm run build`

## License

Apache-2.0
