ServerEvents.recipes(event => {
	event.shaped(
	"torcherino:torcherino",
	[
		"E",
		"S"
	],
	{
		"E": "goety:ectoplasm",
		"S": "minecraft:stick"
	});

	event.recipes.farmersdelight.cutting(
	"minecraft:honeycomb_block",
	"#forge:tools/scavenging",
	[
		"4x minecraft:honeycomb"
	]
	);

	event.recipes.farmersdelight.cutting(
	"environmental:venison",
	"#forge:tools/scavenging",
	[
		"2x delightful:venison_chops"
	]
	);

	event.replaceInput({
		input: "minecraft:flint_and_steel"
	},
	"minecraft:flint_and_steel",
	"#kubejs:flint_and_steel_alt"
	);
	event.replaceInput({
		input: "minecraft:coal_block",
		not: {
			id: "minecraft:coal"
		}
	},
	"minecraft:coal_block",
	"#kubejs:coal_block_alt"
	);
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

	event.replaceInput({
		id: "quark:tools/crafting/bundle"
	},
	"minecraft:leather",
	"#forge:leather"
	);
	event.recipes.farmersdelight.cutting(
        "totemic:buffalo_hide",
        "#forge:tools/scavenging",
	"minecraft:leather"
	);
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
			"amount": 250,
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
	"#immersive_weathering:wax"
	);

        event.replaceInput(
        {
                id: 'musketmod:pistol'
        },
        'minecraft:iron_ingot',
        'createaddition:iron_rod');
        event.replaceInput(
        {
                id: 'musketmod:musket'
        },
        'minecraft:iron_ingot',
        'createaddition:iron_rod');
        event.replaceInput(
        {
                id: 'musketmod:musket_with_bayonet'
        },
        'minecraft:iron_sword',
        Item.of('tconstruct:small_blade', '{Material:"tconstruct:iron"}').weakNBT());

        event.recipes.farmersdelight.cutting(
        "minecraft:bone",
        "tconstruct:sledge_hammer",
        "3x minecraft:bone_meal"
        );
        event.recipes.farmersdelight.cutting(
        "philipsruins:bone_chunk",
        "tconstruct:sledge_hammer",
        "2x minecraft:bone_meal"
        );
	event.recipes.create.milling(
	[
		Item.of("minecraft:bone_meal", 2),
		Item.of("minecraft:bone_meal", 1).withChance(0.5)
	],
	"philipsruins:bone_chunk"
	);

	event.recipes.create.milling(
	"minecraft:red_sand",
	"minecraft:red_sandstone"
	);

        event.recipes.farmersdelight.cutting(
        "environmental:vension",
        "#forge:tools/scavenging",
        "2x delightful:vension_chops"
        );
        event.recipes.farmersdelight.cutting(
        "totemic:buffalo_meat",
        "#forge:tools/scavenging",
        "2x farmersdelight:minced_beef"
        );

	event.replaceInput({
		id: "cnb:entity_net"
	},
	"minecraft:string",
	"minecraft:cobweb"
	);
	event.replaceInput({
		id: "create:crafting/kinetics/controller_rail"
	},
	"minecraft:gold_ingot",
	"minecraft:gold_nugget"
	);
	event.replaceOutput({
		id: "create:crafting/kinetics/controller_rail"
	},
	"create:controller_rail",
	"3x create:controller_rail"
	);
	event.replaceOutput({
		id: "minecraft:powered_rail"
	},
	"minecraft:powered_rail",
	"3x minecraft:powered_rail"
	);
	event.replaceOutput({
		id: "caverns_and_chasms:spiked_rail"
	},
	"caverns_and_chasms:spiked_rail",
	"3x caverns_and_chasms:spiked_rail"
	);

	event.custom({
		"type": "eidolon:crucible",
		"steps": [{
			"items" :[{
				"item": "delightful:animal_fat",
			}, {
				"item": "delightful:animal_fat",
			}]
		}],
		"result": {
			"item": "immersive_weathering:tallow"
		}
	});
        event.recipes.create.mixing([
		"immersive_weathering:tallow"
        ],
        [
		"2x delightful:animal_fat",
		Fluid.of('minecraft:water', 500)
        ]).heated();
	event.recipes.create.haunting(
	"eidolon:tallow",
	"#immersive_weathering:wax"
	);
	event.replaceInput({
		id: "goety:soul_candlestick"
	},
	"#minecraft:candles",
	"eidolon:candle"
	);

	event.recipes.create.compacting(
	"4x minecraft:gunpowder",
	[
		"eidolon:sulfur",
		"minecraft:bone_meal",
		"minecraft:charcoal"
	]);

        event.recipes.create.mixing([
		"6x supplementaries:soap"
        ],
        [
		"4x immersive_weathering:ash_layer_block",
		"immersive_weathering:tallow",
		Fluid.of('minecraft:water', 500)
        ]);

	event.recipes.create.compacting(
	Fluid.of("createdieselgenerators:plant_oil", 500),
	"supplementaries:flax_seeds"
	);
	event.replaceInput({
		id: "createdieselgenerators:compacting/plant_oil"
	},
	"#forge:seeds",
	"#kubejs:seeds"
	);

        event.recipes.create.compacting(
        "2x create:chute",
        "create:iron_sheet"
        );
        event.recipes.create.compacting(
        "2x create:fluid_pipe",
        "create:copper_sheet"
        );

})
