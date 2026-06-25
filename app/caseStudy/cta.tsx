"use client";

export default function CaseStudiesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#071f47] py-28">

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <span className="text-[12px] uppercase tracking-[.25em] text-[#6ea2ff]">
          Work With Us
        </span>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Have a Similar Challenge?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#98b0d3]">
          We partner with engineering and product teams to deliver
          measurable outcomes — from AI transformation to cloud
          modernization and enterprise applications.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-[#0A3A73] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0551ad]">
            Start a Conversation
          </button>

          <button className="rounded-xl border border-white/15 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">
            Explore Solutions
          </button>

        </div>

      </div>
    </section>
  );
}