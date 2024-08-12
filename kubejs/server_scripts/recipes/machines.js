ServerEvents.recipes(event => {
//	event.smithing(
//	'ratatouille:oven_fan',
//	'kubejs:andesite_machine',
//	'kubejs:wooden_propeller'
//	);
	event.smithing(
	'ratatouille:spreader',
	'ratatouille:oven_fan',
	'minecraft:dried_kelp'
	);
	event.smithing(
	'create:mechanical_roller',
	'kubejs:andesite_machine',
	'create:crushing_wheel'
	);
	event.smithing(
        'create:deployer',
	'kubejs:andesite_machine',
	'create:brass_hand'
	);
	event.smithing(
	'createaddition:rolling_mill',
	'kubejs:andesite_machine',
	'kubejs:steel_rod'
	);
	event.smithing(
        'create:mechanical_saw',
	'kubejs:andesite_machine',
	'kubejs:buzzsaw'
	);
	event.smithing(
	'ratatouille:thresher',
	'kubejs:andesite_machine',
	'create:mechanical_harvester'
	);
	event.smithing(
	'create:mechanical_bearing',
	'kubejs:andesite_machine',
	'create:shaft'
	);
	event.smithing(
	'create:mechanical_piston',
	'kubejs:andesite_machine',
	'create:piston_extension_pole'
	);
	event.smithing(
	'ratatouille:mechanical_demolder',
	'kubejs:andesite_machine',
	"minecraft:slime_block",
	);
	event.smithing(
	'create:millstone',
	'kubejs:andesite_machine',
	'#forge:stone'
	);
	event.smithing(
	'createsifter:sifter',
	'kubejs:andesite_machine',
	'minecraft:amethyst_shard'
	);
	event.smithing(
	'create:mechanical_mixer',
	'kubejs:andesite_machine',
	'create:whisk'
	);
	event.smithing(
	'create:mechanical_drill',
	'kubejs:andesite_machine',
	'kubejs:drill'
	);
	event.smithing(
	'create:encased_fan',
	'kubejs:andesite_machine',
	'create:propeller'
	);
	event.smithing(
	'create:mechanical_press',
	'kubejs:andesite_machine',
	'eidolon:pewter_block'
	);
	event.smithing(
	'create:rope_pulley',
	'kubejs:andesite_machine',
	'farmersdelight:rope'
	);
	event.shaped(
	'create:cuckoo_clock',
	[
		"M",
		"A",
		"C"
	],
	{
		M: "kubejs:advanced_kinetic_mechanism",
		A: "create:andesite_casing",
		C: "minecraft:clock"
	});
	event.replaceInput({
		id: 'create:crafting/kinetics/analog_lever'
	},
	"create:andesite_casing",
	"minecraft:andesite"
	);
	event.smithing(
	'create:gantry_carriage',
	'kubejs:andesite_machine',
	'create:cogwheel'
	);
	event.replaceInput({
		id: "create:encased_chain_drive"
	},
	"minecraft:iron_nugget",
	"minecraft:chain"
	);
})
