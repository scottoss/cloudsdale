import * as entities from '../../common/entities';
import * as fs from 'fs';
import { rect } from '../../common/rect';
import { TileType, MapType } from '../../common/interfaces';
import { createServerMap, deserializeMap } from '../serverMap';
import { World, goToMap } from '../world';
import { createSign } from '../controllerUtils';
import { ServerEntity } from '../serverInterfaces';
import { pathTo } from '../paths';


const mapData = JSON.parse(fs.readFileSync(pathTo('src', 'maps', 'tardismap.json'), 'utf8'));


export function createtardisMap(world: World) {
	const map = createServerMap('tardisMap', MapType.None, 5, 5, TileType.Wood);
	deserializeMap(map, mapData);

	map.spawnArea = rect(map.width / 2, map.height / 2, 0, 0);

	function add(entity: ServerEntity) {
		world.addEntity(entity, map);
	}

	add(createSign(map.width / 2, map.height / 2, 'Go to main', (_, client) => goToMap(world, client, '', 'spawn')));
	add(entities.barrel(5, 5));



	
	

	
	return map;
}
