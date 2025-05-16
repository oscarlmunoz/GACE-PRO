import { clientEnv } from "@/env/client";
import {
  LucideBookOpen,
  LucideCreditCard,
  LucideHome,
  type LucideIcon,
  LucideInfo,
  LucideMessageSquare,
} from "lucide-react";

export interface Link {
  label: string;
  href: string;
  icon?: LucideIcon;
}

// Conditionally return links based on feature flags
export const blogLink: Link | null = clientEnv.NEXT_PUBLIC_ENABLE_BLOG_PAGE
  ? {
      label: "Blog",
      href: "/blog",
      icon: LucideBookOpen,
    }
  : null;

export const pricingLink: Link | null =
  clientEnv.NEXT_PUBLIC_ENABLE_PRICING_PAGE
    ? {
        label: "Precios",
        href: "/pricing",
        icon: LucideCreditCard,
      }
    : null;

export const aboutLink: Link | null = clientEnv.NEXT_PUBLIC_ENABLE_ABOUT_PAGE
  ? {
      label: "Sobre nosotros",
      href: "/about",
      icon: LucideInfo,
    }
  : null;

export const homeLink: Link = {
  label: "Home",
  href: "/home",
  icon: LucideHome,
};

export const chatLink: Link | null = clientEnv.NEXT_PUBLIC_ENABLE_CHAT_PAGE
  ? {
      label: "Chat",
      href: "/chat",
      icon: LucideMessageSquare,
    }
  : null;
