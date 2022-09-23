"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.serializeSources = exports.serializeMarkdownNodes = exports.addPageNodes = void 0;

var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));

var _difference = _interopRequireDefault(require("lodash/difference"));

var serializeMarkdownNodes = function serializeMarkdownNodes(node) {
  if (!node.slug && !node.fields.slug) {
    throw Error("`slug` is a required field");
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

exports.serializeMarkdownNodes = serializeMarkdownNodes;

var serializeSources = function serializeSources(_ref) {
  var mapping = _ref.mapping,
      _ref$additionalSitema = _ref.additionalSitemaps,
      additionalSitemaps = _ref$additionalSitema === void 0 ? [] : _ref$additionalSitema;
  var sitemaps = [];

  for (var resourceType in mapping) {
    sitemaps.push(mapping[resourceType]);
  }

  sitemaps = sitemaps.map(function (source) {
    // Ignore the key and only return the name and
    // source as we need those to create the index
    // and the belonging sources accordingly
    return {
      name: source.name || source.sitemap,
      sitemap: source.sitemap || "pages"
    };
  });

  if (Array.isArray(additionalSitemaps)) {
    additionalSitemaps.forEach(function (addSitemap, index) {
      if (!addSitemap.url) {
        throw new Error("URL is required for additional Sitemap: ", addSitemap);
      }

      sitemaps.push({
        name: "external-" + (addSitemap.name || addSitemap.sitemap || "pages-" + index),
        url: addSitemap.url
      });
    });
  }

  sitemaps = (0, _uniqBy.default)(sitemaps, "name");
  return sitemaps;
}; // Add all other URLs that Gatsby generated, using siteAllPage,
// but we didn't fetch with our queries


exports.serializeSources = serializeSources;

var addPageNodes = function addPageNodes(parsedNodesArray, allSiteNodes, siteUrl) {
  var parsedNodes = parsedNodesArray[0];
  var pageNodes = [];
  var addedPageNodes = {
    pages: []
  };
  var usedNodes = allSiteNodes.filter(function (_ref2) {
    var node = _ref2.node;

    for (var type in parsedNodes) {
      var foundOne = parsedNodes[type].find(function (fetchedNode) {
        return node.url === fetchedNode.node.path;
      });

      if (foundOne) {
        return true;
      }
    }

    return false;
  });
  var remainingNodes = (0, _difference.default)(allSiteNodes, usedNodes);
  addedPageNodes.pages = remainingNodes.map(function (_ref3) {
    var node = _ref3.node;
    return {
      url: new URL(node.url, siteUrl).toString(),
      node: node
    };
  });
  pageNodes.push(addedPageNodes);
  return pageNodes;
};

exports.addPageNodes = addPageNodes;