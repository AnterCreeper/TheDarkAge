ServerEvents.recipes(event => {
	event.campfireCooking('minecraft:torch', 'minecraft:stick');
	event.custom({
		"type": "minecraft:smoking",
		"cookingtime": 100,
		"experience": 0.0,
		"ingredient": {
			"item": "minecraft:stick"
		},
		"result": "minecraft:torch"
	});
	event.shaped(
	'totemic:tipi',
	[
		' S ',
		'SLS',
		'L L'
	],
	{
		L: 'minecraft:leather',
		S: 'minecraft:stick'
	});

	event.recipes.create.milling(
	[
		'survivalistessentials:plant_paste',
		Item.of('survivalistessentials:plant_paste').withChance(0.5)
	],
	'survivalistessentials:plant_fiber'
	);

	event.shapeless(
	'3x survivalistessentials:cloth',
	'farmersdelight:canvas'
	);

	event.replaceInput(
	{
		id: 'farmersdelight:cooking/refined_radiance_tea'
	},
	'minecraft:grass',
	'unusualend:chorus_petal');
	event.replaceInput(
	{
		id: 'farmersdelight:cooking/shadow_steel_tea'
	},
	'minecraft:grass',
	'unusualend:chorus_petal');

	event.shapeless(
	'farmersdelight:straw',
	'2x survivalistessentials:plant_fiber',
	);
        event.replaceInput(
        {
                input: 'survivalistessentials:plant_string'
        },
        'survivalistessentials:plant_string',
        'farmersdelight:rope');
        event.replaceInput(
        {
                id: 'survivalistessentials:mortar_and_pestle'
        },
        'survivalistessentials:rock_stone',
        'minecraft:flint');
        event.replaceOutput(
        {
                id: 'survivalistessentials:flint_from_shards'
        },
	'minecraft:flint',
        'minecraft:gravel');

	event.recipes.create.milling(
	'minecraft:gravel',
	'3x minecraft:flint'
	);

	event.custom({
		"type": "tconstruct:alloy",
		"inputs": [
          	{
			"amount": 180,
			"tag": "forge:molten_iron"
		},
		{
			"amount": 90,
			"tag": "forge:molten_lead"
		}],
		"result": {
			"amount": 270,
			"fluid": "tconstruct:molten_pewter"
		},
		"temperature": 800
	});
	event.custom({
		"type": "tconstruct:alloy",
		"inputs": [
          	{
			"amount": 90,
			"tag": "forge:molten_steel"
		},
		{
			"amount": 1000,
			"tag": "tconstruct:molten_obsidian"
		}],
		"result": {
			"amount": 90,
			"fluid": "tconstruct:molten_hepatizon"
		},
		"temperature": 1400
	});

	event.replaceInput({
		id: "supplementaries:soap"
	},
	"minecraft:porkchop",
	"delightful:animal_fat"
	);

})
