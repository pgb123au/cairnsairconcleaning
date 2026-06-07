// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cairnsairconcleaning.com.au',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap({
      customPages: [
  "https://cairnsairconcleaning.com.au/",
  "https://cairnsairconcleaning.com.au/about/",
  "https://cairnsairconcleaning.com.au/aircon-wont-cool-cairns/",
  "https://cairnsairconcleaning.com.au/annual-aircon-service-cairns/",
  "https://cairnsairconcleaning.com.au/earlville/",
  "https://cairnsairconcleaning.com.au/edge-hill/",
  "https://cairnsairconcleaning.com.au/greater-cairns/",
  "https://cairnsairconcleaning.com.au/local-trades/",
  "https://cairnsairconcleaning.com.au/mooroobool/",
  "https://cairnsairconcleaning.com.au/privacy/",
  "https://cairnsairconcleaning.com.au/quote/",
  "https://cairnsairconcleaning.com.au/refrigerant-leak-detect-cairns/",
  "https://cairnsairconcleaning.com.au/services/annual-service-plan/",
  "https://cairnsairconcleaning.com.au/services/ducted-system-clean/",
  "https://cairnsairconcleaning.com.au/services/mould-treatment/",
  "https://cairnsairconcleaning.com.au/services/refrigerant-recharge/",
  "https://cairnsairconcleaning.com.au/services/split-system-clean/",
  "https://cairnsairconcleaning.com.au/smithfield/",
  "https://cairnsairconcleaning.com.au/split-system-installer-arc-cairns/",
  "https://cairnsairconcleaning.com.au/trinity-beach/",
  "https://cairnsairconcleaning.com.au/pricing/"
],
      filter: (page) => !page.includes('/thanks/') && !page.includes('/404'),
    })],
});
