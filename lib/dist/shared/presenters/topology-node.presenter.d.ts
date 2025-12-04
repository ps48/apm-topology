import { TopologyNodeModel } from '../models/topology-node.model';
/**
 * TopologyNodePresenter
 *
 * A presenter class that formats topology node data for display.
 * Follows the presenter pattern to separate formatting logic from model logic.
 * Handles internationalization, formatting, and display-specific transformations.
 */
export declare class TopologyNodePresenter {
    /** The topology node model being presented */
    readonly model: TopologyNodeModel;
    /**
     * Creates a new TopologyNodePresenter instance
     *
     * @param model - The topology node model to present
     */
    constructor(model: TopologyNodeModel);
    get title(): string;
    get subtitle(): string;
    /**
     * Gets a display-friendly version of the platform name
     * Splits platform strings on '::' and converts from title case to sentence case
     * Preserves specific terms like 'CloudWatch' from being converted
     *
     * @returns A formatted string representing the platform name
     */
    get platform(): string;
    /**
     * Formats the node type for display
     * Splits type strings on '::' and converts from title case to sentence case
     * Preserves specific terms like 'CloudWatch' from being converted
     *
     * @returns A formatted string representing the node type
     */
    get type(): string;
    /**
     * Gets a localized string indicating the number of services
     *
     * @returns A formatted and translated string showing the service count
     */
    get numberOfServices(): string;
    /**
     * Gets a localized string indicating the number of uninstrumented services
     *
     * @returns A formatted and translated string showing the uninstrumented service count
     */
    get percentOfUninstrumentedServices(): string;
    /**
     * Gets a display-friendly version of the group type
     * Applies special case handling for specific group types:
     * - 'Related' is displayed as 'Application'
     * - Other types are converted from title case to sentence case
     *
     * @returns A formatted string representing the group type, or undefined if no group type
     */
    get groupType(): string | undefined;
}
//# sourceMappingURL=topology-node.presenter.d.ts.map