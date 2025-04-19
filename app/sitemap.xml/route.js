// app/sitemap.xml/route.ts

import { NextResponse } from "next/server";

export async function GET() {
	const today = new Date().toISOString();

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <url>
    <loc>https://www.jordandevaney.com/</loc>
    <lastmod>${today}</lastmod>
  </url>

</urlset>`;

	return new NextResponse(xml, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
