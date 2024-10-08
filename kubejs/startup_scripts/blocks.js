StartupEvents.registry("block", event => {
	event.create("steel_block", "basic")
	.soundType("metal")
	.hardness(6)
	.resistance(7)
	.requiresTool(true);

	event.create("ore_scheelite", "basic")
	.soundType("stone")
	.hardness(3)
	.resistance(45)
	.requiresTool(true);

	event.create("tungsten_mold", "basic")
	.soundType("gravel")
	.hardness(1)
	.resistance(1)
	.requiresTool(false);

	event.create("burnt_tungsten_mold", "basic")
	.soundType("stone")
	.hardness(1)
	.resistance(1)
	.requiresTool(true);

//	event.create("treated_wood", "basic")
//	.soundType("wood")
//	.hardness(2)
//	.resistance(3)
//	.requiresTool(true);
})
