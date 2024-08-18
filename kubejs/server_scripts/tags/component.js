ServerEvents.tags('item', event => {
	event.add('forge:gears', 'kubejs:diamond_gear');
	event.add('forge:gears', 'kubejs:obsidian_gear');
	event.add('forge:gears/iron', 'kubejs:iron_gear');
	event.add('forge:gears', 'kubejs:brass_gear');
	event.add('forge:gears/brass', 'kubejs:brass_gear');
	event.add('forge:gears', 'kubejs:steel_gear');
	event.add('forge:gears/steel', 'kubejs:steel_gear');
        event.add('forge:rods', 'kubejs:steel_rod');
        event.add('forge:rods/steel', 'kubejs:steel_rod');
	event.add('forge:rods', 'kubejs:amethyst_bronze_rod');
	event.add('forge:rods/amethyst_bronze', 'kubejs:amethyst_bronze_rod');
	event.add('forge:gears', 'kubejs:amethyst_bronze_gear');
	event.add('forge:gears/amethyst_bronze', 'kubejs:amethyst_bronze_gear');
	event.add('forge:rods', 'kubejs:hepatizon_rod');
	event.add('forge:rods/hepatizon', 'kubejs:hepatizon_rod');
	event.add('forge:gears', 'kubejs:hepatizon_gear');
	event.add('forge:gears/hepatizon', 'kubejs:hepatizon_gear');
	event.add('forge:gears', "create:cogwheel");

	event.add('kubejs:flint_and_steel_alt', "minecraft:flint_and_steel");
	event.add('kubejs:flint_and_steel_alt', "tconstruct:flint_and_brick");
	event.add('kubejs:coal_block_alt', "minecraft:coal_block");
	event.add('kubejs:coal_block_alt', "quark:charcoal_block");

	const seeds = event.get('forge:seeds').getObjectIds();
	const blacklist = Ingredient.of("supplementaries:flax_seeds");
	seeds.forEach(seed => {
		if (!blacklist.test(seed)) event.add('kubejs:seeds', seed);
	})
})
