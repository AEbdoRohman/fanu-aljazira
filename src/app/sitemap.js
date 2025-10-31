export default async function sitemap() {
  const baseUrl = "https://www.tabreedkom.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    { url: `${baseUrl}/#about`, priority: 0.9 },
    { url: `${baseUrl}/#services`, priority: 0.9 },
    { url: `${baseUrl}/#achievements`, priority: 0.8 },
    { url: `${baseUrl}/#why-us`, priority: 0.8 },
    { url: `${baseUrl}/#contact`, priority: 0.8 },
  ];
}
