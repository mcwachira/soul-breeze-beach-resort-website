import path from 'path';

// These are the default options which can be overwritten
// in gatsby-config.js
const defaultOptions = {
    query: `
    {
        allSitePage {
            edges {
                node {
                    id
                    slug: path
                    url: path
                }
            }
        }
    }`,
    mapping: {
        allSitePage: {
            sitemap: `pages`,
        },
    },
    output: `/sitemap.xml`,
    exclude: [
        `/dev-404-page`,
        `/404`,
        `/404.html`,
        `/offline-plugin-app-shell-fallback`,
    ],
    createLinkInHead: true,
};

const PUBLICPATH = `./public`;
const RESOURCESFILE = `/sitemap-:resource.xml`;
const XSLFILE = path.resolve(__dirname, `./static/sitemap.xsl`);
const DEFAULTQUERY = `{
  allSitePage {
    edges {
      node {
        id
        slug: path
        url: path
      }
    }
  }
  site {
    siteMetadata {
      siteUrl
    }
  }
}`;
const DEFAULTMAPPING = {
    allSitePage: {
        sitemap: `pages`,
    },
};

export default defaultOptions;

export { DEFAULTMAPPING,DEFAULTQUERY,PUBLICPATH,RESOURCESFILE,XSLFILE };
