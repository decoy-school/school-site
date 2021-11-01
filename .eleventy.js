const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-table-of-contents");
const markdownItFigures = require("markdown-it-implicit-figures");

module.exports = function (eleventyConfig) {
  const mdIt = markdownIt({
    html: true,
    typographer: true,
    linkify: true,
  })
    .use(markdownItAnchor, {
      level: [2, 3, 4, 5],
    })
    .use(markdownItToc, {
      includeLevel: [2],
      containerHeaderHtml: `<h4>What’s on this page?</h4>`,
    })
    .use(markdownItFigures);
  eleventyConfig.setLibrary("md", mdIt);
  eleventyConfig.addFilter("squash", squash);
  eleventyConfig.addPassthroughCopy({ "src/static/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/static/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/static/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ "src/static/*.ico": "/" });
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  // create collection of all pages
  eleventyConfig.addCollection("allPages", (collection) => {
    // filters out pages that have "permalink: false"
    return collection.getAll().filter((item) => item.url != false);
  });
  return {
    dir: {
      input: "src",
    },
  };
};

// squash filter, used for building search-index.json
// takes text input of page content, and
// removes all html tags, new lines and punctuation
// this was adapted from: https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/
function squash(text) {
  let content = new String(text).toLowerCase();
  let plain = content.replace(/(<([^>]+)>)/gi, " "); // replace html tags with spaces
  plain = plain.replace(/\t|\n/g, " "); // replace new lines, colons and tabs with spaces
  plain = plain.replace(/what’s on this page\?/, ""); // remove toc header
  plain = plain.replace(/\.|\,|\?|-|—|"|\(|\)|\*|\/|!|;|\&|–/g, ""); // remove punctation
  plain = plain.replace(/[ ]{2,}/g, " "); // remove duplicated spaces
  let words = plain.split(" ");
  let deduped = [...new Set(words)]; // remove duplicate words
  let dedupedStr = deduped.join(" ");
  let result = dedupedStr.replace(
    /\b(\.|\,|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi,
    ""
  ); // remove common words
  return result;
}
