// Generated by CoffeeScript 1.7.1
(function() {
  var parse, stringify;

  parse = require('css-parse');

  stringify = require('css-stringify');

  module.exports = function(css, split) {
    var media, mediaRules, medias, parsed, res, rootRules, rule, rules, _i, _j, _len, _len1, _ref;
    parsed = parse(css);
    medias = {};
    rootRules = [];
    _ref = parsed.stylesheet.rules;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      rule = _ref[_i];
      if (rule.type === 'media') {
        if (!medias[rule.media]) {
          medias[rule.media] = [];
        }
        medias[rule.media] = medias[rule.media].concat(rule.rules);
      } else {
        rootRules.push(rule);
      }
    }
    mediaRules = [];
    for (media in medias) {
      rules = medias[media];
      mediaRules.push({
        type: "media",
        media: media,
        rules: rules
      });
    }
    if (!split) {
      return stringify(parsed);
    } else {
      res = [rootRules];
      res.push;
      for (_j = 0, _len1 = mediaRules.length; _j < _len1; _j++) {
        rule = mediaRules[_j];
        res.push(rule);
      }
      return res;
    }
  };

}).call(this);
