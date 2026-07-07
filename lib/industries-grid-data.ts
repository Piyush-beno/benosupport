import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Gamepad2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  LineChart,
  Plane,
  Radio,
  Shield,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react"

export type IndustryGridItem = {
  icon: LucideIcon
  label: string
}

export const INDUSTRY_GRID_ITEMS: IndustryGridItem[] = [
  { icon: Landmark, label: "Fintech" },
  { icon: ShieldCheck, label: "IT SaaS" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "EdTech" },
  { icon: Building2, label: "Government" },
  { icon: Plane, label: "Travel" },
  { icon: Hotel, label: "Hospitality" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Radio, label: "Telecom" },
  { icon: LineChart, label: "Aviation" },
  { icon: Shield, label: "Insurance" },
  { icon: Gamepad2, label: "Gaming" },
]
