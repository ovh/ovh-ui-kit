import angular from 'angular';
import Spinner from '@ovh/ui-kit.spinner';
import Slideshow from './slideshow.component';
import SlideshowPanel from './panel/slideshow-panel.component';

const moduleName = 'oui.slideshow';

angular
  .module(moduleName, [Spinner])
  .component('ouiSlideshow', Slideshow)
  .component('ouiSlideshowPanel', SlideshowPanel);

export default moduleName;