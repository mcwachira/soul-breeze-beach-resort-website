import uniqBy from 'lodash/uniqBy';
import difference from 'lodash/difference';

const serializeMarkdownNodes = (node) => {
    if (!node.slug && !node.fields.slug) {
        throw Error(`\`slug\` is a required field`);
    }

    if (!node.slug) {
        node.slug = node.fields.slug;
        delete node.fields.slug;
    }

    if (node.frontmatter) {
        if (node.frontmatter.published_at) {
            node.published_at = node.frontmatter.published_at;
            delete node.frontmatter.published_at;
        }
        if (node.frontmatter.feature_image) {
            node.feature_image = node.frontmatter.feature_image;
            delete node.frontmatter.feature_image;
        }
    }

    return node;
};

const serializeSources = ({ mapping, additionalSitemaps = [] }) => {
    let sitemaps = [];

    for (let resourceType in mapping) {
        sitemaps.push(mapping[resourceType]);
    }

    sitemaps = sitemaps.map((source) => {
        // Ignore the key and only return the name and
        // source as we need those to create the index
        // and the belonging sources accordingly
        return {
            name: source.name || source.sitemap,
            sitemap: source.sitemap || `pages`,
        };
    });

    if (Array.isArray(additionalSitemaps)) {
        additionalSitemaps.forEach((addSitemap, index) => {
            if (!addSitemap.url) {
                throw new Error(`URL is required for additional Sitemap: `, addSitemap);
            }
            sitemaps.push({
                name: `external-${addSitemap.name || addSitemap.sitemap || `pages-${index}`}`,
                url: addSitemap.url,
            });
        });
    }

    sitemaps = uniqBy(sitemaps, `name`);

    return sitemaps;
};

// Add all other URLs that Gatsby generated, using siteAllPage,
// but we didn't fetch with our queries
const addPageNodes = (parsedNodesArray, allSiteNodes, siteUrl) => {
    const [parsedNodes] = parsedNodesArray;
    const pageNodes = [];
    const addedPageNodes = { pages: [] };

    const usedNodes = allSiteNodes.filter(({ node }) => {
        for (let type in parsedNodes) {
            let foundOne = parsedNodes[type].find((fetchedNode => node.url === fetchedNode.node.path));
            if (foundOne){
                return true;
            }
        }
        return false;
    });

    const remainingNodes = difference(allSiteNodes, usedNodes);

    addedPageNodes.pages = remainingNodes.map(({ node }) => {
        return {
            url: new URL(node.url,siteUrl).toString(),
            node: node,
        };
    });

    pageNodes.push(addedPageNodes);

    return pageNodes;
};

export { serializeMarkdownNodes, serializeSources, addPageNodes };