import type { CSSProperties } from 'vue'

/** Absolute position helper — maps Figma frame coords (px) to a CSS style object.
 * All section children are positioned against the FigmaCanvas inner box. */
export function pos(x: number, y: number, w?: number, h?: number): CSSProperties {
  const s: CSSProperties = { position: 'absolute', left: `${x}px`, top: `${y}px` }
  if (w !== undefined) s.width = `${w}px`
  if (h !== undefined) s.height = `${h}px`
  return s
}
