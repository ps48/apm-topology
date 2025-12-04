import { MutableRefObject } from 'react';
interface UseContextMenuProps {
    id: string;
    nodeRef: MutableRefObject<HTMLDivElement | null>;
    activeMenuNodeId?: string | null;
    setActiveMenuNodeId?: (id: string | null) => void;
}
export declare const useContextMenu: ({ id, nodeRef, activeMenuNodeId, setActiveMenuNodeId }: UseContextMenuProps) => {
    isMenuOpen: boolean;
    menuPosition: {
        top: number;
        left: number;
    } | null;
    menuRef: MutableRefObject<HTMLDivElement | null>;
    onToggleMenu: (event: React.MouseEvent) => void;
    onClose: () => void;
};
export {};
//# sourceMappingURL=use-context-menu.hook.d.ts.map