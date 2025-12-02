import { type AbsolutePositionProps } from './types';
import styles from './styles.module.css';

export const AbsolutePosition: React.FC<AbsolutePositionProps> = ({ children, ...positioning }) => (
    <div className={styles.absolute} style={{ ...positioning }}>
        {children}
    </div>
);
