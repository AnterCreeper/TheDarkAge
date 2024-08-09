ServerEvents.recipes(event => {
	event.campfireCooking('minecraft:torch', 'minecraft:stick');

	event.shaped(
	'totemic:tipi',
	[
		' S ',
		'SLS',
		'L L'
	],
	{
		L: 'minecraft:leather',
		S: 'minecraft:stick'
	});

	event.recipes.create.milling(
	[
		'survivalistessentials:plant_paste',
		Item.of('survivalistessentials:plant_paste').withChance(0.5)
	],
	'survivalistessentials:plant_fiber'
	);

	event.shapeless(
	'3x survivalistessentials:cloth',
	'farmersdelight:canvas'
	);

	event.replaceInput(
	{
		id: 'farmersdelight:cooking/refined_radiance_tea'
	},
	'minecraft:grass',
	'unusualend:chorus_petal');
	event.replaceInput(
	{
		id: 'farmersdelight:cooking/shadow_steel_tea'
	},
	'minecraft:grass',
	'unusualend:chorus_petal');

	event.shaped(
	'farmersdelight:straw',
        [
                'FF'
        ],
        {
                F: 'survivalistessentials:plant_fiber'
        });
	event.shaped(
	'farmersdelight:straw',
        [
                'F',
		'F'
        ],
        {
                F: 'survivalistessentials:plant_fiber'
        });
        event.replaceInput(
        {
                input: 'survivalistessentials:plant_string'
        },
        'survivalistessentials:plant_string',
        'farmersdelight:rope');
        event.replaceInput(
        {
                id: 'survivalistessentials:mortar_and_pestle'
        },
        'survivalistessentials:rock_stone',
        'minecraft:flint');
        event.replaceOutput(
        {
                id: 'survivalistessentials:flint_from_shards'
        },
	'minecraft:flint',
        'minecraft:gravel');

	event.recipes.create.milling(
	'minecraft:gravel',
	'3x minecraft:flint'
	);

})
