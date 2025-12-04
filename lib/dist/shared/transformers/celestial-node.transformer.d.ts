import { TopologyNodeModel } from '../models/topology-node.model';
import { TopologyNodePresenter } from '../presenters/topology-node.presenter';
import { CelestialCardProps } from '../../components/CelestialCard/types';
export declare class TopologyNodeTransformer {
    readonly model: TopologyNodeModel;
    readonly presenter: TopologyNodePresenter;
    constructor(model: TopologyNodeModel);
    toCelestialCard(): CelestialCardProps;
}
//# sourceMappingURL=celestial-node.transformer.d.ts.map