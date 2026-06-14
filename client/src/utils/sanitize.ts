export const sanitizeSearch = (value: string, maxLength = 100): string => {
    return value
    .slice(0, maxLength)
    .replace(/<[^>]*>/g, "")
    .replace(/['"`;\\]/g, "")
    .replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|FROM|WHERE|OR|AND)\b)/gi, "")
    .trim()
}