import angular from "angular";
import Message from "./message.component.js";

const moduleName = "oui.message";

angular
    .module(moduleName, [])
    .component("ouiMessage", Message);

export default moduleName;
