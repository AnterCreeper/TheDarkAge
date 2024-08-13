WorldgenEvents.add(event => {
	event.addOre(ore => {
//		ore.id = 'kubejs:ore_scheelite_gen'
		ore.biomes = '#minecraft:is_end';

		ore.addTarget('minecraft:end_stone', 'kubejs:ore_scheelite');

		ore.count([15, 50]).squared()
		.triangleHeight(
			anchors.aboveBottom(55),
			anchors.absolute(80)
		);

		ore.size = 9;
		ore.noSurface = 0.75;
		ore.worldgenLayer = 'raw_generation';
		ore.chance = 0;
	})
})
