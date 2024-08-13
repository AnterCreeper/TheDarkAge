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
			"item": "kubejs:obsidian_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_obsidian"
		},
		"temperature": 1000,
		"time": 16
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

	event.shapeless(
	"create:iron_sheet",
	[
		"minecraft:iron_ingot",
		"tconstruct:sledge_hammer"
	]).keepIngredient("tconstruct:sledge_hammer");
	event.shapeless(
	"create:copper_sheet",
	[
		"minecraft:copper_ingot",
		"tconstruct:sledge_hammer"
	]).keepIngredient("tconstruct:sledge_hammer");
	event.shapeless(
	"create:brass_sheet",
	[
		"create:brass_ingot",
		"tconstruct:sledge_hammer"
	]).keepIngredient("tconstruct:sledge_hammer");
	event.shapeless(
	"create:golden_sheet",
	[
		"minecraft:gold_ingot",
		"tconstruct:sledge_hammer"
	]).keepIngredient("tconstruct:sledge_hammer");
	event.shapeless(
	"createaddition:zinc_sheet",
	[
		"create:zinc_ingot",
		"tconstruct:sledge_hammer"
	]).keepIngredient("tconstruct:sledge_hammer");
	event.shapeless(
	"createaddition:electrum_sheet",
	[
		"createaddition:electrum_ingot",
		"tconstruct:sledge_hammer"
	]).keepIngredient("tconstruct:sledge_hammer");
	event.shapeless(
	"kubejs:steel_sheet",
	[
		"kubejs:steel_ingot",
		"tconstruct:sledge_hammer"
	]).keepIngredient("tconstruct:sledge_hammer");
	event.shapeless(
	"rainbowcompound:lapis_sheet",
	[
		"minecraft:lapis_block",
		"tconstruct:sledge_hammer"
	]).keepIngredient("tconstruct:sledge_hammer");

	event.shapeless(
	"kubejs:amethyst_bronze_bolt",
	[
		"kubejs:amethyst_bronze_rod",
		"tinkersurvival:saw"
	]).keepIngredient("tinkersurvival:saw");
	event.shapeless(
	"kubejs:brass_bolt",
	[
		"createaddition:brass_rod",
		"tinkersurvival:saw"
	]).keepIngredient("tinkersurvival:saw");
	event.shapeless(
	"kubejs:iron_bolt",
	[
		"createaddition:iron_rod",
		"tinkersurvival:saw"
	]).keepIngredient("tinkersurvival:saw");
	event.shapeless(
	"kubejs:steel_bolt",
	[
		"kubejs:steel_rod",
		"tinkersurvival:saw"
	]).keepIngredient("tinkersurvival:saw");

	event.recipes.create.cutting('2x kubejs:amethyst_bronze_bolt', 'kubejs:amethyst_bronze_rod');
	event.recipes.create.cutting('2x kubejs:steel_bolt', 'kubejs:steel_rod');
	event.recipes.create.cutting('2x kubejs:brass_bolt', 'createaddition:brass_rod');
	event.recipes.create.cutting('2x kubejs:iron_bolt', 'createaddition:iron_rod');

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
})
