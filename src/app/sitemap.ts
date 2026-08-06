import type { MetadataRoute } from "next";
import { posts } from "@/content/notes";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {

  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/notes/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postEntries,
  ];
}
