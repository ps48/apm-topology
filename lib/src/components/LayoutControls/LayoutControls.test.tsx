import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LayoutControls } from './LayoutControls';

// Mock the hook
const mockOnLayoutChange = vi.fn();
const mockOnExpandAll = vi.fn();

vi.mock('./use-layout-controls.hook', () => ({
    useLayoutControls: () => ({
        onLayoutChange: mockOnLayoutChange,
        onExpandAll: mockOnExpandAll,
    }),
}));

// Mock the translation function
vi.mock('@shared/i18n/t', () => ({
    t: (key: string) => {
        const translations: Record<string, string> = {
            'controls.layout': 'Layout',
            'controls.expandAll': 'Expand All',
        };
        return translations[key] || key;
    },
}));

// Mock the icons
vi.mock('@shared/resources', () => ({
    LayoutIcon: ({ className }: { className?: string }) => (
        <div data-testid="layout-icon" className={className}>
            Layout Icon
        </div>
    ),
    ExpandAllIcon: ({ className }: { className?: string }) => (
        <div data-testid="expand-all-icon" className={className}>
            Expand All Icon
        </div>
    ),
}));

describe('LayoutControls', () => {
    const user = userEvent.setup();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render both control buttons', () => {
        render(<LayoutControls />);

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);

        expect(screen.getByRole('button', { name: 'Layout' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Expand All' })).toBeInTheDocument();
    });

    it('should call onLayoutChange when layout button is clicked', async () => {
        render(<LayoutControls />);
        const layoutButton = screen.getByRole('button', { name: 'Layout' });
        await user.click(layoutButton);
        expect(mockOnLayoutChange).toHaveBeenCalledTimes(1);
    });

    it('should call onExpandAll when expand all button is clicked', async () => {
        render(<LayoutControls />);

        const expandButton = screen.getByRole('button', { name: 'Expand All' });
        await user.click(expandButton);

        expect(mockOnExpandAll).toHaveBeenCalledTimes(1);
    });
});
