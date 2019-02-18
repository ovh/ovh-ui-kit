import angular from 'angular';
import Progress from './progress.component';
import ProgressBar from './bar/progress-bar.component';
import ProgressThreshold from './threshold/progress-threshold.component';

const moduleName = 'oui.progress';

angular
  .module(moduleName, [])
  .component('ouiProgress', Progress)
  .component('ouiProgressBar', ProgressBar)
  .component('ouiProgressThreshold', ProgressThreshold);

export default moduleName;
