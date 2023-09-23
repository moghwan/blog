export default defineAppConfig({
  alpine: {
    title: 'moghwan\'s blog',
    // description: 'The minimalist blog theme',
    header: {
      position: 'center',
      logo: false
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
    backToTop: false
  }
})
