"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

// ── Per-logo config ────────────────────────────────────────────────────────
// Tune w/h here for each logo individually until it looks right
const LOGOS: { src: string; w: number; h: number; invert?: boolean }[] = [
  { src: "/assets/google.svg",  w: 120, h: 100  },
  { src: "/assets/ntt.svg",     w: 200,  h: 170  },
  { src: "/assets/netflix.svg", w: 210, h: 100  },
  { src: "/assets/army.svg",    w: 200,  h: 70  },
  { src: "/assets/ap.svg",      w: 200, h: 140  },
  { src: "/assets/home/white_indian_navy_logo.png", w: 180, h: 80, invert: false },
  { src: "/assets/home/white_indian_navy_logo_1.png", w: 180, h: 80, invert: false },
  { src: "/assets/home/white_indian_navy_logo_2.png", w: 180, h: 80, invert: false },
  { src: "/assets/home/white_up_logo.png", w: 160, h: 80, invert: false },
  { src: "/assets/home/white_up_logo_1.png", w: 160, h: 80, invert: false },
]

const ITEMS = [...LOGOS, ...LOGOS, ...LOGOS]

export function PartnerStrip() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const raf = requestAnimationFrame(() => {
      const totalW  = track.scrollWidth
      const oneSetW = totalW / 3

      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -oneSetW,
          duration: 24,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const val = parseFloat(x)
              return (((val % oneSetW) - oneSetW) % oneSetW) + "px"
            },
          },
        }
      )

      const logos = track.querySelectorAll<HTMLElement>(".partner-logo")
      logos.forEach((logo, i) => {
        gsap.to(logo, {
          scale: 1.08,
          duration: 1.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: (i % LOGOS.length) * 0.3,
        })
      })
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="relative bg-[#072448] z-10 h-[110px] shrink-0 overflow-hidden flex items-center">
      {/* Vignette edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #072448, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #072448, transparent)" }}
      />

      {/* Track */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{ width: "max-content", gap: "72px" }}
        >
          {ITEMS.map(({ src, w, h, invert = true }, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center"
              style={{ width: w, height: 110 }}
            >
              <img
                src={src}
                alt={`Partner ${(i % LOGOS.length) + 1}`}
                className={`partner-logo object-contain select-none ${
                  invert ? "brightness-0 invert opacity-85" : "opacity-90"
                }`}
                draggable={false}
                style={{ width: w, height: h }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}