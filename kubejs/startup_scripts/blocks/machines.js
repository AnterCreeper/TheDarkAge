StartupEvents.registry("block", event => {
	event.create("andesite_machine", "basic")
	.soundType("stone")
	.hardness(1.5)
	.resistance(6)
	.requiresTool(true);

	event.create("copper_machine", "basic")
	.soundType("stone")
	.hardness(2)
	.resistance(6)
	.requiresTool(true);

	event.create("brass_machine", "basic")
	.soundType("stone")
	.hardness(2.5)
	.resistance(6)
	.requiresTool(true);
})
