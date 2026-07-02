"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const outcomes = [
  "Reduce Manual Effort by Up to 60%",
  "Accelerate Process Efficiency",
  "Improve Customer Experience",
  "Increase Operational Visibility",
  "Enhance Security Posture",
  "Reduce Infrastructure Costs",
  "Improve Business Agility",
  "Accelerate Time-to-Market",
]

export default function BusinessOutcomes() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <section className="m-auto max-w-7xl bg-white px-6 py-24">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-12" data-aos="fade-up">
          <span className="label-chip type-label font-semibold section-label-light">
            Business outcomes
          </span>

          <h2
            className="mb-5 text-5xl font-bold leading-tight"
            style={{ color: "#0B2B5B" }}
          >
            Measurable Business Impact
          </h2>

          <p className="text-base leading-relaxed text-gray-500">
            Our solutions are designed to deliver measurable results that directly
            support business growth and operational excellence.
          </p>
        </div>

        <div className="flex flex-col items-start gap-16 lg:flex-row">
          <div className="flex w-full flex-shrink-0 flex-col lg:w-[45%]">
            <h3
              className="type-heading mb-8"
              style={{ color: "#0B2B5B" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Outcome Metrics
            </h3>

            <div className="flex flex-col">
              {outcomes.map((outcome, index) => {
                const isLast = index === outcomes.length - 1

                return (
                  <div
                    key={outcome}
                    className="flex items-start gap-5"
                    data-aos="fade-up"
                    data-aos-delay={150 + index * 100}
                  >
                    <div className="flex flex-shrink-0 flex-col items-center">
                      <div
                        className="flex flex-shrink-0 items-center justify-center rounded-full shadow-md ring-2 ring-white"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#0B2B5B",
                        }}
                      >
                        <Check color="white" size={18} strokeWidth={2.5} />
                      </div>

                      {!isLast && (
                        <div
                          className="w-px bg-gray-300"
                          style={{ height: "28px" }}
                        />
                      )}
                    </div>

                    <p
                      className="text-xl font-bold leading-tight"
                      style={{
                        color: "#0B2B5B",
                        paddingTop: "8px",
                        paddingBottom: isLast ? "0" : "28px",
                      }}
                    >
                      {outcome}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className="w-full lg:w-[55%]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="relative w-full overflow-hidden shadow-2xl"
              style={{
                borderRadius: "16px",
                minHeight: "550px",
              }}
            >
              <Image
                src="/assets/IndBI.svg"
                alt="AI precision targeting visualization"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
