import angular from 'angular';
import Progress from './js/progress.component';
import ProgressBar from './js/bar/progress-bar.component';
import ProgressThreshold from './js/threshold/progress-threshold.component';

const moduleName = 'oui.progress';

angular
  .module(moduleName, [])
  .component('ouiProgress', Progress)
  .component('ouiProgressBar', ProgressBar)
  .component('ouiProgressThreshold', ProgressThreshold);

export default moduleName;
