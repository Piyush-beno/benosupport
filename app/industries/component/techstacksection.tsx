import Image from "next/image"

// function TechStackSection() {
//   const [activeFilter, setActiveFilter] = useState("All")
//   const ref = useRef<HTMLElement>(null)
//   const gridRef = useRef<HTMLDivElement>(null)

//   useSectionEntrance(ref)

//   const allFilters = ["All", ...techStackData.filters]

//   const filtered =
//     activeFilter === "All"
//       ? techStackData.stacks
//       : techStackData.stacks.filter((s) => s.category === activeFilter)

//   useEffect(() => {
//     const cards = gridRef.current?.querySelectorAll<HTMLElement>(".tech-card")
//     if (!cards?.length) return

//     gsap.fromTo(
//       cards,
//       { opacity: 0, y: 28, scale: 0.9 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.5,
//         stagger: 0.06,
//         ease: "power3.out",
//       }
//     )
//   }, [activeFilter])

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return

//     const ctx = gsap.context(() => {
//       const cards = el.querySelectorAll<HTMLElement>(".tech-card")

//       gsap.fromTo(
//         cards,
//         { opacity: 0, y: 28, scale: 0.9 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.5,
//           stagger: 0.06,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 80%",
//           },
//         }
//       )
//     }, el)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section ref={ref} className="bg-[#072448] py-20 lg:py-28">
//       <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
//         <div className="mx-auto mb-10 max-w-2xl text-center">
//           <span className="label-chip type-label font-semibold text-white">
//             {techStackData.sectionLabel}
//           </span>

//           <h2 className="mt-4 type-heading font-bold text-white">
//             {techStackData.title}
//           </h2>
//         </div>

//         {/* Filters */}
//         <div className="mb-10 flex flex-wrap justify-center gap-2">
//           {allFilters.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActiveFilter(f)}
//               className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-200 ${
//                 f === activeFilter
//                   ? "bg-[#1e3a6e] text-white shadow-[0_4px_16px_rgba(59,103,255,0.4)]"
//                   : "border border-white/15 text-white hover:border-white/35 hover:text-white"
//               }`}
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         {/* Cards */}
//         <div
//           ref={gridRef}
//           className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
//         >
//           {filtered.map((s) => (
//             <div
//               key={s.name}
//               className="tech-card flex cursor-default flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2 shadow-md">
//                 <Image
//                   src={s.icon}
//                   alt={s.name}
//                   width={36}
//                   height={36}
//                   className="h-9 w-9 object-contain"
//                   unoptimized
//                 />
//               </div>

//               <span className="text-[12px] font-semibold text-white/80">
//                 {s.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }