import { USER } from "@/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
    name: USER.displayName,
    url: process.env.APP_URL || "https://neha-chaudhary.dev",
    ogImage: USER.ogImage,
    description: USER.bio,
    keywords: USER.keywords,
};

export const META_THEME_COLORS = {
    light: "#F5F3EF",
    dark: "#0D0D0C",
};

export const MAIN_NAV: NavItem[] = [
    {
        title: "Home",
        href: "/#hero",
    },
    {
        title: "About",
        href: "/#about",
    },
    {
        title: "Experience",
        href: "/#experience",
    },
    {
        title: "Projects",
        href: "/#projects",
    },
    {
        title: "Skills",
        href: "/#skills",
    },
    {
        title: "Education",
        href: "/#education",
    },
    {
        title: "Contact",
        href: "/#contact",
    },
];

export const GITHUB_USERNAME = "nehaa3012";
export const SOURCE_CODE_GITHUB_REPO = "portfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/nehaa3012";

