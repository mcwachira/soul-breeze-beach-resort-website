module.exports = {
  siteMetadata: {
    title: `Soul Breeze Beach Resort`,
    description: `a Site showcasing Soul breeze backpackers a hotel in Diani offering cheap cheap accommodation `,
    author: `@mcwachira`,
    url: `https://www.soulbreezebeachresort.com`,
    keywords: `accommodation diani, beach resort, soulbreeze,soul breeze, best diani hotel, white sandy beaches, diani beach `,
    twitterUsername: "@mc_wachira",
  },
  plugins: [
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-plugin-external-css',
      options: {
        source: `${__dirname}/src/frontdesk/be-widget.css`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/assets/images/`, // wherever background images are stored
      },
    },
  ],
}
