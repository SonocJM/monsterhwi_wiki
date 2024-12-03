module.exports = function(eleventyConfig) {
    // Crear una colección de todos los archivos Markdown
    eleventyConfig.addCollection("all", function(collectionApi) {
        return collectionApi.getAll(); // Obtiene todos los archivos
    });
  
    // Añadir configuración para salida en "docs"
    return {
        dir: {
            input: "src", // Carpeta donde están tus archivos .md
            output: "docs", // Cambiar salida a "docs" para GitHub Pages
            includes: "_includes", // Carpeta donde están tus layouts (como base.njk)
        },
        templateFormats: ["njk", "md"] // Habilitar Nunjucks y Markdown
    };
  };
  