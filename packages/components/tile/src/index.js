import angular from 'angular';

import Popover from '@ovh/ui-kit.popover';
import Spinner from '@ovh/ui-kit.spinner';

import Tile from './js/tile.component';
import TileButton from './js/button/tile-button.component';
import TileDefinition from './js/definition/tile-definition.component';

const moduleName = 'oui.tile';

angular
  .module(moduleName, [
    Popover,
    Spinner,
  ])
  .component('ouiTile', Tile)
  .component('ouiTileButton', TileButton)
  .component('ouiTileDefinition', TileDefinition);

export default moduleName;
