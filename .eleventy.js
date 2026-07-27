module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets"); 
  eleventyConfig.addPassthroughCopy("router.js");
  eleventyConfig.addPassthroughCopy("projects");
  eleventyConfig.addPassthroughCopy("pages")

  eleventyConfig.setTemplateFormats([
      "md",
      "html",
      "njk"
    ]);
  return {
    dir: {
      input: ".",          // Read from root directory
      output: "_site",     // Build compiled site here
      includes: "_includes"
    }
  };
};