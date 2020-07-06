module.exports = {
  siteMetadata: {
    title: `100 Days of Cloud`,
    titleTemplate: `100 Days of Cloud Official Blog`,
    description: `The official site of #100daysofcloud`,
    author: `@gatsbyjs`,
    image: "/data/images/banner/home-banner.jpg",
    siteUrl: "https://100daysofcloud.com/",
    twitterUsername: `@coffeecraftcode`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "100daysofcloud.com",
        protocol: "https",
        hostname: "100daysofcloud.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin`],
            variants: [`300`, `400`, `500`, `600`, `700`, `900`],
          },
          {
            family: `Marck Script`,
            subsets: [`latin`],
            variants: [`400`],
          },
          {
            family: `Dancing Script`,
            subsets: [`latin`],
            variants: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // type: `hashtag`,
        // hashtag: `naturesbeauty`,
        username: `rainbowit10`,
        // access_token: "EAAJfJNguJz4BAI3u9hxFCVJUwVgT39AzmO7nyRAPPEhHEiyyElx7cYSxbv5hHWMyopFM00R0wh7wfoghe7vfePBteFp9pKKkDJKdAPl0b1fKTkWu2s9nYhiYrxHnq28n3mZC4HUSYwxJeaurinARaOqxOzaVfwlBJZBEMApAZDZD",
        // instagram_id: "rainbowit5"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `100DaysOfCloud`,
        short_name: `100DaysOfCloud`,
        start_url: `/`,
        display: `standalone`,
        icons: [
          {
            src: "/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://localhost:8000/",
        sitemap: "http://localhost:8000/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
