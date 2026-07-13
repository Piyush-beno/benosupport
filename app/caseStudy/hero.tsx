"use client";

import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { withHome } from "@/lib/breadcrumbs"

export default function CaseStudiesHero() {
  return (
    <section className="relative flex h-dvh min-h-[640px] flex-col overflow-hidden bg-[#071f47]">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,103,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,.5) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-1 flex-col justify-center px-6 pb-12 pt-[72px] text-center">

        <PageBreadcrumb
          items={withHome([{ label: "Case Studies" }])}
          variant="dark"
          align="center"
        />

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white lg:text-6xl">
          Solving Complex Business
          
          Challenges Through Technology
        </h1>

        <p className="mx-auto mt-8 max-w-2xl type-body text-[#9cb3d5]">
          From modernising legacy platforms to deploying AI at scale,
          we help organisations streamline operations, improve customer
          experiences and accelerate growth.
        </p>

        {/* stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-[#8ca5cf]">
              Projects Served
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="text-4xl font-bold text-white">15+</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-[#8ca5cf]">
              Industries Served
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="text-4xl font-bold text-white">95%</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-[#8ca5cf]">
              Client Retention
            </div>
          </div>

        </div>

        {/* buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl  border-white px-8 py-4 text-sm font-semibold  transition bg-white text-black hover:bg-[#072448] hover:border-white/20 hover:text-white">
            View All Projects
          </button>

          <button className="rounded-xl border border-white/15 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">
            Explore by Solution
          </button>

        </div>
      </div>
    </section>
  );
}