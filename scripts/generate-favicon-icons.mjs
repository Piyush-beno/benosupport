import fs from "node:fs"
import sharp from "sharp"
import pngToIco from "png-to-ico"

function extractPngFromSvg(svgPath) {
  const svg = fs.readFileSync(svgPath, "utf8")
  const match = svg.match(/xlink:href="data:image\/png;base64,([^"]+)"/)
  if (!match) throw new Error(`No embedded PNG in ${svgPath}`)
  return Buffer.from(match[1], "base64")
}

async function makeSquareIcon(logoBuf, size, bg, outPath, pad = 0.14) {
  const maxW = Math.round(size * (1 - pad * 2))
  const maxH = Math.round(size * 0.38)
  const resized = await sharp(logoBuf)
    .resize(maxW, maxH, { fit: "inside", withoutEnlargement: false })
    .png()
    .toBuffer()

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: bg,
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(outPath)

  console.log("wrote", outPath)
}

// Same layout as icon.svg: white card with the logo at ~84% width, centered.
// Downscales straight from the 724x220 source so each frame stays sharp.
async function makeSquareIconBuffer(logoBuf, size, bg) {
  const logoW = Math.round(size * 0.84)
  const resized = await sharp(logoBuf)
    .resize(logoW, size, { fit: "inside", withoutEnlargement: false })
    .png()
    .toBuffer()

  return sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toBuffer()
}

// Google's favicon crawler checks /favicon.ico first and requires sizes that
// are a multiple of 48px. Larger frames (up to 256) keep previews and pinned
// tabs crisp instead of upscaling a 48px raster.
async function makeFaviconIco(logoBuf, bg, outPath) {
  const pngs = await Promise.all(
    [16, 32, 48, 64, 128, 256].map((size) =>
      makeSquareIconBuffer(logoBuf, size, bg)
    )
  )
  const ico = await pngToIco(pngs)
  fs.writeFileSync(outPath, ico)
  console.log("wrote", outPath)
}

async function makeFaviconSvg(coloredLogo, outPath) {
  const fit = await sharp(coloredLogo)
    .resize(152, 52, { fit: "inside" })
    .png()
    .toBuffer()

  const meta = await sharp(fit).metadata()
  const x = Math.round((180 - (meta.width || 152)) / 2)
  const y = Math.round((180 - (meta.height || 52)) / 2)
  const b64 = fit.toString("base64")

  // Always use the full-color logo. Light card keeps black/green/orange readable
  // in both light and dark OS themes.
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
    .bg { fill: #ffffff; }
    @media (prefers-color-scheme: dark) {
      .bg { fill: #f8fafc; }
    }
  </style>
  <rect class="bg" width="180" height="180" rx="36"/>
  <image x="${x}" y="${y}" width="${meta.width}" height="${meta.height}" xlink:href="data:image/png;base64,${b64}"/>
</svg>
`
  fs.writeFileSync(outPath, svg)
  console.log("wrote", outPath)
}

const coloredLogo = extractPngFromSvg("public/assets/logo.svg")
const whiteBg = { r: 255, g: 255, b: 255, alpha: 1 }
const lightBg = { r: 248, g: 250, b: 252, alpha: 1 }

await makeSquareIcon(coloredLogo, 32, whiteBg, "public/icon-light-32x32.png", 0.1)
await makeSquareIcon(coloredLogo, 32, lightBg, "public/icon-dark-32x32.png", 0.1)
await makeSquareIcon(coloredLogo, 180, whiteBg, "public/apple-icon.png", 0.16)
await makeSquareIcon(coloredLogo, 192, whiteBg, "public/icon-192.png", 0.16)
await makeFaviconSvg(coloredLogo, "public/icon.svg")
await makeFaviconIco(coloredLogo, whiteBg, "public/favicon.ico")
