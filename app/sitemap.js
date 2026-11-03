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
      url: "https://farnorthit.com.au/tembrilo/",
      lastModified: "2026-11-03",
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://farnorthit.com.au/tembrilo/privacy/",
      lastModified: "2026-11-03",
      changeFrequency: "yearly",
      priority: 0.4
    }
  ];
}
