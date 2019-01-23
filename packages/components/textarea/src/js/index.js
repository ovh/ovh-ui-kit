import angular from "angular";
import Textarea from "./textarea.component.js";
import TextareaProvider from "./textarea.provider.js";

const moduleName = "oui.textarea";

angular
    .module(moduleName, [])
    .component("ouiTextarea", Textarea)
    .provider("ouiTextareaConfiguration", TextareaProvider);

export default moduleName;
