ServerEvents.recipes(event => {
	let tools_outputlist = [
		'minecraft:wooden_axe',
		'minecraft:wooden_hoe',
		'minecraft:wooden_pickaxe',
		'minecraft:wooden_sword',
		'minecraft:stone_axe',
		'minecraft:stone_shovel',
		'minecraft:stone_hoe',
		'minecraft:stone_pickaxe',
		'minecraft:stone_sword',
		'minecraft:iron_axe',
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
		id: "tconstruct:common/flint"
        });

        event.remove(
        {
		id: "tconstruct:compat/create/andesite_alloy_iron"
        });
        event.remove(
        {
		id: "create:crafting/materials/andesite_alloy"
        });
        event.remove(
        {
		id: "create:crafting/appliances/slime_ball"
        });

	let createaddition_idlist = [
		"createaddition:compacting/seed_oil",
		"createaddition:mixing/bioethanol",
		"createaddition:liquid_burning/plantoil",
		"createaddition:liquid_burning/gasoline",
		"createaddition:liquid_burning/ethanol",
		"createaddition:liquid_burning/diesel",
		"createaddition:liquid_burning/crude_oil",
		"createaddition:liquid_burning/biofuel",
		"createaddition:liquid_burning/biodiesel",
		"createaddition:mixing/biomass_from_sticks",
		"createaddition:mixing/biomass_from_saplings",
		"createaddition:mixing/biomass_from_plants",
		"createaddition:mixing/biomass_from_plant_foods",
		"createaddition:mixing/biomass_from_leaves",
		"createaddition:mixing/biomass_from_honeycomb",
		"createaddition:mixing/biomass_from_flowers",
		"createaddition:mixing/biomass_from_crops"
	];
	for(let i of createaddition_idlist){
                event.remove(
                {
                        id: `${i}`
                });
        };
        event.remove(
        {
		output: "createaddition:seed_oil"
        });
        event.remove(
        {
		id: "createdieselgenerators:basin_fermenting/golden_apple"
        });
        event.remove(
        {
		id: "create:fr/tea"
        });

        event.remove(
        {
		id: "eidolon:pewter_blend"
        });
        event.remove(
        {
		input: "eidolon:pewter_blend"
        });

	event.remove(
	{
		id: "minecraft:paper"
	});
})
