import angular from 'angular';
import Popover from '@ovh/ui-kit.popover';
import Spinner from '@ovh/ui-kit.spinner';
import Tile from './tile.component';
import TileButton from './button/tile-button.component';
import TileDefinition from './definition/tile-definition.component';

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
