export interface CircleDimensions {
    backgroundStrokeWidth: number;
    segmentStrokeWidth: number;
    radius: number;
    circumference: number;
    center: number;
    getArcLength: (percentage: number) => number;
}
/**
 * Custom hook that calculates dimensions and properties for a circular metric display
 *
 * @param diameter - The desired diameter of the circle in pixels
 * @returns CircleDimensions object containing all necessary circle properties and methods
 */
export declare const useCircleDimensions: (diameter: number) => CircleDimensions;
//# sourceMappingURL=use-circle-dimensions.hook.d.ts.map