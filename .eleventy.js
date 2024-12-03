module.exports = function(eleventyConfig) {
  // Crear una colección de todos los archivos Markdown
  eleventyConfig.addCollection("all", function(collectionApi) {
      return collectionApi.getAll(); // Obtiene todos los archivos
  });

  return {
      dir: {
          input: "src", // Carpeta donde están tus archivos .md
          output: "dist", // Carpeta donde se generarán los archivos HTML
          includes: "_includes", // Carpeta donde están tus layouts (como base.njk)
      },
      templateFormats: ["njk", "md"] // Asegúrate de que Nunjucks esté habilitado
  };
};