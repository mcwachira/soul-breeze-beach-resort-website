"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.XSLFILE = exports.RESOURCESFILE = exports.PUBLICPATH = exports.DEFAULTQUERY = exports.DEFAULTMAPPING = void 0;

var _path = _interopRequireDefault(require("path"));

// These are the default options which can be overwritten
// in gatsby-config.js
var defaultOptions = {
  query: "\n    {\n        allSitePage {\n            edges {\n                node {\n                    id\n                    slug: path\n                    url: path\n                }\n            }\n        }\n    }",
  mapping: {
    allSitePage: {
      sitemap: "pages"
    }
  },
  output: "/sitemap.xml",
  exclude: ["/dev-404-page", "/404", "/404.html", "/offline-plugin-app-shell-fallback"],
  createLinkInHead: true
};
var PUBLICPATH = "./public";
exports.PUBLICPATH = PUBLICPATH;
var RESOURCESFILE = "/sitemap-:resource.xml";
exports.RESOURCESFILE = RESOURCESFILE;

var XSLFILE = _path.default.resolve(__dirname, "./static/sitemap.xsl");

exports.XSLFILE = XSLFILE;
var DEFAULTQUERY = "{\n  allSitePage {\n    edges {\n      node {\n        id\n        slug: path\n        url: path\n      }\n    }\n  }\n  site {\n    siteMetadata {\n      siteUrl\n    }\n  }\n}";
exports.DEFAULTQUERY = DEFAULTQUERY;
var DEFAULTMAPPING = {
  allSitePage: {
    sitemap: "pages"
  }
};
exports.DEFAULTMAPPING = DEFAULTMAPPING;
var _default = defaultOptions;
exports.default = _default;