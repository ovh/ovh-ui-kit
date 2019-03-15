import angular from 'angular';
import Skeleton from './js/skeleton.component';

const moduleName = 'oui.skeleton';

angular
  .module(moduleName, [])
  .component('ouiSkeleton', Skeleton);

export default moduleName;
