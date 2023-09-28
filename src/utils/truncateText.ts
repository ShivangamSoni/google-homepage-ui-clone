export function truncateText(text: string, maxLen: number = 10): string {
    return text.length <= maxLen ? text : text.substring(0, maxLen) + "...";
}
