import { default as React, ReactNode } from 'react';
type MenuPosition = {
    top: number;
    left: number;
};
interface MenuContextType {
    activeMenuNodeId: string | null;
    setActiveMenuNodeId: (id: string | null) => void;
    menuPosition: MenuPosition | null;
    registerNodeRef: (id: string, ref: React.RefObject<HTMLDivElement>) => void;
    onToggleMenu: (event: React.MouseEvent, nodeId: string) => void;
    isMenuOpen: (nodeId: string) => boolean;
}
export declare const MenuProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useMenuContext: () => MenuContextType;
export {};
//# sourceMappingURL=MenuContext.d.ts.map