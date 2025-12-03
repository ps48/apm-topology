/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


import path, { dirname } from 'path';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { fromPairs, sortBy } from 'ramda';
import { fileURLToPath } from 'url';

const i18nLangDir = 'src/shared/i18n/lang/';
const defaultFile = 'en.json';
const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
const translationsDir = path.join(dirName, '..', i18nLangDir);

const sort = (json) => {
    const entries = Object.entries(json);

    const sortedEntries = sortBy(([key]) => key, entries);
    return fromPairs(
        sortedEntries.map(([key, value]) => {
            if (typeof value === 'object') {
                return [key, sort(value)];
            }
            return [key, value];
        })
    );
};

const replicateTranslations = (source, target) => {
    const newTarget = {};
    Object.entries(source).forEach(([key, value]) => {
        const sourceValue = source[key];
        if (target[key]) {
            const targetValue = target[key];
            if (typeof value === 'object') {
                newTarget[key] = replicateTranslations(
                    sourceValue,
                    targetValue
                );
            } else {
                newTarget[key] = targetValue;
            }
        } else {
            newTarget[key] = value;
        }
    });

    return newTarget;
};

const getFilePath = (fileName) => `${translationsDir}${fileName}`;
const readTranslationFile = (fileName) => readFileSync(getFilePath(fileName));
const writeTranslationFile = (fileName, content) => {
    writeFileSync(
        getFilePath(fileName),
        `${JSON.stringify(content, null, 2)}\n`
    );
};

const enFile = readTranslationFile(defaultFile);
const enJson = JSON.parse(enFile);
const sortedEnJson = sort(enJson);
writeTranslationFile(defaultFile, sortedEnJson);

readdirSync(translationsDir)
    .filter((fileName) => fileName !== defaultFile)
    .filter((fileName) => fileName.match(/^[A-z.\-_]+.json$/))
    .forEach((fileName) => {
        const file = readTranslationFile(fileName);
        const json = JSON.parse(file);
        const sortedJson = sort(json);
        const replicatedJson = replicateTranslations(sortedEnJson, sortedJson);
        writeTranslationFile(fileName, replicatedJson);
    });