/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useReactFlow } from '@xyflow/react';
import { useCelestialControls } from './use-celestial-controls.hook';

// Mock the useReactFlow hook
vi.mock('@xyflow/react', () => ({
    useReactFlow: vi.fn(),
}));

describe('useCelestialControls', () => {
    const mockZoomIn = vi.fn();
    const mockZoomOut = vi.fn();
    const mockFitView = vi.fn();

    const createMockEvent = () =>
        ({
            stopPropagation: vi.fn(),
        }) as unknown as React.MouseEvent;

    beforeEach(() => {
        vi.clearAllMocks();
        (useReactFlow as any).mockReturnValue({
            zoomIn: mockZoomIn,
            zoomOut: mockZoomOut,
            fitView: mockFitView,
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should return the correct interface', () => {
        const { result } = renderHook(() => useCelestialControls());

        expect(result.current).toEqual({
            onZoomIn: expect.any(Function),
            onZoomOut: expect.any(Function),
            onFitView: expect.any(Function),
        });
    });

    it('should handle zoom in functionality', () => {
        const { result } = renderHook(() => useCelestialControls());
        const mockEvent = createMockEvent();

        result.current.onZoomIn(mockEvent);

        expect(mockEvent.stopPropagation).toHaveBeenCalled();
        expect(mockZoomIn).toHaveBeenCalledWith({ duration: 300 });
    });

    it('should handle zoom out functionality', () => {
        const { result } = renderHook(() => useCelestialControls());
        const mockEvent = createMockEvent();

        result.current.onZoomOut(mockEvent);

        expect(mockEvent.stopPropagation).toHaveBeenCalled();
        expect(mockZoomOut).toHaveBeenCalledWith({ duration: 300 });
    });

    it('should handle fit view functionality', () => {
        const { result } = renderHook(() => useCelestialControls());
        const mockEvent = createMockEvent();

        result.current.onFitView(mockEvent);

        expect(mockEvent.stopPropagation).toHaveBeenCalled();
        expect(mockFitView).toHaveBeenCalledWith({ duration: 300 });
    });
});
