import "ui-select";
import "angular-sanitize";
import angular from "angular";
import Select from "./select.directive";

const moduleName = "oui.select";

angular
    .module(moduleName, [
        "ngSanitize",
        "ui.select"
    ])
    .run(["$templateCache", ($templateCache) => {
        $templateCache.put("oui-ui-select/choices.tpl.html", require("./templates/choices.html"));
        $templateCache.put("oui-ui-select/footer.tpl.html", require("./templates/footer.html"));
        $templateCache.put("oui-ui-select/header.tpl.html", require("./templates/header.html"));
        $templateCache.put("oui-ui-select/match.tpl.html", require("./templates/match.html"));
        $templateCache.put("oui-ui-select/match-multiple.tpl.html", require("./templates/match-multiple.html"));
        $templateCache.put("oui-ui-select/no-choice.tpl.html", require("./templates/no-choice.html"));
        $templateCache.put("oui-ui-select/select.tpl.html", require("./templates/select.html"));
        $templateCache.put("oui-ui-select/select-multiple.tpl.html", require("./templates/select-multiple.html"));
    }])
    .directive("ouiSelect", Select);

export default moduleName;
