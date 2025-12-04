interface UseDelayedHoverOptions {
    delay?: number;
}
/**
 * Custom hook for handling delayed hover interactions
 * Provides functionality to show/hide elements with a delay when hovering
 *
 * @param {Object} options - Configuration options for the hook
 * @param {number} [options.delay=500] - Delay in milliseconds before hiding element on mouse leave
 * @returns {Object} Object containing show state and mouse event handlers
 */
export declare const useDelayedHover: ({ delay }?: UseDelayedHoverOptions) => {
    showElement: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};
export {};
//# sourceMappingURL=use-delayed-hover.hook.d.ts.map