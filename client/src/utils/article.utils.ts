export const getFirstImage = (
  html: string | null | undefined
): string | null => {
  if (!html) return null

  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")

  const image = doc.querySelector("img")

  return image?.getAttribute("src") ?? null
}

export const getExcerpt = (
  html: string | null | undefined,
  maxLength = 50
): string => {
  if (!html) return ""

  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")

  const text = doc.body.textContent?.trim() ?? ""

  return text.length > maxLength
    ? `${text.slice(0, maxLength)}...`
    : text
}