export declare const MIN_ICON_SIZE = 13;
export declare const MIN_SLI_STATUS_ICON_SIZE = 12;
/**
 * Custom hook for calculating icon sizes based on a given base size
 * Uses the inverse golden ratio and scaling factors to maintain visual harmony
 *
 * @param size - The base size value to calculate icon dimensions from
 * @returns Object containing calculated sizes for center and sli indicator icon
 */
export declare const useIconSizing: (size: number) => {
    centerIconSize: number;
    sliStatusIconSize: number;
};
//# sourceMappingURL=use-icon-sizing.hook.d.ts.map