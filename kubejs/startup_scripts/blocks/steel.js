StartupEvents.registry("block", event => {
	event.create("steel_block", "basic")
	.soundType("metal")
	.hardness(6)
	.resistance(7)
	.requiresTool(true);
})
