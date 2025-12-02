import { useMemo } from 'react';
import { TopologyNode, type ListServiceGroupingsOutput } from '@shared/types/sdk.types';
import { TopologyNodeTransformer } from '@shared/transformers/celestial-node.transformer';
import { TopologyNodeModel } from '@shared/models/topology-node.model';
import { type CelestialNode, type CelestialMapModel, type CelestialEdge } from '../../types';

import { DEFAULT_GRID_CONFIG, calculatePosition } from '../utils/celestial-node.utils';
import { GROUP_NODE_TYPE } from '@shared/constants/common.constants';

export const useCelestialGroupNodes = (data: ListServiceGroupingsOutput): CelestialMapModel =>
  useMemo(() => {
    // Transform ServiceGroupingSummaries to TopologyNodes
    const topologyNodes: TopologyNode[] = (data.ServiceGroupingSummaries ?? []).map((grouping: any) => ({
      Name: grouping.GroupingAttribute?.GroupingAttributeValue as string,
      Type: GROUP_NODE_TYPE,
      NodeId: grouping.GroupingAttribute?.GroupingAttributeIdentifier as string,
      AttributeMaps: grouping.AttributeMaps ?? [],
      StatisticReferences: {
        MetricReferences: grouping.MetricReferences ?? [],
      },
      KeyAttributes: {
        Name: grouping.GroupingAttribute?.GroupingAttributeValue as string,
        Type: GROUP_NODE_TYPE,
        GroupType: grouping.GroupingAttribute?.GroupingAttributeKey ?? '',
      },
      DependencyTypes: grouping.DependencyTypes,
    }));

    const nodes: CelestialNode[] = topologyNodes.map((node, idx) => {
      const position = calculatePosition(idx, DEFAULT_GRID_CONFIG);
      const model = new TopologyNodeModel(node);

      return {
        id: node.NodeId,
        type: 'celestialNode',
        position,
        data: new TopologyNodeTransformer(model).toCelestialCard(),
        draggable: true,
        selectable: true,
        deletable: false,
      };
    });

    // ServiceGroupings don't have edges, so return empty array
    const edges: CelestialEdge[] = [];

    return { nodes, edges };
  }, [data]);
