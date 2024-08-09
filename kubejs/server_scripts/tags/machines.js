ServerEvents.tags('block', event => {
	event.add('minecraft:mineable/pickaxe', 'kubejs:andesite_machine');
	event.add('minecraft:needs_stone_tool', 'kubejs:andesite_machine');
	event.add('minecraft:mineable/pickaxe', 'kubejs:copper_machine');
	event.add('minecraft:needs_stone_tool', 'kubejs:copper_machine');
	event.add('minecraft:mineable/pickaxe', 'kubejs:brass_machine');
	event.add('minecraft:needs_iron_tool', 'kubejs:brass_machine');
})
