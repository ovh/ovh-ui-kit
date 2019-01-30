const cheerio = require("cheerio");
const highlight = require("highlightjs");
const marked = require("marked");

/* eslint-disable class-methods-use-this */
module.exports = class MarkdownRenderer extends marked.Renderer {
    constructor () {
        super();

        this.codeBlockUID = 0;
    }

    // Removes each element that follow those rules:
    // - Removes every element and its children with oui-doc-preview-only class on it
    // - Removes only the element with oui-doc-preview-only-keep-children class on it
    filterHtmlElementFromCode (code) {
        const $ = cheerio.load(code, {
            decodeEntities: false
        });

        $(".oui-doc-preview-only").remove();
        $(".oui-doc-preview-only-keep-children").replaceWith(function () {
            return $(this).html();
        });

        // HACK: Known issue on Cheerio and it is not cleared if it will be fixed.
        // `.replace(/=""/g, '')`
        // https://github.com/cheeriojs/cheerio/issues/1032
        return $("body").html().replace(/=""/g, "");
    }

    code (code, lang) {
        let highlightCode = code;

        if (lang) {
            // If somebody write ```html:preview it will show the real code and
            // show a collapsible pre block.
            if (lang === "html:preview") {
                highlightCode = highlight.highlight("html", this.filterHtmlElementFromCode(code)).value;

                this.codeBlockUID += 1;
                const scopeVariableName = `$markdown.code[${this.codeBlockUID}]`;

                return `<div class="oui-doc-preview">${code}</div>
                <p>
                    <oui-button on-click="${scopeVariableName} = !${scopeVariableName}">
                        Click to show the example
                    </oui-button>
                </p>
                <div ng-show="${scopeVariableName}">
                    <pre class="oui-doc-code" ng-non-bindable>${highlightCode}</pre>
                </div>`;
            }

            highlightCode = highlight.highlight(lang, code).value;

            return `<pre class="oui-doc-code oui-doc-code_${lang}">${highlightCode}</pre>`;
        }

        return `<pre class="oui-doc-code">${highlightCode}</pre>`;
    }

    codespan (code) {
        return `<code class="oui-doc-codespan">${code}</code>`;
    }

    heading (text, level, raw) {
        const id = raw.toLowerCase().replace(/[^\w]+/g, "-");
        return `<h${level} id="${id}" class="oui-heading_${level}">${text}</h${level}>`;
    }

    table (header, body) {
        return `<div class="oui-datagrid-responsive-container">
            <div class="oui-datagrid-responsive-container__sticky-container">
                <div class="oui-datagrid-responsive-container__overflow-container">
                    <table class="oui-datagrid oui-datagrid_compact">
                        <thead class="oui-datagrid__headers">${header}</thead>
                        <tbody>${body}</tbody>
                    </table>
                </div>
            </div>
        </div>`;
    }

    tablerow (content) {
        return `<tr class="oui-datagrid__row">${content}</tr>`;
    }

    tablecell (content, flag) {
        if (flag.header) {
            return `<th class="oui-datagrid__header">${content}</th>`;
        }
        return `<td class="oui-datagrid__cell">${content}</td>`;
    }
};
/* eslint-enable class-methods-use-this */
