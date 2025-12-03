/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { useEdgesState, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useEffect } from 'react';
import { useMapInitialization } from '@shared/hooks/use-map-initialization.hook';
import { useCelestialStateContext } from './shared/contexts/CelestialStateContext';
import styles from './Celestial.module.css';
import { useBreadcrumbs } from './components/BreadcrumbTrail';
import { MapContainer } from './components/MapContainer';
import { CelestialNodeActionsProvider } from './shared/contexts/NodeActionsContext';
import { useCelestialLayout } from './shared/hooks/use-celestial-layout.hook';
import { useCelestialMapActions } from './shared/hooks/use-celestial-map-actions.hook';
import { useFitViewWithDelay } from './shared/hooks/use-fit-view-with-delay.hook';
import { useFocusOnNodes } from './shared/hooks/use-focus-on-nodes.hook';
import { type CelestialMapProps } from './types';

export const Celestial = (props: CelestialMapProps) => {
    const fitViewWithDelay = useFitViewWithDelay();
    const { focusOnNodes } = useFocusOnNodes();

    // Pass the layout options from props to the hook
    const { getLaidOutElements } = useCelestialLayout(props.layoutOptions);

    // Replace the current static initialization with a reactive approach
    const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<any>([]);

    const { setSelectedNodeId } = useCelestialStateContext();

    // Stack aggregated nodes and focus other nodes
    const map = useMapInitialization(props.map?.root?.nodes, props.map?.root?.edges, props.nodesInFocus, props.topN);

    useEffect(() => {
        const layoutResult = getLaidOutElements(map.nodes, map.edges);

        // Update the ReactFlow states
        setNodes(layoutResult.nodes);
        setEdges(layoutResult.edges);
    }, [map.nodes, map.edges, getLaidOutElements]);

    // focus on selected nodeid
    useEffect(() => {
        setSelectedNodeId(props.selectedNodeId);
        if (props.selectedNodeId) {
            const selectedNode = nodes.find((node) => node.id === props.selectedNodeId);
            if (selectedNode && !selectedNode.hidden) {
                focusOnNodes([selectedNode], nodes);
            }
        }
    }, [props.selectedNodeId, nodes, focusOnNodes]);

    useEffect(() => {
        if (map.nodes) {
            const layoutResult = getLaidOutElements(map.nodes, map.edges ?? []);
            setNodes(layoutResult.nodes);
            setEdges(layoutResult.edges);
            if (props.nodesInFocus?.length) {
                focusOnNodes(props.nodesInFocus, layoutResult.nodes);
            } else {
                fitViewWithDelay();
            }
        }
    }, [map.nodes, map.edges, focusOnNodes, fitViewWithDelay, props.nodesInFocus]);

    // Use breadcrumb props if provided, otherwise fall back to internal hook for backwards compatibility
    const internalBreadcrumbs = useBreadcrumbs();

    const breadcrumbs = props.breadcrumbs ?? internalBreadcrumbs.breadcrumbs;
    const addBreadcrumb = props.addBreadcrumb ?? internalBreadcrumbs.addBreadcrumb;
    const navigateToBreadcrumb = props.navigateToBreadcrumb ?? internalBreadcrumbs.navigateToBreadcrumb;

    const { onBreadcrumbClick, onEdgeClick } = useCelestialMapActions({
        onDataFetch: props.onDataFetch,
        navigateToBreadcrumb,
        onEdgeClick: props.onEdgeClick,
        onBreadcrumbClick: props.onBreadcrumbClick,
    });

    return (
        <CelestialNodeActionsProvider
            onDataFetch={props.onDataFetch}
            addBreadcrumb={addBreadcrumb}
            onDashboardClick={props.onDashboardClick}
        >
            <div className={`${styles.container} celestial reset`}>
                <div className={styles.mapContainer}>
                    <MapContainer
                        isLoading={props.isLoading}
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        breadcrumbs={breadcrumbs}
                        onBreadcrumbClick={onBreadcrumbClick}
                        onEdgeClick={onEdgeClick}
                        emptyState={props.emptyState}
                        hotspot={props.breadcrumbHotspot}
                        numMatches={props.numMatchesForFilters}
                    />
                </div>
            </div>
        </CelestialNodeActionsProvider>
    );
};
