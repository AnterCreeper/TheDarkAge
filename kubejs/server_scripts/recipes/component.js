ServerEvents.recipes(event => {
	event.custom(
	{
		"type":"createaddition:rolling",
		"input": {
		      	"tag": "forge:ingots/amethyst_bronze"
		},
		"result": {
			"item": "kubejs:amethyst_bronze_rod",
			"count": 2
		}
	});

	event.recipes.create.cutting('2x kubejs:amethyst_bronze_bolt', 'kubejs:amethyst_bronze_rod');
	event.recipes.create.cutting('2x kubejs:steel_bolt', 'kubejs:steel_rod');
	event.recipes.create.cutting('2x kubejs:brass_bolt', 'createaddition:brass_rod');
	event.recipes.create.cutting('2x kubejs:iron_bolt', 'createaddition:iron_rod');

	event.shapeless(
	'create:iron_sheet',
	[
		'minecraft:iron_ingot',
		Item.of('tconstruct:sledge_hammer').ignoreNBT()
	])..customIngredientAction(Item.of('tconstruct:sledge_hammer').ignoreNBT(), "tic_damage");
})
