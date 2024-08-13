WorldgenEvents.add(event => {
	const {anchors} = event;
	event.addOre(ore => {
		ore.biomes = '#minecraft:is_end';

		ore.addTarget('minecraft:end_stone', 'kubejs:ore_scheelite');

		ore.count([15, 50]).squared()
		.triangleHeight(
			anchors.aboveBottom(40),
			anchors.absolute(65)
		);

		ore.size = 8;
		ore.noSurface = 0.5;
		ore.worldgenLayer = 'raw_generation';
		ore.chance = 0;
	})
})
