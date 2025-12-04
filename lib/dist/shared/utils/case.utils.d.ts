/**
 * Converts PascalCase/TitleCase strings to sentence case with intelligent spacing
 *
 * @param input - The PascalCase string to convert
 * @param exceptions - Array of words that should remain unchanged
 * @returns Converted string with proper spacing
 *
 * @example
 * titleCaseToSentenceCase('LoadBalancer') // → 'Load Balancer'
 * titleCaseToSentenceCase('TargetGroup') // → 'Target Group'
 * titleCaseToSentenceCase('APIGateway') // → 'API Gateway'
 * titleCaseToSentenceCase('AWS') // → 'AWS'
 * titleCaseToSentenceCase('CloudWatch', ['CloudWatch']) // → 'CloudWatch'
 * titleCaseToSentenceCase('CloudWatchMetrics', ['CloudWatch']) // → 'CloudWatch Metrics'
 * titleCaseToSentenceCase('AWSCloudWatchMetrics', ['AWS', 'CloudWatch']) // → 'AWS CloudWatch Metrics'
 */
export declare function titleCaseToSentenceCase(input: string, exceptions?: string[]): string;
//# sourceMappingURL=case.utils.d.ts.map