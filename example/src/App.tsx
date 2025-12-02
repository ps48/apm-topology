import React, { useState } from 'react';
import { CelestialMap, getIcon } from '@opensearch/apm-topology';
import type { CelestialMapProps, CelestialEdge } from '@opensearch/apm-topology';
import type { CelestialCardProps } from '@opensearch/apm-topology';
import './App.css';

function App() {
  // State for selected node and event log
  const [selectedNode, setSelectedNode] = useState<CelestialCardProps | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<CelestialEdge | null>(null);
  const [eventLog, setEventLog] = useState<string[]>([]);

  // Helper to add events to the log
  const addEvent = (event: string) => {
    setEventLog(prev => [event, ...prev].slice(0, 10)); // Keep last 10 events
  };

  // Create properly structured nodes with all required fields
  const mapData: CelestialMapProps = {
    map: {
      root: {
        nodes: [
          {
            id: '1',
            type: 'celestialNode',
            position: { x: 100, y: 100 },
            data: {
              id: '1',
              title: 'API Gateway',
              subtitle: 'AWS::APIGateway',
              icon: getIcon('AWS::APIGateway'),
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
                requests: 5000,
                faults5xx: 25,
                errors4xx: 100,
              },
            },
          },
          {
            id: '2',
            type: 'celestialNode',
            position: { x: 400, y: 100 },
            data: {
              id: '2',
              title: 'User Service',
              subtitle: 'AWS::Lambda',
              icon: getIcon('AWS::Lambda'),
              isGroup: false,
              keyAttributes: {},
              isInstrumented: true,
              health: {
                breached: 0,
                recovered: 2,
                total: 5,
                status: 'recovered',
              },
              metrics: {
                requests: 4500,
                faults5xx: 10,
                errors4xx: 50,
              },
            },
          },
          {
            id: '3',
            type: 'celestialNode',
            position: { x: 700, y: 100 },
            data: {
              id: '3',
              title: 'Order Service',
              subtitle: 'AWS::Lambda',
              icon: getIcon('AWS::Lambda'),
              isGroup: false,
              keyAttributes: {},
              isInstrumented: true,
              health: {
                breached: 5,
                recovered: 0,
                total: 8,
                status: 'breached',
              },
              metrics: {
                requests: 2000,
                faults5xx: 300,
                errors4xx: 150,
              },
            },
          },
          {
            id: '4',
            type: 'celestialNode',
            position: { x: 250, y: 300 },
            data: {
              id: '4',
              title: 'User Database',
              subtitle: 'AWS::DynamoDB',
              icon: getIcon('AWS::DynamoDB'),
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
                requests: 8000,
                faults5xx: 0,
                errors4xx: 5,
              },
            },
          },
          {
            id: '5',
            type: 'celestialNode',
            position: { x: 550, y: 300 },
            data: {
              id: '5',
              title: 'Order Database',
              subtitle: 'AWS::RDS',
              icon: getIcon('AWS::RDS'),
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
                requests: 3500,
                faults5xx: 2,
                errors4xx: 10,
              },
            },
          },
        ],
        edges: [
          {
            id: 'edge-1',
            source: '1',
            target: '2',
          },
          {
            id: 'edge-2',
            source: '1',
            target: '3',
          },
          {
            id: 'edge-3',
            source: '2',
            target: '4',
          },
          {
            id: 'edge-4',
            source: '3',
            target: '5',
          },
        ],
      },
    },
    // Event handlers
    onDashboardClick: (node) => {
      if (node) {
        setSelectedNode(node);
        setSelectedEdge(null);
        addEvent(`📊 Clicked "View insights" on: ${node.title}`);
      }
    },
    onDataFetch: (node) => {
      if (node) {
        addEvent(`🔄 Fetching data for: ${node.title}`);
      }
    },
    onEdgeClick: (edge) => {
      setSelectedEdge(edge);
      setSelectedNode(null);
      addEvent(`🔗 Clicked edge: ${edge.source} → ${edge.target}`);
    },
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>APM Topology Library - Example</h1>
        <p>Interactive service topology visualization</p>
      </header>

      <div className="app-content">
        <div className="topology-container">
          <h2>Service Topology Map</h2>
          <div className="map-wrapper">
            <CelestialMap {...mapData} />
          </div>
        </div>

        <div className="sidebar">
          {/* Info Panel */}
          <div className="info-panel">
            <h3>Details</h3>
            {selectedNode ? (
              <div className="node-details">
                <h4>{selectedNode.title}</h4>
                <p><strong>Type:</strong> {selectedNode.subtitle}</p>
                <p><strong>Instrumented:</strong> {selectedNode.isInstrumented ? 'Yes' : 'No'}</p>

                <div className="health">
                  <h5>Health Status</h5>
                  <ul>
                    <li className={selectedNode.health.status === 'breached' ? 'sli-breached' : ''}>
                      Status: {selectedNode.health.status.toUpperCase()}
                    </li>
                    <li>Breached SLIs: {selectedNode.health.breached}</li>
                    <li>Recovered SLIs: {selectedNode.health.recovered}</li>
                    <li>Total SLIs: {selectedNode.health.total}</li>
                  </ul>
                </div>

                {selectedNode.metrics && (
                  <div className="metrics">
                    <h5>Metrics</h5>
                    <ul>
                      <li>Total Requests: {selectedNode.metrics.requests?.toLocaleString()}</li>
                      <li>5xx Faults: {selectedNode.metrics.faults5xx?.toLocaleString()}
                        ({((selectedNode.metrics.faults5xx / selectedNode.metrics.requests) * 100).toFixed(2)}%)
                      </li>
                      <li>4xx Errors: {selectedNode.metrics.errors4xx?.toLocaleString()}
                        ({((selectedNode.metrics.errors4xx / selectedNode.metrics.requests) * 100).toFixed(2)}%)
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : selectedEdge ? (
              <div className="edge-details">
                <h4>Connection Details</h4>
                <p><strong>Source:</strong> {selectedEdge.source}</p>
                <p><strong>Target:</strong> {selectedEdge.target}</p>
                <p><strong>Edge ID:</strong> {selectedEdge.id}</p>
              </div>
            ) : (
              <div className="no-selection">
                Click on a node or edge to view details
              </div>
            )}
          </div>

          {/* Event Log */}
          <div className="event-log">
            <h3>Event Log</h3>
            <div className="log-entries">
              {eventLog.length > 0 ? (
                eventLog.map((event, index) => (
                  <div key={index} className="log-entry">
                    {event}
                  </div>
                ))
              ) : (
                <div className="no-events">
                  No events yet. Try clicking "View insights" or edges!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="app-footer">
        <div className="feature-list">
          <h3>Features Demonstrated</h3>
          <ul>
            <li>✅ AWS service icons</li>
            <li>✅ Health indicators (OK, Recovered, Breached)</li>
            <li>✅ Interactive "View insights" buttons</li>
            <li>✅ Node details panel</li>
            <li>✅ Edge click handlers</li>
            <li>✅ Real-time event logging</li>
            <li>✅ Metrics with percentages</li>
            <li>✅ SLI breach indicators</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
