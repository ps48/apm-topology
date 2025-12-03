# Example Application Features

This document describes all the features demonstrated in the example application.

## Complete Feature List

### Visual Features

1. **AWS Service Icons**
   - API Gateway
   - Lambda Functions
   - DynamoDB
   - RDS (Relational Database Service)
   - S3 (Simple Storage Service)
   - SQS (Simple Queue Service)
   - SNS (Simple Notification Service)
   - CloudFront CDN
   - ECS (Elastic Container Service)

2. **Health Status Indicators**
   - ✅ Healthy (green) - Service operating normally
   - ⚠️ Warning (yellow) - Minor issues detected
   - 🔴 Critical (red) - Severe issues requiring attention

3. **Donut Charts**
   - Visual representation of error rates
   - Visual representation of fault rates
   - Color-coded segments for easy identification

4. **SLI Breach Indicators**
   - Shows when services breach Service Level Indicators
   - Highlighted in the UI with red indicators

### Interactive Features

1. **Node Click Handlers**
   - Single-click to select and view node details
   - Displays service information in side panel
   - Shows metrics and health status

2. **Node Double-Click**
   - Double-click events for potential drill-down
   - Logged in event log for demonstration

3. **Context Menu (Right-Click)**
   - Right-click nodes to trigger context menu
   - Event captured and logged

4. **Edge Click Handlers**
   - Click on connections between services
   - View connection metrics (request count, error rate, latency)

5. **Real-time Event Log**
   - Tracks all user interactions
   - Timestamps for each event
   - Shows last 10 events

### Data & Metrics

1. **Service Metrics**
   - Latency (response time in ms)
   - Error Rate (percentage)
   - Fault Rate (percentage)
   - Request Count (total requests)
   - Service-specific metrics (invocations, connections, etc.)

2. **Health Metrics**
   - Overall health status
   - Error percentage
   - Fault percentage
   - SLI breach status

3. **Connection Metrics**
   - Request volume between services
   - Error rates on connections
   - Latency across connections

### Architecture Features

1. **Hierarchical Groups**
   - Group node: "Analytics Services"
   - Shows collapsed state with child count
   - Aggregate metrics for the group
   - Can be expanded to show individual services

2. **Service Types Demonstrated**
   - Entry point (API Gateway)
   - Compute services (Lambda, ECS)
   - Data stores (DynamoDB, RDS)
   - Message queues (SQS)
   - Notifications (SNS)
   - Storage (S3)
   - CDN (CloudFront)

3. **Realistic Microservices Pattern**
   - Request flow: API Gateway → Services → Databases
   - Async processing: Service → Queue → Worker
   - Notifications: Worker → SNS Topic
   - Static assets: CDN → S3

## Running the Example

```bash
# From the repository root
cd example
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## What to Try

1. **Click on nodes** to see detailed metrics
2. **Click on edges** to see connection information
3. **Double-click nodes** to see the event logged
4. **Right-click nodes** to trigger context menu
5. **Observe the event log** in the right panel
6. **Notice the health indicators**:
   - Green nodes = healthy
   - Yellow nodes = warnings
   - Red nodes = critical issues
7. **Look for the donut charts** on services with errors/faults
8. **Find the SLI breach indicators** on auth-service and order-service
9. **Explore the group node** (Analytics Services) showing collapsed state

## Code Structure

- `src/App.tsx` - Main application with topology data and handlers
- `src/App.css` - Comprehensive styling
- `src/main.tsx` - React entry point
- `index.html` - HTML template

## Customization

You can modify the topology data in `App.tsx` to:
- Add more services
- Change metrics
- Adjust health statuses
- Add more connections
- Create additional groups
