module.exports = {
  siteMetadata: {
    title: 'Sit Play Rescue',
    description:
      'SitPlayRescue - Dog Trainer, Walker and Matchmaker Extraordinaire',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sit Play Rescue',
        short_name: 'sitplayrescue',
        start_url: '/',
        background_color: '#E66FA4',
        theme_color: '#E66FA4',
        display: 'minimal-ui',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        // icon: 'src/images/sitplaylove-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        head: true,
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
