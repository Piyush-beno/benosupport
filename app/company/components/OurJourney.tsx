import {
  Rocket,
  Monitor,
  Cloud,
  Shield,
  Brain,
  Globe,
} from "lucide-react";

const milestones = [
  {
    year: "2008",
    title: "Founded as an IT services and technology support company.",
    icon: Rocket,
    position: "bottom",
  },
  {
    year: "2012",
    title:
      "Expanded into enterprise software development and infrastructure services.",
    icon: Monitor,
    position: "top",
  },
  {
    year: "2016",
    title:
      "Started delivering cloud modernization and digital transformation solutions.",
    icon: Cloud,
    position: "bottom",
  },
  {
    year: "2020",
    title:
      "Strengthened enterprise engineering, DevOps, and cybersecurity capabilities.",
    icon: Shield,
    position: "top",
  },
  {
    year: "2023",
    title:
      "Expanded into AI automation, intelligent systems, and enterprise AI consulting.",
    icon: Brain,
    position: "bottom",
  },
  {
    year: "Present",
    title:
      "Delivering AI-first engineering, cloud-native platforms, cybersecurity, and digital transformation solutions globally.",
    icon: Globe,
    position: "top",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative py-28 bg-[#f8fafc] h-[90vh] w-full overflow-hidden ">
      {/* World Map */}
      <div
        className="absolute inset-0  bg-center bg-no-repeat bg-contain"
        style={{
          opacity: 0.03,
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="mt-[-70px]">
          <span className="text-xs font-bold tracking-[3px] uppercase text-blue-600">
            Our Journey Timeline
          </span>

          <h2 className="text-5xl font-bold text-[#0B2B5B] mt-3">
          Our Journey
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative h-[550px] scale-[0.8]">
          {/* Line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <path
              d="M80 500
              L260 320
              L430 430
              L650 180
              L850 330
              L1100 120"
              fill="none"
              stroke="#1976d2"
              strokeWidth="4"
            />
          </svg>

          {milestones.map((item, index) => {
            const positions = [
              { left: "5%", top: "68%" },
              { left: "22%", top: "35%" },
              { left: "36%", top: "55%" },
              { left: "54%", top: "13%" },
              { left: "71%", top: "39%" },
              { left: "92%", top: "3%" },
            ];

            const pos = positions[index];
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="absolute -translate-x-1/2"
                style={pos}
              >
                {/* Content Top */}
                {item.position === "top" && (
                  <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-64 text-center">
                    <h3 className="text-4xl font-bold text-[#0B2B5B]">
                      {item.year}
                    </h3>

                    <p className="text-gray-700 mt-3 leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                )}

                {/* Pin */}
                <div className="relative group">
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-white">
                    <div className="w-16 h-16 bg-[#0B2B5B] rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[22px] border-l-transparent border-r-transparent border-t-[#0B2B5B]" />

                  <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg" />

                  <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600" />
                </div>

                {/* Content Bottom */}
                {item.position === "bottom" && (
                  <div className="absolute top-36 left-1/2 -translate-x-1/2 w-64 text-center">
                    <h3 className="text-4xl font-bold text-[#0B2B5B]">
                      {item.year}
                    </h3>

                    <p className="text-gray-700 mt-3 leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-10">
          {milestones.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-lg border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#0B2B5B] flex items-center justify-center">
                    <Icon className="text-white w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B2B5B]">
                    {item.year}
                  </h3>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}