import {
  Building2,
  CircleHelp,
  House,
  Images,
  Mail,
  Ruler,
  Workflow,
  type LucideIcon,
} from "lucide-react";
export const navigationIcons: Record<string, LucideIcon> = {
  "/": House,
  "/about": Building2,
  "/services": Ruler,
  "/projects": Images,
  "/process": Workflow,
  "/faq": CircleHelp,
  "/contact": Mail,
};
