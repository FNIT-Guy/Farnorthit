export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://farnorthit.com.au",
      lastModified: "2026-06-02",
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://farnorthit.com.au/reclaim/",
      lastModified: "2026-11-02",
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://farnorthit.com.au/reclaim/privacy/",
      lastModified: "2026-11-02",
      changeFrequency: "yearly",
      priority: 0.4
    }
  ];
}
