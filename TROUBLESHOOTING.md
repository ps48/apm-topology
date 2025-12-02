# Troubleshooting Guide

Common issues and solutions when using the `@opensearch/apm-topology` library.

## Table of Contents
- [Installation Issues](#installation-issues)
- [Component Rendering Issues](#component-rendering-issues)
- [Data Structure Issues](#data-structure-issues)
- [TypeScript Issues](#typescript-issues)
- [Styling Issues](#styling-issues)
- [Performance Issues](#performance-issues)

## Installation Issues

### Missing Peer Dependencies

**Error:**
```
npm ERR! peer dep missing: react@^18.0.0
```

**Solution:**
The library requires React 18+ as a peer dependency. Install it explicitly:
```bash
npm install react@^18.3.1 react-dom@^18.3.1
```

### Vite Build Warnings

**Warning:**
```
The CJS build of Vite's Node API is deprecated
```

**Solution:**
This is a Vite warning and doesn't affect functionality. You can safely ignore it or update your vite.config.ts to use ESM format.

## Component Rendering Issues

### Error: "Seems like you have not used zustand provider as an ancestor"

**Cause:**
Using the `Celestial` component directly instead of `CelestialMap`.

**Solution:**
Always use `CelestialMap` as the top-level component, not `Celestial`:

```tsx
// ❌ Wrong - causes zustand provider error
import { Celestial } from '@opensearch/apm-topology';
<Celestial nodes={nodes} edges={edges} />

// ✅ Correct - CelestialMap provides the React Flow provider
import { CelestialMap } from '@opensearch/apm-topology';
<CelestialMap map={{ root: { nodes, edges } }} />
```

### Error: "can't access property 'X', node.data is undefined"

**Cause:**
Incorrect node structure - missing required `data` property.

**Solution:**
Nodes must follow this exact structure:

```tsx
{
  id: '1',                        // Required: unique identifier
  type: 'celestialNode',          // Required: must be 'celestialNode'
  position: { x: 100, y: 100 },   // Required: x, y coordinates
  data: {                         // Required: all node properties go here
    id: '1',
    title: 'Service Name',
    subtitle: 'AWS::ServiceType',
    icon: getIcon('AWS::ServiceType'),
    isGroup: false,
    keyAttributes: {},
    isInstrumented: true,
    health: {
      breached: 0,
      recovered: 0,
      total: 0,
      status: 'ok',  // 'ok' | 'recovered' | 'breached'
    },
    metrics: {
      requests: 1000,
      faults5xx: 10,
      errors4xx: 20,
    },
  },
}
```

### Empty Screen / No Nodes Visible

**Possible Causes:**
1. Incorrect data structure passed to `CelestialMap`
2. Nodes positioned outside viewport
3. Missing CSS imports

**Solutions:**

**Check data structure:**
```tsx
// ❌ Wrong structure
<CelestialMap nodes={nodes} edges={edges} />

// ✅ Correct structure
<CelestialMap map={{ root: { nodes, edges } }} />
```

**Verify node positions:**
Ensure nodes have reasonable x, y coordinates (e.g., 100-1000 range).

**Check container size:**
The parent container must have explicit height:
```css
.map-container {
  width: 100%;
  height: 600px; /* Explicit height required */
}
```

## Data Structure Issues

### Icons Not Displaying

**Cause:**
Setting `icon: null` instead of using the `getIcon()` helper.

**Solution:**
Import and use `getIcon()` for all service types:

```tsx
import { getIcon } from '@opensearch/apm-topology';

// ❌ Wrong - no icon displays
icon: null,

// ✅ Correct - displays appropriate AWS service icon
icon: getIcon('AWS::Lambda'),
icon: getIcon('AWS::DynamoDB'),
icon: getIcon('AWS::APIGateway'),
```

**Available Service Types:**
- `AWS::APIGateway` - API Gateway
- `AWS::Lambda` - Lambda functions
- `AWS::DynamoDB` - DynamoDB tables
- `AWS::RDS` - RDS databases
- `AWS::S3` - S3 buckets
- `AWS::SQS` - SQS queues
- `AWS::SNS` - SNS topics
- `AWS::CloudFront` - CloudFront distributions
- `AWS::ECS` - ECS services
- `AWS::EKS` - EKS clusters
- `AWS::EC2` - EC2 instances
- Plus 30+ more (see `lib/src/shared/constants/icons.constants.ts`)

### Health Status Not Showing Correctly

**Issue:**
Health indicators don't match the status.

**Solution:**
Ensure health status uses exact string values:

```tsx
health: {
  breached: 5,           // Number of breached SLIs
  recovered: 0,          // Number of recovered SLIs
  total: 8,              // Total SLIs monitored
  status: 'breached',    // Must be: 'ok' | 'recovered' | 'breached'
}
```

**Status Colors:**
- `'ok'` → Green border, no badge
- `'recovered'` → Orange badge
- `'breached'` → Red badge with "SLI breach" label

### Edges Not Connecting

**Cause:**
Source or target IDs don't match node IDs.

**Solution:**
Verify edge IDs exactly match node IDs:

```tsx
nodes: [
  { id: '1', ... },
  { id: '2', ... },
],
edges: [
  {
    id: 'edge-1',
    source: '1',  // Must exactly match a node id
    target: '2',  // Must exactly match a node id
  },
]
```

## TypeScript Issues

### Type Errors with Imports

**Error:**
```
Cannot find module '@opensearch/apm-topology' or its type declarations
```

**Solution:**
Ensure the library is properly installed and built:
```bash
cd lib/
npm install
npm run build
cd ../example/
npm install
```

### Missing Type Exports

**Error:**
```
Module has no exported member 'CelestialCardProps'
```

**Solution:**
Import types from the correct location:

```tsx
// ✅ Correct imports
import { CelestialMap, getIcon } from '@opensearch/apm-topology';
import type {
  CelestialMapProps,
  CelestialCardProps,
  CelestialEdge
} from '@opensearch/apm-topology';
```

## Styling Issues

### Nodes Overlapping or Poorly Positioned

**Solution:**
The library uses dagre for automatic layout, but you can provide manual positions:

```tsx
// Manual positioning
position: { x: 100, y: 100 }   // Top-left node
position: { x: 400, y: 100 }   // Top-middle node
position: { x: 700, y: 100 }   // Top-right node
position: { x: 250, y: 300 }   // Bottom-left node
```

**Spacing Guidelines:**
- Horizontal spacing: 250-350px between nodes
- Vertical spacing: 200-250px between rows
- Leave margins of 100px from edges

### Custom Styles Not Applied

**Issue:**
Custom CSS classes aren't affecting the topology.

**Solution:**
React Flow components are deeply nested. Use more specific selectors:

```css
/* Target React Flow nodes */
.react-flow__node {
  /* Your styles */
}

/* Target celestial cards specifically */
.celestial-card {
  /* Your styles */
}
```

## Performance Issues

### Slow Rendering with Many Nodes

**Symptoms:**
Lag when panning/zooming with 100+ nodes.

**Solutions:**

1. **Use virtualization for large graphs:**
   React Flow has built-in viewport optimization.

2. **Limit initial nodes:**
   ```tsx
   // Show top N nodes initially
   topN: 50
   ```

3. **Implement node filtering:**
   Allow users to filter by service type, health status, etc.

4. **Use React.memo for custom components:**
   ```tsx
   const MyNodeDetails = React.memo(({ node }) => {
     // Component logic
   });
   ```

### Memory Leaks

**Symptoms:**
Browser memory usage grows over time.

**Solutions:**

1. **Clean up event listeners:**
   ```tsx
   useEffect(() => {
     const handler = () => { /* ... */ };
     window.addEventListener('event', handler);
     return () => window.removeEventListener('event', handler);
   }, []);
   ```

2. **Avoid creating new objects in render:**
   ```tsx
   // ❌ Creates new object every render
   <CelestialMap layoutOptions={{ spacing: 100 }} />

   // ✅ Memoize configuration
   const layoutOptions = useMemo(() => ({ spacing: 100 }), []);
   <CelestialMap layoutOptions={layoutOptions} />
   ```

## Event Handler Issues

### "View insights" Button Not Working

**Cause:**
Missing `onDashboardClick` handler.

**Solution:**
Implement the click handler:

```tsx
<CelestialMap
  map={mapData}
  onDashboardClick={(node) => {
    console.log('Node clicked:', node);
    // Handle the click - show modal, navigate, etc.
  }}
/>
```

### Edge Clicks Not Registering

**Cause:**
Missing `onEdgeClick` handler.

**Solution:**
```tsx
<CelestialMap
  map={mapData}
  onEdgeClick={(edge) => {
    console.log('Edge clicked:', edge);
    // Handle edge click
  }}
/>
```

## Build Issues

### Large Bundle Size Warning

**Warning:**
```
(!) Some chunks are larger than 500 kB after minification
```

**Explanation:**
The library includes React Flow and visualization components, which are relatively large.

**Solutions:**

1. **Use code splitting:**
   ```tsx
   const CelestialMap = lazy(() => import('@opensearch/apm-topology').then(m => ({
     default: m.CelestialMap
   })));
   ```

2. **Use dynamic imports for the topology page:**
   ```tsx
   // Only load on topology route
   const TopologyPage = lazy(() => import('./pages/Topology'));
   ```

3. **Enable tree-shaking:**
   ```tsx
   // Import only what you need
   import { CelestialMap, getIcon } from '@opensearch/apm-topology';
   // Not: import * as Topology from '@opensearch/apm-topology';
   ```

## Getting Help

If you encounter issues not covered here:

1. **Check the example app:** `/example/src/App.tsx` contains a working implementation
2. **Review the plan file:** `~/.claude/plans/joyful-inventing-sprout.md` has detailed testing guide
3. **Check TypeScript types:** All types are exported from the main package
4. **Open an issue:** [GitHub Issues](https://github.com/opensearch-project/apm-topology/issues)

## Quick Reference

### Minimal Working Example

```tsx
import React from 'react';
import { CelestialMap, getIcon } from '@opensearch/apm-topology';

function App() {
  const mapData = {
    map: {
      root: {
        nodes: [
          {
            id: '1',
            type: 'celestialNode',
            position: { x: 100, y: 100 },
            data: {
              id: '1',
              title: 'My Service',
              subtitle: 'AWS::Lambda',
              icon: getIcon('AWS::Lambda'),
              isGroup: false,
              keyAttributes: {},
              isInstrumented: true,
              health: {
                breached: 0,
                recovered: 0,
                total: 0,
                status: 'ok',
              },
              metrics: {
                requests: 1000,
                faults5xx: 10,
                errors4xx: 20,
              },
            },
          },
        ],
        edges: [],
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <CelestialMap {...mapData} />
    </div>
  );
}
```

This minimal example should always work. If it doesn't, check your installation and build setup.
