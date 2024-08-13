ServerEvents.recipes(event => {
	event.shaped(
	"kubejs:kinetic_mechanism",
	[
		"LBL",
		"BGB",
		"CPC"
	],
	{
		L: "#minecraft:wooden_buttons",
		B: "kubejs:brass_bolt",
		G: "create:large_cogwheel",
		C: "create:cogwheel",
		P: "tconstruct:pattern"
	});

	event.shaped(
	"kubejs:andesite_machine",
	[
		"RKR",
		"KAK",
		"RKR"
	],
	{
		K: "kubejs:kinetic_mechanism",
		A: "create:andesite_casing",
		R: "createaddition:iron_rod"
	});

	let inter = "kubejs:incomplete_advanced_kinetic_mechanism";
	event.recipes.create.sequenced_assembly(
	"kubejs:advanced_kinetic_mechanism",
	"create:iron_sheet",
	[
		event.recipes.createDeploying(inter, [inter, 'kubejs:brass_gear']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:steel_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(2);

	inter = "kubejs:incomplete_andesite_machine";
	event.recipes.create.sequenced_assembly(
	"kubejs:andesite_machine",
	"create:andesite_casing",
	[
		event.recipes.createDeploying(inter, [inter, 'kubejs:advanced_kinetic_mechanism']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_gear']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt'])
	]).transitionalItem(inter).loops(1);

	event.recipes.create.deploying('kubejs:sturdy_mechanism', ['kubejs:advanced_kinetic_mechanism', 'create:sturdy_sheet']);

})
