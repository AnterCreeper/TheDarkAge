ServerEvents.recipes(event => {
	let tools_outputlist = [
		'minecraft:wooden_axe',
		'minecraft:wooden_shovel',
		'minecraft:wooden_hoe',
		'minecraft:wooden_pickaxe',
		'minecraft:wooden_sword',
		'minecraft:stone_axe',
		'minecraft:stone_shovel',
		'minecraft:stone_hoe',
		'minecraft:stone_pickaxe',
		'minecraft:stone_sword',
		'minecraft:iron_axe',
		'minecraft:iron_shovel',
		'minecraft:iron_hoe',
		'minecraft:iron_pickaxe',
		'minecraft:iron_sword',
		'minecraft:diamond_axe',
		'minecraft:diamond_shovel',
		'minecraft:diamond_hoe',
		'minecraft:diamond_pickaxe',
		'minecraft:diamond_sword',
		'minecraft:iron_helmet',
		'minecraft:iron_chestplate',
		'minecraft:iron_leggings',
		'minecraft:iron_boots',
		'minecraft:diamond_helmet',
		'minecraft:diamond_chestplate',
		'minecraft:diamond_leggings',
		'minecraft:diamond_boots'
	];
	for(let i of tools_outputlist){
		event.remove(
		{
			output: `${i}`
		});
	};

	event.remove(
	{
		id: 'createdieselgenerators:basin_fermenting/dough'
	});
	event.remove(
	{
		id: 'minecraft:bread'
	});
        event.remove(
	{
		id: "farmersdelight:wheat_dough_from_eggs"
	});
        event.remove(
	{
		id: "totemic:tipi_from_wool"
	});

        event.remove(
        {
		output: "environmental:grass_thatch"
        });
        event.remove(
        {
		output: "survivalistessentials:plant_string"
        });
        event.remove(
        {
		id: "survivalistessentials:string_from_plant_string"
        });

        event.remove(
        {
		id: "tconstruct:compat/create/andesite_alloy_iron"
        });
        event.remove(
        {
		id: "create:crafting/materials/andesite_alloy"
        });

})

