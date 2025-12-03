/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import { ICONS } from '@shared/constants/icons.constants';
import { ServiceLensUnknownNodeIcon } from '@shared/resources/services';

export const getIcon = (type: string) => {
    const Icon = ICONS?.[type];
    if (Icon) {
        return <Icon />;
    }
    return <ServiceLensUnknownNodeIcon />;
};
