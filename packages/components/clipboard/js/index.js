import angular from "angular";
import Clipboard from "./clipboard.component.js";
import ClipboardProvider from "./clipboard.provider.js";

const moduleName = "oui.clipboard";

angular
    .module(moduleName, [])
    .component("ouiClipboard", Clipboard)
    .provider("ouiClipboardConfiguration", ClipboardProvider);

export default moduleName;
