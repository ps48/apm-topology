import { Node, NodeProps } from '@xyflow/react';
export type WidgetNodeProps = {
    id: string;
    title: string;
    subtitle?: string;
    type: string;
    status: string;
    isSource?: boolean;
    isTarget?: boolean;
};
export type WidgetNodeType = Node<WidgetNodeProps, 'widget'>;
export declare const WidgetNode: (props: NodeProps<WidgetNodeType>) => import("react/jsx-runtime").JSX.Element;
export default WidgetNode;
//# sourceMappingURL=WidgetNode.d.ts.map