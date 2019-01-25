export default ($sce) => {
    "ngInject";

    const highlight = '<mark class="oui-autocomplete-highlight">$&</mark>';
    const escapeRegexp = (query) =>
        query.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

    // Highlight query in the beginning of each matching words
    return (matchItem, query) => {
        const regexp = `\\b${escapeRegexp(query)}`;
        return $sce.trustAsHtml(query ?
            matchItem.replace(new RegExp(regexp, "gi"), highlight) :
            matchItem
        );
    };
};
