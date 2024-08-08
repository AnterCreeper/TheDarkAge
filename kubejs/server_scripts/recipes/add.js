ServerEvents.recipes(event => {
	event.replaceInput(
	{
		id: 'minecraft:iron_shovel'
	},
	'minecraft:iron_ingot',
	'create:iron_sheet');

	event.campfireCooking('minecraft:torch', 'minecraft:stick');
	event.campfireCooking('minecraft:bread', 'farmersdelight:wheat_dough');

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

	event.shaped(
	'farmersdelight:straw',
        [
                'FF'
        ],
        {
                F: 'survivalistessentials:plant_fiber'
        });
	event.shaped(
	'farmersdelight:straw',
        [
                'F',
		'F'
        ],
        {
                F: 'survivalistessentials:plant_fiber'
        });
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

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:diesel",
			"amount": 100
		},
		"burnTime": 15,
		"superheated": true
	});
        event.custom(
        {
                "type": "tconstruct:melting_fuel",
                "duration": 200,
                "fluid": {
                        "amount": 10,
                        "fluid": "createdieselgenerators:diesel"
                },
                "temperature": 1500
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:biodiesel",
			"amount": 100
		},
		"burnTime": 15,
		"superheated": true
	});
        event.custom(
        {
                "type": "tconstruct:melting_fuel",
                "duration": 200,
                "fluid": {
                        "amount": 10,
                        "fluid": "createdieselgenerators:biodiesel"
                },
                "temperature": 1500
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:gasoline",
			"amount": 100
		},
		"burnTime": 8,
		"superheated": true
	});
        event.custom(
        {
                "type": "tconstruct:melting_fuel",
                "duration": 150,
                "fluid": {
                        "amount": 10,
                        "fluid": "createdieselgenerators:gasoline"
                },
                "temperature": 1500
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:plant_oil",
			"amount": 100
		},
		"burnTime": 960,
		"superheated": false
	});
        event.custom(
        {
		"type": "tconstruct:melting_fuel",
		"duration": 96,
		"fluid": {
			"amount": 10,
			"fluid": "createdieselgenerators:plant_oil"
		},
		"temperature": 1000
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:crude_oil",
			"amount": 100
		},
		"burnTime": 960,
		"superheated": false
	});
        event.custom(
        {
		"type": "tconstruct:melting_fuel",
		"duration": 96,
		"fluid": {
			"amount": 10,
			"fluid": "createdieselgenerators:crude_oil"
		},
		"temperature": 1000
        });

	event.custom(
	{
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "createdieselgenerators:ethanol",
			"amount": 100
		},
		"burnTime": 480,
		"superheated": false
	});
        event.custom(
        {
		"type": "tconstruct:melting_fuel",
		"duration": 480,
		"fluid": {
			"amount": 100,
			"fluid": "createdieselgenerators:ethanol"
		},
		"temperature": 600
        });

//	event.recipes.createDeploying(
//	"minecraft:experience_bottle",
//	[
//		"minecraft:glass_bottle",
//		"3x create:experience_nugget"
//	]);
})
