module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/static/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/static/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/static/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  return {
    dir: {
      input: "src"
    }
  };
};
