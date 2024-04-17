module.exports = function(eleventyConfig) {
    // Add static assets to the output folder
    eleventyConfig.addPassthroughCopy({ "src/static": "/" });
    // Watch for changes in css
    eleventyConfig.addWatchTarget("/src/static");

    // Add projects folder to collection
    eleventyConfig.addCollection("projects", function(collection) {
        return collection.getFilteredByGlob("src/projects/*.md").reverse();
    });

    return {
        templateFormats: ["njk", "md", "html"],
        dir: {
            input: "src",
            output: "www"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: false,
    }
  };