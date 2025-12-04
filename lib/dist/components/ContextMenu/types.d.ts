/// <reference types="react" />
export interface MenuItemProps {
    label: string;
    isDisabled?: boolean;
    onClick: (event: React.MouseEvent) => void;
}
export type ContextMenuProps = {
    nodeId: string;
    onClose: () => void;
};
//# sourceMappingURL=types.d.ts.map