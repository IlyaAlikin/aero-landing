import { chromium } from 'playwright'
const b = await chromium.launch()
for (const w of [1920, 1440, 1024]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 })
  await p.goto('http://localhost:3000', { waitUntil: 'networkidle' })
  const nav = await p.$('.nav')
  const box = await nav.boundingBox()
  const inner = await p.$('.header__inner')
  const ib = await inner.boundingBox()
  console.log(`w=${w} nav.width=${Math.round(box.width)} nav.x=${Math.round(box.x)} inner.width=${Math.round(ib.width)} inner.x=${Math.round(ib.x)}`)
  await p.screenshot({ path: `/tmp/aero-shots/hdr-${w}.png`, clip: { x: 0, y: 0, width: w, height: 110 } })
  await p.close()
}
await b.close()
console.log('done')
