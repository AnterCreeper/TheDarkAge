ServerEvents.tags('item', event => {
	event.add('forge:ingots/steel', 'kubejs:steel_ingot');
	event.add('forge:nuggets/steel', 'kubejs:steel_nugget');
	event.add('forge:plates/steel', 'kubejs:steel_sheet');
})

ServerEvents.tags('fluid', event => {
	event.add('forge:molten_steel', 'kubejs:molten_steel');
})
