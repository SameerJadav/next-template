import { siteConfig } from "~/config"

// eslint-disable-next-line @typescript-eslint/require-await
export default async function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ]
}
