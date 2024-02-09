// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Kanit: true,
    },
    display: 'swap',
  },
});