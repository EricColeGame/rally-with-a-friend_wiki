export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "RALLY WITH A FRIEND Wiki",
  shortName: "Rally With A Friend",
  logoText: "R",
  tagline: "Guides, Vehicles, Tips & Updates",
  description: "Explore RALLY WITH A FRIEND Wiki for racing guides, gameplay tips, vehicle information, updates, and multiplayer co-op strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rally-with-a-friend.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rally-with-a-friend.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/135718946945419/RALLY-WITH-A-FRIEND",
  heroVideoId: "mwrXo5_B5i0", // Roblox RALLY WITH A FRIEND gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
