ServerEvents.recipes(event => {
	let tools_outputlist = [
		'minecraft:shield',
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
		'minecraft:diamond_boots',
		'delightful:steel_knife',
		'delightful:brass_knife',
		'delightful:bronze_knife',
		'delightful:lead_knife',
		'delightful:zinc_knife',
		'delightful:manasteel_knife',
		'delightful:elementium_knife',
		'delightful:terra_knife',
		'farmersdelight:iron_knife',
		'farmersdelight:diamond_knife'
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
                id: "create:milling/gravel"
        });
        event.remove(
        {
                id: "create:milling/terracotta"
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

	event.remove(
	{
		id: "tconstruct:smeltery/alloys/molten_pig_iron"
	});
	event.remove(
	{
		id: "createaddition:compat/tconstruct/pig_iron"
	});
	event.remove(
	{
		id: "createaddition:compat/tconstruct/pig_iron_2"
	});
	event.remove(
	{
		id: "tconstruct:smeltery/alloys/molten_pewter"
	});
	event.remove(
	{
		id: "tconstruct:smeltery/alloys/molten_hepatizon"
	});
	event.remove(
	{
		id: "create:milling/calcite"
	});
	event.remove(
	{
		id: "ratatouille:salt"
	});
	event.remove(
	{
		id: "immersive_weathering:mulch_block"
	});
	event.remove(
	{
		id: "immersive_weathering:nulch_block"
	});
	event.remove(
	{
		id: "immersive_weathering:tuff"
	});
	event.remove(
	{
		id: "caverns_and_chasms:tuff"
	});
	event.remove(
	{
		id: "create:sequenced_assembly/precision_mechanism"
	});

	let machines_idlist = [
		'ratatouille:oven_fan',
		'create:crafting/kinetics/mechanical_roller',
		'create:crafting/kinetics/deployer',
		'createaddition:crafting/rolling_mill',
		'create:crafting/kinetics/mechanical_saw',
		'ratatouille:thresher',
		'create:crafting/kinetics/mechanical_bearing',
		'create:crafting/kinetics/mechanical_piston',
		'ratatouille:mechanical_demolder',
		'create:crafting/kinetics/millstone',
		'create:crafting/kinetics/mechanical_mixer',
		'create:crafting/kinetics/mechanical_drill',
		'create:crafting/kinetics/encased_fan',
		'create:crafting/kinetics/mechanical_press',
		'create:crafting/kinetics/cuckoo_clock',
		'create:crafting/kinetics/rope_pulley',
		'create:crafting/kinetics/gantry_carriage',
		'createsifter:sifter',
		'create:crafting/kinetics/spout',
		'create:crafting/kinetics/item_drain',
		'createdieselgenerators:crafting/pumpjack_hole',
		'create_things_and_misc:sprinkler_craft',
		'create:crafting/kinetics/hose_pulley'
	];
	for(let i of machines_idlist){
                event.remove(
                {
                        id: `${i}`
                });
        };

	let material_idlist = [
		'torcherino:torcherino',
		'survivalistessentials:leather_from_cooked_meat_smoking',
		'create:crushing/gravel',
		'create:milling/granite',
		'create:milling/diorite',
		'create:mixing/andesite_alloy',
		'create:crushing/tuff',
		'create:crushing/tuff_recycling',
		'minecraft:bone_meal',
		'minecraft:iron_bars',
		'totemic:leather_from_hide',
		'caverns_and_chasms:bundle',
		'carmersdelight:cutting/quartz_block',
		'eidolon:meat_to_flesh',
		'create:crushing/iron/scrap_gold_small',
		'create:crushing/iron/scrap_iron_small',
		'create:crushing/iron/scrap_iron_tiny',
		'tconstruct:smeltery/melting/metal/iron/ingot_1',
		'tconstruct:smeltery/melting/metal/iron/nugget_3',
		'tconstruct:smeltery/melting/metal/gold/powered_rail',
		'delightful:candle_from_animal_fat',
		'delightful:integration/immersive_weathering/tallow_from_animal_fat',
		'create_things_and_misc:slimefluidcraft',
		'create:crushing/update_one/scrap_candles',
		'create:crushing/update_one/scrap_rose_quartz',
		'create:crushing/update_one/scrap_polished_rose_quartz',
		'goety:pulverize/sand_pulverize',
		'tconstruct:smeltery/alloys/molten_electrum',
		'tconstruct:smeltery/alloys/molten_bronze'
	];
	for(let i of material_idlist){
                event.remove(
                {
                        id: `${i}`
                });
        };

	let track_outputlist = [
		'railways:track_acacia',
		'railways:track_birch',
		'railways:track_crimson',
		'railways:track_dark_oak',
		'railways:track_jungle',
		'railways:track_oak',
		'railways:track_spruce',
		'railways:track_warped',
		'railways:track_blackstone',
		'railways:track_ender',
		'railways:track_phantom',
		'railways:track_mangrove',
		'railways:track_acacia_wide',
		'railways:track_birch_wide',
		'railways:track_blackstone_wide',
		'railways:track_crimson_wide',
		'railways:track_dark_oak_wide',
		'railways:track_ender_wide',
		'railways:track_jungle_wide',
		'railways:track_mangrove_wide',
		'railways:track_oak_wide',
		'railways:track_spruce_wide',
		'railways:track_warped_wide',
		'railways:track_acacia_narrow',
		'railways:track_birch_narrow',
		'railways:track_blackstone_narrow',
		'railways:track_crimson_narrow',
		'railways:track_dark_oak_narrow',
		'railways:track_ender_narrow',
		'railways:track_jungle_narrow',
		'railways:track_mangrove_narrow',
		'railways:track_oak_narrow',
		'railways:track_spruce_narrow',
		'railways:track_warped_narrow',
		'railways:track_quark_blossom',
		'railways:track_quark_blossom_wide',
		'railways:track_quark_blossom_narrow',
		'railways:track_quark_ancient',
		'railways:track_quark_ancient_wide',
		'railways:track_quark_ancient_narrow',
		'railways:track_quark_azalea',
		'railways:track_quark_azalea_wide',
		'railways:track_quark_azalea_narrow',

		'create:track',
		'railways:track_create_andesite_wide',
		'railways:track_create_andesite_narrow',
		'railways:track_tieless',
		'railways:track_tieless_narrow',
		'railways:track_tieless_wide'
	];
	for(let i of track_outputlist){
                event.remove(
                {
                        output: `${i}`
                });
        };

	let ore_idlist = [
		
	];
	for(let i of ore_idlist){
                event.remove(
                {
                        id: `${i}`
                });
        };

})
