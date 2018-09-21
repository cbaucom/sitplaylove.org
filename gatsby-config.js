module.exports = {
  siteMetadata: {
    title: 'Sit Play Love',
    description: 'SitPlayLove - Dog Trainer, Walker and Matchmaker Extraordinaire'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'sit-play-love-sarah-baucom',
        short_name: 'sitplaylove',
        start_url: '/',
        background_color: '#ffdaef',
        theme_color: '#ffdaef',
        display: 'minimal-ui',
        icon: 'src/images/sitplaylove-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
