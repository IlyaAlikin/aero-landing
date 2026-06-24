import { chromium } from 'playwright'
const b = await chromium.launch()
for (const w of [1440, 1024, 768, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 })
  await p.goto('http://localhost:3000', { waitUntil: 'networkidle' })
  await p.addStyleTag({ content: '*{scroll-behavior:auto !important}' })
  await p.evaluate(() => document.fonts && document.fonts.ready)
  const el = await p.$('#telegram')
  await el.scrollIntoViewIfNeeded()
  await p.waitForTimeout(300)
  const box = await el.boundingBox()
  await p.screenshot({ path: `/tmp/aero-shots/tg-${w}.png`, clip: { x: 0, y: Math.max(0, box.y), width: w, height: Math.min(box.height, 1000) } })
  await p.close()
}
await b.close()
console.log('done')
