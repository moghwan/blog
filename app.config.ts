export default defineAppConfig({
  alpine: {
    title: 'moghwan\'s blog',
    // description: 'The minimalist blog theme',
    header: {
      position: 'left',
      logo: {
        path: '/logo.png', // path of the logo
        pathDark: '/logo-dark.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'moghwan\'s blog' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false,
      },
      navigation: false,
      alignment: 'center',
      message: ''
    },
    socials: {
      twitter: 'moghwan',
      github: 'moghwan',
      instagram: '_moghwan',
      linkedin: {
        icon: 'uil:linkedin',
        href: 'https://www.linkedin.com/in/moghwan'
      }
    },
  }
})
