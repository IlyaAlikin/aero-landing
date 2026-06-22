// Temporary mobile-verification harness (NOT for commit).
// Renders the dev server at the Figma mobile frame width (320px) and screenshots
// the full page + each section, so renders can be compared picture-vs-picture
// against Figma get_image of the mobile frame.
//
// Usage:
//   node tools-mobile-shot.mjs [width] [url]
// Defaults: width=320, url=http://localhost:3000
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const WIDTH = Number(process.argv[2] || 320)
const URL = process.argv[3] || 'http://localhost:3000'
const OUT = '/tmp/aero-shots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: WIDTH, height: 900 },
  deviceScaleFactor: 2,
})
await page.goto(URL, { waitUntil: 'networkidle' })
// Give fonts/images a beat and scroll through to trigger any lazy work.
await page.evaluate(async () => {
  await new Promise((r) => setTimeout(r, 300))
  window.scrollTo(0, document.body.scrollHeight)
  await new Promise((r) => setTimeout(r, 400))
  window.scrollTo(0, 0)
  await new Promise((r) => setTimeout(r, 200))
  if (document.fonts && document.fonts.ready) await document.fonts.ready
})

// Full page
await page.screenshot({ path: `${OUT}/full-${WIDTH}.png`, fullPage: true })

// Per-section: screenshot each top-level <section>/<header>/<footer> by index.
const blocks = await page.$$('header, main > section, main > footer, footer')
let i = 0
for (const el of blocks) {
  const tag = await el.evaluate((n) => n.tagName.toLowerCase() + (n.className ? '.' + String(n.className).split(' ')[0] : ''))
  try {
    await el.screenshot({ path: `${OUT}/sec-${String(i).padStart(2, '0')}-${tag.replace(/[^\w.-]/g, '')}-${WIDTH}.png` })
  } catch (e) {
    // element may be 0-height / off-screen; skip
  }
  i++
}

console.log(`saved ${i} section shots + full page to ${OUT} at width ${WIDTH}`)
await browser.close()
