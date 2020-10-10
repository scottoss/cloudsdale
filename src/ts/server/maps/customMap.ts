import * as fs from 'fs';
import * as entities from '../../common/entities';
import { rect } from '../../common/rect';
import { TileType, MapType } from '../../common/interfaces';
import { createServerMap, deserializeMap } from '../serverMap';
import { World, goToMap } from '../world';
import { createSign } from '../controllerUtils';
import { ServerEntity } from '../serverInterfaces';
import { pathTo } from '../paths';

// load tile data
// To customize the map use in-game editor tools to change tiles, then use `/savemap custom` command,
// your map will be saved to `/store/custom.json` file, move the file to `/src/maps/custom.json`
// and restart the server.
const mapData = JSON.parse(fs.readFileSync(pathTo('src', 'maps', 'custom.json'), 'utf8'));

export function createCustomMap(world: World) {
	// size: 8 by 8 regions -> 500 by 500 tiles
	// default tiles: grass
	const map = createServerMap('custom', MapType.None, 4, 4, TileType.Grass);

	// initialize tiles
	deserializeMap(map, mapData);

	// place default spawn point at the center of the map
	map.spawnArea = rect(map.width / 2, map.height / 2, 0, 0);

	// shorthand for adding entities
	function add(entity: ServerEntity) {
		world.addEntity(entity, map);
	}

	// place return sign 2 tiles north of center of the map
	add(createSign(map.width / 2, map.height / 2 - 2, 'Go back', (_, client) => goToMap(world, client, '', 'spawn')));

	// place barrel at 5, 5 location
	add(entities.barrel(5, 5));

	// place more entities here ...
	add (entities.lanternOn(11.47, 14.42));
	add (entities.lanternOn(19.34, 12.38));
	add (entities.house(3.19, 16.79));
	add (entities.broom(3.88, 17.21));
	add (entities.table2(5.41, 22.54));
	add (entities.cushion1(7.03, 21.63));
	add (entities.cushion1(6.97, 22.96));
	add (entities.cushion3(3.94, 22.29));
	add (entities.lanternOn(20.88, 17.42));
	add (entities.lanternOn(17.31, 19.17));
	add (entities.lanternOn(8.53, 21.79));
	add (entities.fence2(14.81, 26.00));
	add (entities.cushion3(17.31, 22.96));
	add (entities.cushion3(17.28, 22.75));
	add (entities.cushion3(17.28, 22.42));
	add (entities.cushion3(17.28, 23.67));
	add (entities.table2(25.03, 15.88));
	add (entities.cushion1(23.50, 14.83));
	add (entities.cushion1(14.13, 23.50));
	add (entities.cushion3(17.25, 23.63));
	add (entities.cushion3(17.22, 24.04));
	add (entities.table2(15.94, 23.54));
	add (entities.crate1AHigh(12.56, 24.92));
	add (entities.crate1A(12.56, 24.96));
	add (entities.crate1A(12.50, 25.75));
	add (entities.crate1A(12.54, 22.71));
	add (entities.cushion1(14.28, 22.46));
	add (entities.cushion2(26.38, 15.13));
	add (entities.cushion2(26.38, 16.04));
	add (entities.cushion2(26.41, 15.71));
	add (entities.cushion2(26.38, 15.58));
	add (entities.lanternOnTable(25.13, 15.79));
	add (entities.lanternOnTable(25.13, 15.96));
	add (entities.cushion1(23.44, 16.25));
	add (entities.fence2(24.75, 18.25));
	add (entities.fence2(24.97, 13.88));
	add (entities.flowerPatch5(17.97, 20.17));
	add (entities.flowerPatch5(11.44, 21.33))
	add (entities.flowerPatch5(11.13, 23.83));
	add (entities.flowerPatch4(21.22, 25.71));
	add (entities.flowerPatch4(25.22, 18.50));
	add (entities.flowerPatch4(21.63, 11.58));
	add (entities.flowerPatch4(9.84, 15.71));
	add (entities.flowerPatch4(18.41, 5.88));
	add (entities.flowerPatch4(12.03, 6.67));
	add (entities.flowerPatch4(8.25, 12.25));
	add (entities.crystals10(16.91, 19.88));
	add (entities.crystals1(12.47, 20.63));
	add (entities.crystals2(17.97, 20.83));
	add (entities.crystals4(18.13, 25.83));
	add (entities.crystals5(15.97, 26.96));
	add (entities.crystals7(13.91, 26.63));
	add (entities.crystals8(11.41, 23.08));
	add (entities.crystals9(12.31, 26.42));
	add (entities.cookieTable2(11.78, 16.25));
	add (entities.boxFruits(19.06, 12.79));
	add (entities.crystals1(11.88, 24.00));
	add (entities.crystals4(18.72, 23.46));
	add (entities.crystals7(26.63, 3.04));
	add (entities.crystals7(7.94, 2.79));
	add (entities.crystals7(14.28, 8.88));
	add (entities.crystals7(19.69, 6.67));
	add (entities.crystals7(19.38, 0.63));
	add (entities.crystals7(13.34, 0.83));
	add (entities.crystals7(11.25, 6.88));
	add (entities.crystals7(22.81, 1.63));
	add (entities.bench1(10.94, 2.92));
	add (entities.bench1(20.09, 3.04));
	add (entities.bench1(4.09, 2.08));
	add (entities.lanternOn(2.22, 5.88));
	add (entities.lanternOn(12.50, 3.17));
	add (entities.lanternOn(18.44, 3.21));
	add (entities.lanternOn(2.50, 1.54));
	add (entities.lanternOn(6.88, 9.42));
	add (entities.lanternOn(27.50, 9.46));

	return map;
}
