export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://open-gamer.com").replace(/\/$/, "");

const deploymentEnv = process.env.VERCEL_ENV ?? process.env.NEXT_PUBLIC_DEPLOYMENT_ENV;

export const isIndexableProduction =
  deploymentEnv === "production" && siteUrl === "https://open-gamer.com";

export const robotsConfig = isIndexableProduction
  ? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    }
  : {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false
      }
    };
