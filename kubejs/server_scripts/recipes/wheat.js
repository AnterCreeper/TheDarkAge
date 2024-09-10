ServerEvents.recipes(event => {
	event.custom({
		"type": "minecraft:campfire_cooking",
		"cookingtime": 600,
		"experience": 0.0,
		"ingredient": {
			"item": "farmersdelight:wheat_dough"
		},
		"result": "minecraft:bread"
	});

	event.custom({
		"type": "lychee:item_inside",
		"item_in": {
			"item": "create:wheat_flour"
		},
		"block_in": {
			"blocks": ["minecraft:water"]
		},
		"post": {
			"type": "drop_item",
			"item": "create:dough"
		}
	});

	event.recipes.farmersdelight.cooking(
	    ["ratatouille:wheat_kernels"],
	    "kubejs:cooked_kernels",
	    0.35,
	    100,
	    "minecraft:bowl"
	);

	event.recipes.farmersdelight.cutting(
	"minecraft:wheat",
	"#forge:tools/scavenging",
	[
		"farmersdelight:straw",
		"ratatouille:wheat_kernels",
		Item.of("ratatouille:wheat_kernels")
		.withChance(0.5)
	]);

	event.shapeless(
	'create:wheat_flour',
	[
		'ratatouille:wheat_kernels',
		Item.of('survivalistessentials:mortar_and_pestle').ignoreNBT()
	]).keepIngredient(Item.of('survivalistessentials:mortar_and_pestle').ignoreNBT());

	let wheat_modlist = [
		'farmersdelight',
		'farmersrespite',
		'delightful'
	];
	for(let i of wheat_modlist){
		event.replaceInput(
		{
			mod: `${i}`
		},
		'minecraft:wheat',
		'create:wheat_flour');
	};

	let wheat_outputlist = [
		'minecraft:cake',
		'minecraft:cookie',
		'supplementaries:pancake'
	];
        for(let i of wheat_outputlist){
                event.replaceInput(
                {
                        output: `${i}`
                },
                'minecraft:wheat',
                'create:wheat_flour');
        };

	event.replaceInput(
	{
		mod: 'snowyspirit'
	},
	'minecraft:wheat',
	'ratatouille:wheat_kernels');

	event.shaped(
	'8x environmental:grass_thatch',
	[
		'WS',
		'SW'
	],
	{
		W: 'minecraft:wheat',
		S: 'farmersdelight:straw'
	});

	event.custom(
	{
		"type": "createdieselgenerators:basin_fermenting",
		"ingredients": [
		{
			"item": "create:wheat_flour"
		},
		{
			"fluid": "minecraft:water",
			"amount": 100
		}],
		"processingTime": 200,
		"results": [
		{
			"count": 2,
			"item": "create:dough"
		},
		{
			"item": "create:wheat_flour",
			"chance": 0.1
		}]
	});
	event.replaceInput({
		id: "createaddition:compacting/cake_base"
	},
	"create:dough",
	"#forge:dough/wheat"
	);
	event.replaceInput({
		id: "farmersdelight:cooking/crab_cakes"
	},
	"farmersdelight:wheat_dough",
	"#forge:dough/wheat"
	);

})
