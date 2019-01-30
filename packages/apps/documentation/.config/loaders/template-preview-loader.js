const markdownLoader = require("./markdown-loader");

module.exports = function loader (data) {
    if (this.cacheable) {
        this.cacheable();
    }

    const html = markdownLoader.call(this, data);

    const matches = data.match(/```html:preview((.|\n|\r)+?)(?=```)/g);
    if (!matches) {
        return `module.exports = {
      template: ${JSON.stringify(html)}
    }`;
    }

    const preview = matches.map((match) => match.replace("```html:preview", ""))
        .join("\n");

    return `module.exports = {
    template: ${JSON.stringify(html)},
    preview: ${JSON.stringify(preview)}
  }`;
};
