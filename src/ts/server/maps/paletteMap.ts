import * as entities from '../../common/entities';
import * as fs from 'fs';
import { rect } from '../../common/rect';
import { TileType, MapType } from '../../common/interfaces';
import { createServerMap, deserializeMap } from '../serverMap';
import { World, goToMap } from '../world';
import { createSign } from '../controllerUtils';
import { ServerEntity } from '../serverInterfaces';
import { pathTo } from '../paths';

const mapData = JSON.parse(fs.readFileSync(pathTo('src', 'maps', 'palette.json'), 'utf8'));


export function createPaletteMap(world: World) {
	const map = createServerMap('palette', MapType.None, 10, 10, TileType.Grass);
	deserializeMap(map, mapData);

	map.spawnArea = rect(map.width / 2, map.height / 2, 0, 0);

	function add(entity: ServerEntity) {
		world.addEntity(entity, map);
	}

	add(createSign(map.width / 2, map.height / 2, 'Go back', (_, client) => goToMap(world, client, '', 'center')));
	add(entities.barrel(5, 5));
	
	return map;
}
