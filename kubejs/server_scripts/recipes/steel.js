ServerEvents.recipes(event => {
	event.recipes.create.pressing('kubejs:steel_sheet', 'kubejs:steel_ingot');
	//TODO: steel_block
	event.shapeless('9x kubejs:steel_nugget', 'kubejs:steel_ingot');
	event.shapeless('kubejs:steel_ingot', '9x kubejs:steel_nugget');
})
