import angular from "angular";
import Skeleton from "./skeleton.component.js";

const moduleName = "oui.skeleton";

angular
    .module(moduleName, [])
    .component("ouiSkeleton", Skeleton);

export default moduleName;
