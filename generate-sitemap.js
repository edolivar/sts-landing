// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/plan-info', changefreq: 'monthly', priority: 0.8 },
  { url: '/cyber-info', changefreq: 'monthly', priority: 0.7 },
  { url: '/managed-info', changefreq: 'monthly', priority: 0.7 },
  { url: '/assetmgmt-info', changefreq: 'monthly', priority: 0.7 },
  { url: '/mfa-info', changefreq: 'monthly', priority: 0.7 },

  // Add more static routes as needed
];

const stream = new SitemapStream({ hostname: 'https://stsit.biz' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  createWriteStream('./dist/sitemap.xml').write(data.toString());
});

