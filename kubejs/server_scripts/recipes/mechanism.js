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
		" K ",
		"KAK",
		" K "
	],
	{
		K: "kubejs:kinetic_mechanism",
		A: "create:andesite_casing"
	});
})
