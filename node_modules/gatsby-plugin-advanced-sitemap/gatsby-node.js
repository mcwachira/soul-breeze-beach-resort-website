"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _defaults = _interopRequireWildcard(require("./defaults"));

var _SiteMapManager = _interopRequireDefault(require("./SiteMapManager"));

var utils = _interopRequireWildcard(require("./utils"));

var _serializers = require("./serializers");

var _helpers = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var siteURL;

var copyStylesheet = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
    var siteUrl, pathPrefix, indexOutput, siteRegex, data, sitemapStylesheet;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            siteUrl = _ref.siteUrl, pathPrefix = _ref.pathPrefix, indexOutput = _ref.indexOutput;
            siteRegex = /(\{\{blog-url\}\})/g; // Get our stylesheet template

            _context.next = 4;
            return utils.readFile(_defaults.XSLFILE);

          case 4:
            data = _context.sent;
            // Replace the `{{blog-url}}` variable with our real site URL
            sitemapStylesheet = data.toString().replace(siteRegex, new URL(_path.default.join(pathPrefix, indexOutput), siteUrl).toString()); // Save the updated stylesheet to the public folder, so it will be
            // available for the xml sitemap files

            _context.next = 8;
            return utils.writeFile(_path.default.join(_defaults.PUBLICPATH, "sitemap.xsl"), sitemapStylesheet);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function copyStylesheet(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var runQuery = function runQuery(handler, _ref3) {
  var query = _ref3.query,
      mapping = _ref3.mapping,
      exclude = _ref3.exclude;
  return handler(query).then(function (r) {
    if (r.errors) {
      throw new Error(r.errors.join(", "));
    }

    var _loop = function _loop(source) {
      var _mapping$source, _r$data, _r$data$source;

      // Check for custom serializer
      if (typeof (mapping === null || mapping === void 0 ? void 0 : (_mapping$source = mapping[source]) === null || _mapping$source === void 0 ? void 0 : _mapping$source.serializer) === "function") {
        if (r.data[source] && Array.isArray(r.data[source].edges)) {
          var serializedEdges = mapping[source].serializer(r.data[source].edges);

          if (!Array.isArray(serializedEdges)) {
            throw new Error("Custom sitemap serializer must return an array");
          }

          r.data[source].edges = serializedEdges;
        }
      } // Removing excluded paths


      if ((_r$data = r.data) !== null && _r$data !== void 0 && (_r$data$source = _r$data[source]) !== null && _r$data$source !== void 0 && _r$data$source.edges && r.data[source].edges.length) {
        r.data[source].edges = r.data[source].edges.filter(function (_ref4) {
          var node = _ref4.node;
          return !exclude.some(function (excludedRoute) {
            var _node$fields;

            var sourceType = node.__typename ? "all" + node.__typename : source;
            var slug = sourceType === "allMarkdownRemark" || sourceType === "allMdx" || node !== null && node !== void 0 && (_node$fields = node.fields) !== null && _node$fields !== void 0 && _node$fields.slug ? node.fields.slug.replace(/^\/|\/$/, "") : node.slug.replace(/^\/|\/$/, "");
            excludedRoute = typeof excludedRoute === "object" ? excludedRoute : excludedRoute.replace(/^\/|\/$/, ""); // test if the passed regular expression is valid

            if (typeof excludedRoute === "object") {
              var excludedRouteIsValidRegEx = true;

              try {
                new RegExp(excludedRoute);
              } catch (e) {
                excludedRouteIsValidRegEx = false;
              }

              if (!excludedRouteIsValidRegEx) {
                throw new Error("Excluded route is not a valid RegExp: ", excludedRoute);
              }

              return excludedRoute.test(slug);
            } else {
              return slug.indexOf(excludedRoute) >= 0;
            }
          });
        });
      }
    };

    for (var source in r.data) {
      _loop(source);
    }

    return r.data;
  });
};

var serialize = function serialize(_temp, _ref5, _ref6) {
  var _ref7 = _temp === void 0 ? {} : _temp,
      sources = (0, _extends2.default)({}, _ref7);

  var site = _ref5.site,
      allSitePage = _ref5.allSitePage;
  var mapping = _ref6.mapping,
      addUncaughtPages = _ref6.addUncaughtPages;
  var nodes = [];
  var sourceObject = {};
  var allSitePagePathNodeMap = new Map();
  allSitePage.edges.forEach(function (page) {
    var _page$node;

    if (page !== null && page !== void 0 && (_page$node = page.node) !== null && _page$node !== void 0 && _page$node.url) {
      var pathurl = page.node.url.replace(/\/$/, "");
      allSitePagePathNodeMap.set(pathurl, pathurl);
    }
  });
  siteURL = site.siteMetadata.siteUrl;

  var _loop2 = function _loop2(type) {
    var _mapping$type;

    if (mapping !== null && mapping !== void 0 && (_mapping$type = mapping[type]) !== null && _mapping$type !== void 0 && _mapping$type.sitemap) {
      var currentSource = sources[type] ? sources[type] : [];

      if (currentSource) {
        sourceObject[mapping[type].sitemap] = sourceObject[mapping[type].sitemap] || [];
        currentSource.edges.map(function (_ref8) {
          var node = _ref8.node;

          if (!node) {
            return;
          }

          var nodeType = node.__typename ? "all" + node.__typename : type;

          if (nodeType === "allMarkdownRemark" || nodeType === "allMdx") {
            node = (0, _serializers.serializeMarkdownNodes)(node);
          } // if a mapping path is set, e. g. `/blog/tag` for tags, update the path
          // to reflect this. This prevents mapping issues, when we later update
          // the path with the Gatsby generated one in `getNodePath`


          if (mapping[type].path) {
            node.path = _path.default.resolve(mapping[type].path, node.slug);
          } else {
            node.path = node.slug;
          }

          if (typeof mapping[type].prefix === "string" && mapping[type].prefix !== "") {
            node.path = mapping[type].prefix + node.path;
          } // get the real path for the node, which is generated by Gatsby


          node = (0, _helpers.getNodePath)(node, allSitePagePathNodeMap);
          sourceObject[mapping[type].sitemap].push({
            url: new URL(node.path, siteURL).toString(),
            node: node
          });
        });
      }
    }
  };

  for (var type in sources) {
    _loop2(type);
  }

  nodes.push(sourceObject); // Get all additionally created page URLs that have been generated by Gatsby

  if (addUncaughtPages) {
    var pageNodes = (0, _serializers.addPageNodes)(nodes, allSitePage.edges, siteURL);

    if (pageNodes[0].pages && pageNodes[0].pages.length > 0) {
      if (nodes[0].pages) {
        nodes[0].pages = nodes[0].pages.concat(pageNodes[0].pages);
      } else {
        nodes[0].pages = pageNodes[0].pages;
      }
    }
  }

  nodes[0].pages = (0, _uniqBy.default)(nodes[0].pages, "url");
  return nodes;
};

exports.onPostBuild = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref9, pluginOptions) {
    var graphql, pathPrefix, queryRecords, options, indexSitemapFile, resourcesSitemapFile, defaultQueryRecords, manager, resourcesSiteMapsArray, indexSiteMap, _i, _resourcesSiteMapsArr, sitemap, filePath;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            graphql = _ref9.graphql, pathPrefix = _ref9.pathPrefix;
            // Passing the config option addUncaughtPages will add all pages which are not covered by passed mappings
            // to the default `pages` sitemap. Otherwise they will be ignored.
            options = pluginOptions.addUncaughtPages ? (0, _merge.default)(_defaults.default, pluginOptions) : Object.assign({}, _defaults.default, pluginOptions);
            indexSitemapFile = _path.default.join(_defaults.PUBLICPATH, pathPrefix, options.output);
            resourcesSitemapFile = _path.default.join(_defaults.PUBLICPATH, pathPrefix, _defaults.RESOURCESFILE);
            delete options.plugins;
            delete options.createLinkInHead;
            options.indexOutput = options.output;
            options.resourcesOutput = _defaults.RESOURCESFILE; // We always query siteAllPage as well as the site query to
            // get data we need and to also allow not passing any custom
            // query or mapping

            _context2.next = 10;
            return runQuery(graphql, {
              query: _defaults.DEFAULTQUERY,
              exclude: options.exclude
            });

          case 10:
            defaultQueryRecords = _context2.sent;

            if (!(!options.query || !options.mapping)) {
              _context2.next = 15;
              break;
            }

            options.mapping = options.mapping || _defaults.DEFAULTMAPPING;
            _context2.next = 18;
            break;

          case 15:
            _context2.next = 17;
            return runQuery(graphql, options);

          case 17:
            queryRecords = _context2.sent;

          case 18:
            // Instanciate the Ghost Sitemaps Manager
            manager = new _SiteMapManager.default(options);
            _context2.next = 21;
            return serialize(queryRecords, defaultQueryRecords, options).forEach(function (source) {
              var _loop3 = function _loop3(type) {
                source[type].forEach(function (node) {
                  // "feed" the sitemaps manager with our serialized records
                  manager.addUrls(type, node);
                });
              };

              for (var type in source) {
                _loop3(type);
              }
            });

          case 21:
            // The siteUrl is only available after we have the returned query results
            options.siteUrl = siteURL;
            options.pathPrefix = pathPrefix;
            _context2.next = 25;
            return copyStylesheet(options);

          case 25:
            resourcesSiteMapsArray = []; // Because it's possible to map duplicate names and/or sources to different
            // sources, we need to serialize it in a way that we know which source names
            // we need and which types they are assigned to, independently from where they
            // come from

            options.sources = (0, _serializers.serializeSources)(options);
            options.sources.forEach(function (type) {
              if (!type.url) {
                // for each passed name we want to receive the related source type
                resourcesSiteMapsArray.push({
                  type: type.name,
                  xml: manager.getSiteMapXml(type.sitemap, options)
                });
              }
            });
            indexSiteMap = manager.getIndexXml(options); // Save the generated xml files in the public folder

            _context2.prev = 29;
            _context2.next = 32;
            return utils.outputFile(indexSitemapFile, indexSiteMap);

          case 32:
            _context2.next = 37;
            break;

          case 34:
            _context2.prev = 34;
            _context2.t0 = _context2["catch"](29);
            console.error(_context2.t0);

          case 37:
            _i = 0, _resourcesSiteMapsArr = resourcesSiteMapsArray;

          case 38:
            if (!(_i < _resourcesSiteMapsArr.length)) {
              _context2.next = 52;
              break;
            }

            sitemap = _resourcesSiteMapsArr[_i];
            filePath = resourcesSitemapFile.replace(/:resource/, sitemap.type); // Save the generated xml files in the public folder

            _context2.prev = 41;
            _context2.next = 44;
            return utils.outputFile(filePath, sitemap.xml);

          case 44:
            _context2.next = 49;
            break;

          case 46:
            _context2.prev = 46;
            _context2.t1 = _context2["catch"](41);
            console.error(_context2.t1);

          case 49:
            _i++;
            _context2.next = 38;
            break;

          case 52:
            return _context2.abrupt("return");

          case 53:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[29, 34], [41, 46]]);
  }));

  return function (_x2, _x3) {
    return _ref10.apply(this, arguments);
  };
}();