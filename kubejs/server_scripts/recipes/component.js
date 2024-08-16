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

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:cobalt_powder"
		},
		"result": {
			"amount": 10,
			"fluid": "tconstruct:molten_cobalt"
		},
		"temperature": 950,
		"time": 20
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:amethyst_bronze_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_amethyst_bronze"
		},
		"temperature": 820,
		"time": 6
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:steel_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_steel"
		},
		"temperature": 950,
		"time": 30
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:brass_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_brass"
		},
		"temperature": 605,
		"time": 20
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:iron_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_iron"
		},
		"temperature": 800,
		"time": 30
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:diamond_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_diamond"
		},
		"temperature": 1450,
		"time": 85
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:hepatizon_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_hepatizon"
		},
		"temperature": 1400,
		"time": 40
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "create:sturdy_sheet"
		},
		"result": {
			"amount": 250,
			"fluid": "tconstruct:molten_obsidian"
		},
		"temperature": 1000,
		"time": 73
	});

	event.recipes.farmersdelight.cutting(
        "minecraft:iron_ingot",
        "tconstruct:sledge_hammer",
	"create:iron_sheet",
	"anvil"
	);
	event.recipes.farmersdelight.cutting(
	"minecraft:copper_ingot",
        "tconstruct:sledge_hammer",
	"create:copper_sheet",
	"anvil"
	);
	event.recipes.farmersdelight.cutting(
	"create:brass_ingot",
        "tconstruct:sledge_hammer",
	"create:brass_sheet",
	"anvil"
	);
	event.recipes.farmersdelight.cutting(
	"create:zinc_ingot",
        "tconstruct:sledge_hammer",
	"createaddition:zinc_sheet",
	"anvil"
	);
	event.recipes.farmersdelight.cutting(
	"createaddition:electrum_ingot",
        "tconstruct:sledge_hammer",
	"createaddition:electrum_sheet",
	"anvil"
	);
	event.recipes.farmersdelight.cutting(
	"kubejs:steel_ingot",
        "tconstruct:sledge_hammer",
	"kubejs:steel_sheet",
	"anvil"
	);

	event.recipes.farmersdelight.cutting(
	"kubejs:amethyst_bronze_rod",
	"tinkersurvival:saw",
	"kubejs:amethyst_bronze_bolt"
	);
	event.recipes.farmersdelight.cutting(
	"createaddition:brass_rod",
	"tinkersurvival:saw",
	"kubejs:brass_bolt"
	);
	event.recipes.farmersdelight.cutting(
	"createaddition:iron_rod",
	"tinkersurvival:saw",
	"kubejs:iron_bolt"
	);
	event.recipes.farmersdelight.cutting(
	"kubejs:steel_rod",
	"tinkersurvival:saw",
	"kubejs:steel_bolt"
	);

	event.recipes.create.cutting('2x kubejs:amethyst_bronze_bolt', 'kubejs:amethyst_bronze_rod');
	event.recipes.create.cutting('2x kubejs:steel_bolt', 'kubejs:steel_rod');
	event.recipes.create.cutting('2x kubejs:brass_bolt', 'createaddition:brass_rod');
	event.recipes.create.cutting('2x kubejs:iron_bolt', 'createaddition:iron_rod');
	event.recipes.create.cutting('2x kubejs:hepatizon_bolt', 'kubejs:hepatizon_rod');

	event.shaped(
	"kubejs:wooden_propeller",
	[
		" W ",
		"WAW",
		" W "
	],
	{
		W: "#minecraft:planks",
		A: "create:andesite_alloy"
	});

        event.recipes.create.sandpaper_polishing(
        "kubejs:buzzsaw",
        "kubejs:hepatizon_gear"
        );
	event.replaceInput({
		id: "create:crafting/kinetics/whisk"
	},
	"create:iron_sheet",
	"createaddition:iron_rod"
	);

})
