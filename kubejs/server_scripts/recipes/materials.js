ServerEvents.recipes(event => {
	event.smelting(
		"immersive_weathering:ash_layer_block",
		"minecraft:vine"
	);
	event.smelting(
		"immersive_weathering:ash_layer_block",
		"immersive_weathering:ivy"
	);
	event.smelting(
		"immersive_weathering:ash_layer_block",
		"ecologics:coconut_slice"
	);
	event.smelting(
		"immersive_weathering:ash_layer_block",
		"farmersdelight:straw"
	);
	event.smelting(
		"immersive_weathering:ash_layer_block",
		"#minecraft:small_flowers"
	);
	event.smelting(
		"2x immersive_weathering:ash_layer_block",
		"#minecraft:tall_flowers"
	);
	event.smelting(
		"immersive_weathering:ash_layer_block",
		"#minecraft:saplings"
	);
	event.smelting(
		"immersive_weathering:ash_layer_block",
		"#minecraft:leaves"
	);
	event.smelting(
		Item.of("immersive_weathering:ash_layer_block").withChance(0.25),
		"minecraft:moss_carpet"
	);
	event.smelting(
		"2x immersive_weathering:ash_layer_block",
		"minecraft:moss_block"
	);
	event.smelting(
		"4x immersive_weathering:ash_layer_block",
		"minecraft:mangrove_roots"
	);

	event.recipes.create.mixing([
		"eidolon:sulfur",
		Item.of('eidolon:sulfur').withChance(0.5)
	],
	[
		'minecraft:coal',
		"eidolon:enchanted_ash"
	]).heated();

        event.recipes.create.mixing(
	"4x kubejs:rubber",
        [
                "eidolon:sulfur",
                '4x #forge:slimeballs'
        ]).heated();

	event.replaceInput({
		id: "create:crafting/kinetics/belt_connector"
	},
	"minecraft:dried_kelp",
	"kubejs:rubber"
	);
	event.replaceOutput({
		id: "create:crushing/update_one/scrap_mechanical_belt"
	},
	"minecraft:dried_kelp",
	"kubejs:rubber"
	);

	event.recipes.create.milling(
	"kubejs:limestone",
	"#kubejs:limeitem"
	);
	event.recipes.create.milling(
	"4x kubejs:limestone",
	"#kubejs:limeblock"
	);
	event.recipes.create.milling([
		Item.of("immersive_weathering:ash_layer_block").withChance(0.25),
		Item.of("kubejs:limestone").withChance(0.75),
	],
	"minecraft:tuff"
	);

	event.blasting(
	"kubejs:quicklime",
	"kubejs:limestone"
	);
	event.recipes.create.mixing([
                "minecraft:bone_meal",
                Fluid.of('kubejs:caustic_soda_solution', 1000)
        ],
        [
                "immersive_weathering:ash_layer_block",
                'kubejs:quicklime',
		Fluid.of('minecraft:water', 1000),
        ]);
        event.recipes.create.mixing([
                "2x kubejs:tungsten_trioxide",
                Item.of("kubejs:tungsten_trioxide").withChance(0.2),
                Item.of("3x kubejs:tungsten_trioxide").withChance(0.1),
		Item.of("minecraft:bone_meal").withChance(0.5)
        ],
        [
		"4x kubejs:tungsten_ore",
		"minecraft:blaze_powder",
                Fluid.of('kubejs:caustic_soda_solution', 1000)
        ]).heated();
	event.recipes.create.mixing([
                "kubejs:tungsten_carbide_mixture",
                Fluid.of("minecraft:water", 1000)
        ],
        [
                "minecraft:sugar",
		"kubejs:cobalt_powder",
                "6x kubejs:tungsten_trioxide"
        ]).heated();

	event.replaceInput({
		input: "supplementaries:ash"
	},
	"supplementaries:ash",
	"immersive_weathering:ash_layer_block"
	);

	event.blasting(
	"ratatouille:salt",
	"minecraft:dried_kelp"
	);

	event.recipes.create.milling(
	'4x kubejs:kaolinite',
	'minecraft:granite'
	);
	event.recipes.create.milling(
	'4x kubejs:borax',
	'minecraft:diorite'
	);
	event.recipes.create.milling(
	'9x kubejs:cobalt_powder',
	'tconstruct:cobalt_ingot'
	);
	event.recipes.create.milling(
	'kubejs:cobalt_powder',
	'tconstruct:cobalt_nugget'
	);
        event.shapeless(
        'kubejs:cobalt_powder',
        [
                'tconstruct:cobalt_nugget',
                Item.of('survivalistessentials:mortar_and_pestle').ignoreNBT()
        ]).keepIngredient(Item.of('survivalistessentials:mortar_and_pestle').ignoreNBT());


	event.shaped(
	'2x kubejs:fire_clay_ball',
	[
		"BKB",
		"KCK",
		"BKB"
	],
	{
		B: "kubejs:borax",
		K: "kubejs:kaolinite",
		C: "minecraft:clay_ball",
	});
	event.recipes.create.pressing(
	"kubejs:fire_clay_sheet",
	"kubejs:fire_clay_ball"
	);
        event.shaped(
        "3x kubejs:fire_clay_sheet",
        [
		"CCC"
	],
	{
		C: "kubejs:fire_clay_ball"
	});
	event.smelting(
	"kubejs:burnt_fire_clay_sheet",
	"kubejs:fire_clay_sheet"
	);

	event.replaceInput({
		type: "create:deploying",
		input: "minecraft:iron_nugget"
	},
	"minecraft:iron_nugget",
	"tconstruct:hepatizon_nugget"
	);

})
