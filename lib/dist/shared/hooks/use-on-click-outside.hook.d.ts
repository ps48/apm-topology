import { RefObject } from 'react';
/**
 * A custom React hook that handles clicks outside of a specified element.
 * Useful for closing menus, popups, or modals when a user clicks outside of them.
 *
 * @param ref - React ref object pointing to the element to monitor
 * @param handler - Callback function to execute when a click outside element occurs
 * @returns void
 */
export declare const useOnClickOutside: <T extends HTMLElement>(ref: RefObject<T>, handler: () => void) => void;
//# sourceMappingURL=use-on-click-outside.hook.d.ts.map