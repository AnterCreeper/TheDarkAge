ServerEvents.tags('item', event => {
	event.add('forge:ingots', 'kubejs:steel_ingot');
	event.add('forge:ingots/steel', 'kubejs:steel_ingot');
	event.add('forge:nuggets', 'kubejs:steel_nugget');
	event.add('forge:nuggets/steel', 'kubejs:steel_nugget');
	event.add('forge:plates', 'kubejs:steel_sheet');
	event.add('forge:plates/steel', 'kubejs:steel_sheet');
	event.add('forge:rods', 'kubejs:steel_rod');
	event.add('forge:rods/steel', 'kubejs:steel_rod');
	event.add('forge:storage_blocks', 'kubejs:steel_block');
	event.add('forge:storage_blocks/steel', 'kubejs:steel_block');
})

ServerEvents.tags('fluid', event => {
	event.add('forge:molten_steel', 'kubejs:molten_steel');
})

ServerEvents.tags('block', event => {
	event.add('minecraft:mineable/pickaxe', 'kubejs:steel_block');
	event.add('minecraft:needs_stone_tool', 'kubejs:steel_block');
})
