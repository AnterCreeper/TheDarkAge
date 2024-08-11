ServerEvents.recipes(event => {
	event.recipes.create.pressing('kubejs:steel_sheet', 'kubejs:steel_ingot');
	//TODO: steel_block
	event.shapeless('9x kubejs:steel_nugget', 'kubejs:steel_ingot');
	event.shapeless('kubejs:steel_ingot', '9x kubejs:steel_nugget');
	event.shapeless('9x kubejs:steel_ingot', 'kubejs:steel_block');
	event.shapeless('kubejs:steel_block', '9x kubejs:steel_ingot');

	event.custom(
	{
		"type":"createaddition:rolling",
		"input": {
		      	"tag": "forge:ingots/steel"
		},
		"result": {
			"item": "kubejs:steel_rod",
			"count": 2
		}
	});

	event.create.mixing(
	'kubejs:hot_pig_iron_ingot',
	[
		Fluid.of("tconstruct:molten_iron", 90),
		"minecraft:rotten_flesh"
	]).heated();
	event.create.haunting(
		"minecraft:rotten_flesh",
		"#ratatouille:raw_meat"
	);
        event.custom({
                "type": "lychee:item_inside",
                "item_in": {
                        "item": "kubejs:hot_pig_iron_ingot"
                },
                "block_in": {
                        "blocks": ["minecraft:water"]
                },
                "post": {
                        "type": "drop_item",
                        "item": "tconstruct:pig_iron_ingot"
                }
        });
	event.smelting('tconstruct:pig_iron_ingot', 'kubejs:hot_pig_iron_ingot');
	event.blasting('tconstruct:pig_iron_ingot', 'kubejs:hot_pig_iron_ingot');

	let inter = "kubejs:incomplete_hot_steel_ingot";
	event.recipes.create.sequenced_assembly(
        "kubejs:hot_steel_ingot",
        "kubejs:hot_pig_iron_ingot",
        [
                event.recipes.createPressing(inter, inter),
                event.recipes.createPressing(inter, inter),
                event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(2);
	create.splashing('kubejs:steel_ingot', 'kubejs:hot_steel_ingot');

})
