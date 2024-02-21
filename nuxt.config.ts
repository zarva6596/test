// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'icon',
          href: '/favicon.svg',
        },
        {
          rel: 'stylesheet',
          href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
        },
      ],
      script: [
        {
          src: 'https://www.paypal.com/sdk/js?client-id=sb&vault=true&intent=subscription',
          'data-sdk-integration-source': 'button-factory',
        },
      ],
    },
  },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  components: {
    global: true,
    dirs: [
      '~/components/general',
    ],
  },
  runtimeConfig: {
    public: {
      // cloudflareKey: process.env.CLOUDFLARE_KEY,
    },
  },
});
