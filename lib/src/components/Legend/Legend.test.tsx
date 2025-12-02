import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Legend } from './Legend';

vi.mock('@shared/resources', () => ({
    LegendIcon: () => <div data-testid="legend-icon">Legend Icon</div>,
}));

vi.mock('./LegendPanel', () => ({
    LegendPanel: ({ onClose }: { onClose: () => void }) => (
        <div data-testid="legend-panel">
            <div>Legend</div>
            <button onClick={onClose}></button>
        </div>
    ),
}));

vi.mock('../Portal', () => ({
    Portal: ({ children, position }: { children: React.ReactNode; position: any }) => (
        <div data-testid="portal" data-position={JSON.stringify(position)}>
            {children}
        </div>
    ),
}));

describe('Legend Component', () => {
    it('renders the legend button correctly', () => {
        render(<Legend />);

        const button = screen.getByRole('button', { name: /toggle legend/i });
        expect(button).toBeInTheDocument();
        expect(screen.getByTestId('legend-icon')).toBeInTheDocument();
    });

    it('opens the legend popup when button is clicked', () => {
        render(<Legend />);

        expect(screen.queryByTestId('legend-panel')).not.toBeInTheDocument();

        const button = screen.getByRole('button', { name: /toggle legend/i });
        fireEvent.click(button);

        expect(screen.getByTestId('legend-panel')).toBeInTheDocument();
        expect(screen.getByText('Legend')).toBeInTheDocument();
    });

    it('closes the legend popup when close button is clicked', () => {
        render(<Legend />);

        const button = screen.getByRole('button', { name: /toggle legend/i });
        fireEvent.click(button);

        expect(screen.getByTestId('legend-panel')).toBeInTheDocument();

        const closeButton = screen.getByRole('button', { name: '' });
        fireEvent.click(closeButton);

        expect(screen.queryByTestId('legend-panel')).not.toBeInTheDocument();
    });

    it('positions the legend panel correctly when opened', () => {
        // Mock getBoundingClientRect
        const mockRect = new DOMRect(200, 100, 32, 32);
        Element.prototype.getBoundingClientRect = vi.fn(() => mockRect);

        render(<Legend />);

        const button = screen.getByRole('button', { name: /toggle legend/i });
        fireEvent.click(button);

        const portal = screen.getByTestId('portal');
        const position = JSON.parse(portal.getAttribute('data-position') || '{}');
        expect(position).toEqual({
            top: 100,
            right: 829,
        });
    });
});
