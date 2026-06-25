import {
  ArrowDown,
  Gauge,
  User,
  Eye,
  Shield,
  Database,
  TrendingUp,
  Clock,
} from "lucide-react";

export default function BusinessOutcomes() {
  const outcomes = [
    {
      title: "Reduce Manual Effort by Up to 60%",
      icon: ArrowDown,
      position: "top",
    },
    {
      title: "Accelerate Process Efficiency",
      icon: Gauge,
      position: "right-top",
    },
    {
      title: "Improve Customer Experience",
      icon: User,
      position: "right-middle",
    },
    {
      title: "Increase Operational Visibility",
      icon: Eye,
      position: "right-bottom",
    },
    {
      title: "Enhance Security Posture",
      icon: Shield,
      position: "bottom",
    },
    {
      title: "Reduce Infrastructure Costs",
      icon: Database,
      position: "left-bottom",
    },
    {
      title: "Improve Business Agility",
      icon: TrendingUp,
      position: "left-middle",
    },
    {
      title: "Accelerate Time-to-Market",
      icon: Clock,
      position: "left-top",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden scale-[0.9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <p className="text-blue-600 text-sm font-bold tracking-[3px] uppercase">
            Business Outcomes
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Measurable Business Impact
          </h2>

          <p className="mt-4 text-slate-500 text-lg max-w-2xl">
            Our solutions are designed to deliver measurable results that
            directly support business growth and operational excellence.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center relative min-h-[750px]">

          {/* Center Circle */}
          <div className="relative z-10">
            <div className="w-[340px] h-[340px] rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-xl">
              <div className="w-[240px] h-[240px] rounded-full bg-gradient-to-br from-[#0A2D67] to-[#001B4D] flex items-center justify-center text-center shadow-2xl">
                <h3 className="text-white text-2xl font-bold leading-tight">
                  Outcome
                  

                  Metrics
                </h3>
              </div>
            </div>
          </div>

          {/* Orbit Ring */}
          <div className="absolute w-[560px] h-[560px] rounded-full border border-dashed border-slate-300"></div>

          {/* Top */}
          <Card
            icon={ArrowDown}
            title="Reduce Manual Effort by Up to 60%"
            className="absolute top-0 left-1/2 -translate-x-1/2"
          />

          {/* Right Top */}
          <Card
            icon={Gauge}
            title="Accelerate Process Efficiency"
            className="absolute top-[150px] right-0"
          />

          {/* Right Mid */}
          <Card
            icon={User}
            title="Improve Customer Experience"
            className="absolute top-[330px] right-[-20px]"
          />

          {/* Right Bottom */}
          <Card
            icon={Eye}
            title="Increase Operational Visibility"
            className="absolute bottom-[80px] right-[80px]"
          />

          {/* Bottom */}
          <Card
            icon={Shield}
            title="Enhance Security Posture"
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />

          {/* Left Bottom */}
          <Card
            icon={Database}
            title="Reduce Infrastructure Costs"
            className="absolute bottom-[80px] left-[80px]"
          />

          {/* Left Mid */}
          <Card
            icon={TrendingUp}
            title="Improve Business Agility"
            className="absolute top-[330px] left-[-20px]"
          />

          {/* Left Top */}
          <Card
            icon={Clock}
            title="Accelerate Time-to-Market"
            className="absolute top-[150px] left-0"
          />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden grid gap-5">
          <div className="mx-auto w-56 h-56 rounded-full bg-gradient-to-br from-[#0A2D67] to-[#001B4D] flex items-center justify-center">
            <h3 className="text-white text-xl  text-center">
              Outcome
              

              Metrics
            </h3>
          </div>

          {outcomes.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              className=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  className,
}: {
  icon: any;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`w-[320px] bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>

        <h4 className="text-lg  text-slate-900 leading-snug">
          {title}
        </h4>
      </div>
    </div>
  );
}