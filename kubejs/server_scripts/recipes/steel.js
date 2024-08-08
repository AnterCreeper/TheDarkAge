ServerEvents.recipes(event => {
	event.recipes.create.pressing('kubejs:steel_sheet', 'kubejs:steel_ingot');
	//TODO: steel_block
	event.shapeless('9x kubejs:steel_nugget', 'kubejs:steel_ingot');
	event.shapeless('kubejs:steel_ingot', '9x kubejs:steel_nugget');
	event.shapeless('9x kubejs:steel_ingot', 'kubejs:steel_block');
	event.shapeless('kubejs:steel_block', '9x kubejs:steel_ingot');

	event.custom(
	{
		"type":"createaddition:rolling",
		"input": {
		      	"tag": "forge:ingots/steel"
		},
		"result": {
			"item": "kubejs:steel_rod",
			"count": 2
		}
	});
})
