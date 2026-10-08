/** Core project dates (Section 1 of the build plan). */
export const PROJECT_START = new Date(Date.UTC(2025, 10, 1)); // 1 November 2025
export const PROJECT_END = new Date(Date.UTC(2028, 1, 29));   // 29 February 2028

/** Share of the project time that has passed, 0 to 1. Calculated at build time. */
export function projectProgress(today = new Date()): number {
  const total = PROJECT_END.getTime() - PROJECT_START.getTime();
  const done = today.getTime() - PROJECT_START.getTime();
  return Math.min(1, Math.max(0, done / total));
}

export function formatMonth(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
