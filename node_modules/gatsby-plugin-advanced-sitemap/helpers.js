"use strict";

exports.__esModule = true;
exports.getNodePath = void 0;

// Compare our node paths with the ones that Gatsby has generated and updated them
// with the "real" used ones.
var getNodePath = function getNodePath(node, allSitePage) {
  if (!node.path || node.path === "/") {
    return node;
  }

  var nodePath = allSitePage.get(node.path.replace(/\/$/, ""));

  if (getNodePath) {
    node.path = nodePath;
  }

  return node;
};

exports.getNodePath = getNodePath;