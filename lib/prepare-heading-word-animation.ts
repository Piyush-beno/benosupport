/**
 * Splits a heading into per-word spans for GSAP entrance animation.
 * Preserves original text in data-split-text so re-runs (Strict Mode, etc.)
 * do not read concatenated textContent without spaces.
 */
export function prepareHeadingWordAnimation(heading: HTMLElement): Element[] {
  const existing = heading.querySelectorAll(".wi")
  if (existing.length > 0) {
    return Array.from(existing)
  }

  const original =
    heading.dataset.splitText ??
    heading.dataset.text ??
    heading.textContent?.trim() ??
    ""

  if (!original) return []

  heading.dataset.splitText = original

  const words = original.split(/\s+/).filter(Boolean)
  heading.innerHTML = words
    .map(
      (word) =>
        `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:0.28em"><span class="wi" style="display:inline-block">${word}</span></span>`
    )
    .join("")

  return Array.from(heading.querySelectorAll(".wi"))
}
