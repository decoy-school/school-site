module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/static/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/static/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/static/uploads": "uploads" });
  return {
    dir: {
      input: "src"
    }
  };
};
