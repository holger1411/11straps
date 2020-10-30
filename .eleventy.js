module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.setBrowserSyncConfig({
reloadDelay: 400
});

  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "dev"
    }
  };
};
