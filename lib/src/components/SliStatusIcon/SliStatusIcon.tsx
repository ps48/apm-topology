import React from 'react';
import { t } from '@shared/i18n/t';
import { AlarmIcon } from '@shared/resources';
import styles from './SliStatusIcon.module.css';
import { type SliStatusIconProps } from './types';

export const SLI_STATUS_ICON_TEST_ID = (status: string) => `sli-status-icon-${status}`;

export const SliStatusIcon: React.FC<SliStatusIconProps> = ({ status, size, isPulsing = false }) => (
    <div
        data-testid={SLI_STATUS_ICON_TEST_ID(status)}
        className={`${styles.sliStatusIcon} ${styles[status]} ${isPulsing ? styles.animated : ''}`}
        style={{
            width: `${size}px`,
            height: `${size}px`,
        }}
        role="img"
        aria-label={t(`sliStatus`)}
    >
        <AlarmIcon height={size} width={size} />
    </div>
);
