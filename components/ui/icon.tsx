import {
  Activity,
  CircleAlert,
  Clock,
  FileCheck,
  Moon,
  RefreshCw,
  Scan,
  ShieldAlert,
  ShieldCheck,
  Smile,
  SquareCheck,
  TriangleAlert,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/types/content";

const icons: Record<IconName, LucideIcon> = {
  Activity,
  CircleAlert,
  Clock,
  FileCheck,
  Moon,
  RefreshCw,
  Scan,
  ShieldAlert,
  ShieldCheck,
  Smile,
  SquareCheck,
  TriangleAlert,
};

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const IconComponent = icons[name];
  return <IconComponent aria-hidden="true" {...props} />;
}

