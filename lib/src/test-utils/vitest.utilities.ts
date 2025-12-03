/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { vi } from 'vitest';

export * from '@testing-library/react';
export * from 'vitest';

const mockFitView = vi.fn();
const mockUseReactFlow = vi.fn(() => ({
    fitView: mockFitView,
}));

// Export the mocks so they can be accessed in tests
export { mockFitView, mockUseReactFlow };

vi.mock('@xyflow/react', async (importOriginal: () => any) => {
    const actual = (await importOriginal()) as any;
    return {
        ...actual,
        useReactFlow: () => mockUseReactFlow(),
    };
});
