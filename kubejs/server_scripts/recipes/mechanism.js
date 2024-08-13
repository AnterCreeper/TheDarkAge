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
		R: "kubejs:iron_bolt"
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
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:iron_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(1);

	event.recipes.create.deploying('kubejs:sturdy_mechanism', ['kubejs:advanced_kinetic_mechanism', 'create:sturdy_sheet']);

	inter = "kubejs:incomplete_sealed_mechanism";
	event.recipes.create.sequenced_assembly(
	"kubejs:sealed_mechanism",
	"kubejs:burnt_fire_clay_sheet",
	[
		event.recipes.createDeploying(inter, [inter, 'kubejs:advanced_kinetic_mechanism']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:steel_gear']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:amethyst_bronze_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(3);

	inter = "kubejs:incomplete_advanced_sealed_mechanism";
	event.recipes.create.sequenced_assembly(
	"kubejs:advanced_sealed_mechanism",
	"create:sturdy_sheet",
	[
		event.recipes.createDeploying(inter, [inter, 'kubejs:amethyst_bronze_gear']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:hepatizon_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(2);

	inter = "kubejs:incomplete_copper_machine";
	event.recipes.create.sequenced_assembly(
	"kubejs:copper_machine",
	"create:copper_casing",
	[
		event.recipes.createDeploying(inter, [inter, 'kubejs:sealed_mechanism']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:tungsten_carbide_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(3);
	event.recipes.create.sequenced_assembly(
	"kubejs:copper_machine",
	"create:copper_casing",
	[
		event.recipes.createDeploying(inter, [inter, 'kubejs:advanced_sealed_mechanism']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:tungsten_carbide_bolt']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:tungsten_carbide_bolt']),
		event.recipes.createDeploying(inter, [inter, 'create:wrench']).keepHeldItem()
	]).transitionalItem(inter).loops(1);

})
