import { CelestialCardProps } from '../../components/CelestialCard';
interface UseCelestialActionsProps {
    onDataFetch?: (node?: CelestialCardProps) => void;
    addBreadcrumb: (title: string, node?: CelestialCardProps) => void;
}
export declare const useCelestialNodeActions: ({ onDataFetch, addBreadcrumb }: UseCelestialActionsProps) => {
    onGroupToggle: (event: React.MouseEvent, nodeProps: CelestialCardProps) => void;
};
export {};
//# sourceMappingURL=use-celestial-node-actions.hook.d.ts.map