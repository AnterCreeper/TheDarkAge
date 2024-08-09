ServerEvents.recipes(event => {
	event.shaped(
	"kubejs:kinetic_mechanism",
	[
		"LBL",
		"BGB",
		"CPC"
	],
	{
		L: "minecraft:lever",
		B: "kubejs:brass_bolt",
		G: "create:large_cogwheel",
		C: "create:cogwheel",
		P: "tconstruct:pattern"
	});
})
