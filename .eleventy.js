
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("mainHeading", function() {
    return `<h1 class="page-heading"><strong>Everyday Carry</strong></h1>`;
  });
};