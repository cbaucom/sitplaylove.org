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
        name: 'Sit Play Love',
        short_name: 'sitplaylove',
        start_url: '/',
        background_color: '#E66FA4',
        theme_color: '#E66FA4',
        display: 'minimal-ui',
        icon: 'src/images/sitplaylove-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124163033-1",
        head: true,
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
