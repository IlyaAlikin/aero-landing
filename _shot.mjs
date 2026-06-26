import { chromium } from 'playwright'
const out = process.argv[2] || 'shot.png'
const vw = parseInt(process.argv[3]||'1440'), vh = parseInt(process.argv[4]||'900')
const b = await chromium.launch()
const p = await b.newPage({ viewport:{width:vw,height:vh}, deviceScaleFactor:1 })
await p.goto('http://localhost:3001/', { waitUntil:'networkidle' })
const el = await p.$('#author'); await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(400)
await el.screenshot({ path: out })
await b.close(); console.log('ok',out)
