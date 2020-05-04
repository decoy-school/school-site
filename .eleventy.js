const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-table-of-contents");
const markdownItFigures = require("markdown-it-implicit-figures");

module.exports = function (eleventyConfig) {
  const mdIt = markdownIt({
    html: true,
    typographer: true,
  })
    .use(markdownItAnchor, {
      level: [2, 3, 4, 5],
    })
    .use(markdownItToc, {
      includeLevel: [2],
      containerHeaderHtml: `<h4>What's on this page?</h4>`,
    })
    .use(markdownItFigures);
  eleventyConfig.setLibrary("md", mdIt);
  eleventyConfig.addPassthroughCopy({ "src/static/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/static/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/static/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  return {
    dir: {
      input: "src",
    },
  };
};
