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
	"createdieselgenerators:engine_piston",
	[
		"A  ",
		" B ",
		"  C"
	],
	{
		A: "create:andesite_alloy",
		B: "kubejs:steel_rod",
		C: "tconstruct:amethyst_bronze_nugget"
	});
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

	let inter = "create:incomplete_track";
	event.recipes.create.sequenced_assembly(
	'6x create:track',
	'#create:sleepers',
	[
		event.recipes.createDeploying(inter, [inter, 'kubejs:hepatizon_rod']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt']),
		event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(2);

	inter = "railways:track_incomplete_create_andesite_narrow";
	event.recipes.create.sequenced_assembly(
	'9x railways:track_create_andesite_narrow',
	'#create:sleepers',
	[
		event.recipes.createCutting(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:hepatizon_rod']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:hepatizon_rod']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt']),
		event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1);

	inter = "railways:track_incomplete_create_andesite_wide";
	event.recipes.create.sequenced_assembly(
	'railways:track_create_andesite_wide',
	'create:track',
	[
		event.recipes.createDeploying(inter, [inter, '#create:sleepers']),
		event.recipes.createCutting(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt']),
		event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1);

	inter = "railways:track_incomplete_tieless";
	event.recipes.create.sequenced_assembly(
	'6x railways:track_tieless',
	'#forge:glass_panes/colorless',
	[
		event.recipes.createDeploying(inter, [inter, 'kubejs:hepatizon_rod']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(2);

	inter = "railways:track_incomplete_tieless_narrow";
	event.recipes.create.sequenced_assembly(
	'9x railways:track_tieless_narrow',
	'#forge:glass_panes/colorless',
	[
		event.recipes.createCutting(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:hepatizon_rod']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:hepatizon_rod']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(1);

	inter = "railways:track_incomplete_tieless_wide";
	event.recipes.create.sequenced_assembly(
	'railways:track_tieless_wide',
	'railways:track_tieless',
	[
		event.recipes.createDeploying(inter, [inter, '#forge:glass_panes/colorless']),
		event.recipes.createCutting(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(1);

	event.shapeless(
		"4x kubejs:tungsten_carbide_mixture",
		Item.withNBT("kubejs:tungsten_mold", {type:"gear"}).weakNBT()
	);
	event.shapeless(
		"5x kubejs:tungsten_carbide_mixture",
		Item.withNBT("kubejs:tungsten_mold", {type:"drill"}).weakNBT()
	);
	event.shapeless(
		"3x kubejs:tungsten_carbide_mixture",
		Item.withNBT("kubejs:tungsten_mold", {type:"teeth"}).weakNBT()
	);
	event.shapeless(
		"2x kubejs:tungsten_carbide_mixture",
		Item.withNBT("kubejs:tungsten_mold", {type:"bolt"}).weakNBT()
	);

	event.shaped(
	{
		item: "kubejs:tungsten_mold",
		nbt:
		{
			display: {Lore: ["{\"text\":\"Gear\"}"]},
			type: "gear"
		}
	},
	[
		"CDC",
		"DCD",
		"CDC"
	],
	{
		"C": "kubejs:fire_clay_ball",
		"D": "kubejs:tungsten_carbide_mixture"
	});
	event.shaped(
	{
		item: "kubejs:tungsten_mold",
		nbt:
		{
			display: {Lore: ["{\"text\":\"Drill\"}"]},
			type: "drill"
		}
	},
	[
		"CDD",
		"CDD",
		"DCC"
	],
	{
		"C": "kubejs:fire_clay_ball",
		"D": "kubejs:tungsten_carbide_mixture"
	});
	event.shaped(
	{
		item: "kubejs:tungsten_mold",
		nbt:
		{
			display: {Lore: ["{\"text\":\"Teeth\"}"]},
			type: "teeth"
		}
	},
	[
		"CDC",
		"CDD",
		"CCC"
	],
	{
		"C": "kubejs:fire_clay_ball",
		"D": "kubejs:tungsten_carbide_mixture"
	});
	event.shaped(
	{
		item: "kubejs:tungsten_mold",
		nbt:
		{
			display: {Lore: ["{\"text\":\"Bolt\"}"]},
			type: "bolt"
		}
	},
	[
		"CCD",
		"CDC",
		"CCC"
	],
	{
		"C": "kubejs:fire_clay_ball",
		"D": "kubejs:tungsten_carbide_mixture"
	});

	event.blasting(
		Item.withNBT("kubejs:burnt_tungsten_mold", {type:"gear"}),
		Item.withNBT("kubejs:tungsten_mold", {type:"gear"}).weakNBT()
	);
	event.blasting(
		Item.withNBT("kubejs:burnt_tungsten_mold", {type:"drill"}),
		Item.withNBT("kubejs:tungsten_mold", {type:"drill"}).weakNBT()
	);
	event.blasting(
		Item.withNBT("kubejs:burnt_tungsten_mold", {type:"teeth"}),
		Item.withNBT("kubejs:tungsten_mold", {type:"teeth"}).weakNBT()
	);
	event.blasting(
		Item.withNBT("kubejs:burnt_tungsten_mold", {type:"bolt"}),
		Item.withNBT("kubejs:tungsten_mold", {type:"bolt"}).weakNBT()
	);

	event.recipes.farmersdelight.cutting(
	Item.withNBT("kubejs:burnt_tungsten_mold", {type:"gear"}).weakNBT(),
        "tconstruct:sledge_hammer",
	"2x kubejs:tungsten_carbide_gear"
	);
	event.recipes.farmersdelight.cutting(
	Item.withNBT("kubejs:burnt_tungsten_mold", {type:"drill"}).weakNBT(),
        "tconstruct:sledge_hammer",
	"kubejs:drill"
	);
	event.recipes.farmersdelight.cutting(
	Item.withNBT("kubejs:burnt_tungsten_mold", {type:"teeth"}).weakNBT(),
        "tconstruct:sledge_hammer",
	"4x kubejs:tungsten_carbide_teeth"
	);
	event.recipes.farmersdelight.cutting(
	Item.withNBT("kubejs:burnt_tungsten_mold", {type:"bolt"}).weakNBT(),
        "tconstruct:sledge_hammer",
	"6x kubejs:tungsten_carbide_bolt"
	);

	event.custom({
		"type": "ratatouille:demolding",
		"ingredients": [{
			"type": "forge:nbt",
			"item": "kubejs:burnt_tungsten_mold",
			"nbt": {
				"type": "gear"
			}
		}],
		"results": [
		{
			"item": "kubejs:tungsten_carbide_gear",
			"count": 2
		},
		{
			"chance": 0.5,
			"item": "kubejs:kaolinite"
		},
		{
			"chance": 0.25,
			"item": "kubejs:kaolinite"
		}]
	});
	event.custom({
		"type": "ratatouille:demolding",
		"ingredients": [{
			"type": "forge:nbt",
			"item": "kubejs:burnt_tungsten_mold",
			"nbt": {
				"type": "drill"
			}
		}],
		"results": [
		{
			"item": "kubejs:drill"
		},
		{
			"chance": 0.5,
			"item": "kubejs:kaolinite"
		},
		{
			"chance": 0.25,
			"item": "kubejs:kaolinite"
		}]
	});
	event.custom({
		"type": "ratatouille:demolding",
		"ingredients": [{
			"type": "forge:nbt",
			"item": "kubejs:burnt_tungsten_mold",
			"nbt": {
				"type": "teeth"
			}
		}],
		"results": [
		{
			"item": "kubejs:tungsten_carbide_teeth",
			"count": 4
		},
		{
			"chance": 0.5,
			"item": "kubejs:kaolinite"
		},
		{
			"chance": 0.25,
			"item": "kubejs:kaolinite"
		}]
	});
	event.custom({
		"type": "ratatouille:demolding",
		"ingredients": [{
			"type": "forge:nbt",
			"item": "kubejs:burnt_tungsten_mold",
			"nbt": {
				"type": "bolt"
			}
		}],
		"results": [
		{
			"item": "kubejs:tungsten_carbide_bolt",
			"count": 6
		},
		{
			"chance": 0.5,
			"item": "kubejs:kaolinite"
		},
		{
			"chance": 0.25,
			"item": "kubejs:kaolinite"
		}]
	});

})
