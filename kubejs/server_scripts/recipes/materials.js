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

})
