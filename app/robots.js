export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://farnorthit.com.au/sitemap.xml",
    host: "https://farnorthit.com.au"
  };
}
