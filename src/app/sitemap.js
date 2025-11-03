export default async function sitemap() {
  const baseUrl = "https://www.funaljazirah.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    { url: `${baseUrl}/#about`, priority: 0.9 },
    { url: `${baseUrl}/#services`, priority: 0.9 },
    { url: `${baseUrl}/#stats`, priority: 0.8 },
    { url: `${baseUrl}/#whyus`, priority: 0.8 },
    { url: `${baseUrl}/#contactCTA`, priority: 0.8 },
    { url: `${baseUrl}/#contact`, priority: 0.8 },
  ];
}
