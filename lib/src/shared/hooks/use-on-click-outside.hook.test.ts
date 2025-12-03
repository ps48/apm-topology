/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { renderHook, fireEvent, vi, type Mock } from '@tests/vitest.utilities';
import { useOnClickOutside } from './use-on-click-outside.hook';

describe('useOnClickOutside', () => {
    let container: HTMLDivElement;
    let handler: Mock;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        handler = vi.fn();
    });

    afterEach(() => {
        document.body.removeChild(container);
        vi.clearAllMocks();
    });

    it('should call the handler when clicking outside the referenced element', () => {
        const ref = { current: container };
        renderHook(() => useOnClickOutside(ref, handler));

        fireEvent.click(document.body);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('should not call the handler when clicking inside the referenced element', () => {
        const ref = { current: container };
        renderHook(() => useOnClickOutside(ref, handler));

        fireEvent.click(container);
        expect(handler).not.toHaveBeenCalled();
    });

    it('should not call the handler when the ref is null', () => {
        const ref = { current: null };
        renderHook(() => useOnClickOutside(ref, handler));

        fireEvent.click(document.body);
        expect(handler).not.toHaveBeenCalled();
    });

    it('should remove the event listener when the component unmounts', () => {
        const ref = { current: container };
        const { unmount } = renderHook(() => useOnClickOutside(ref, handler));

        const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');
        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
        removeEventListenerSpy.mockRestore();
    });
});
