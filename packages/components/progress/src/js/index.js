import angular from "angular";
import Progress from "./progress.component.js";
import ProgressBar from "./bar/progress-bar.component.js";
import ProgressThreshold from "./threshold/progress-threshold.component.js";

const moduleName = "oui.progress";

angular
    .module(moduleName, [])
    .component("ouiProgress", Progress)
    .component("ouiProgressBar", ProgressBar)
    .component("ouiProgressThreshold", ProgressThreshold);

export default moduleName;
