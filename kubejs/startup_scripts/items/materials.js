StartupEvents.registry("item", event => {
	event.create("borax");
	event.create("rubber");
	event.create("limestone");
	event.create("quicklime");
	event.create("cobalt_powder");
	event.create("tungsten_ore");
	event.create("tungsten_trioxide");
	event.create("tungsten_carbide_mixture");
	event.create("kaolinite");
	event.create("fire_clay_ball");
        event.create("steel_ingot");
	event.create("hss_ingot");

        event.create("hot_pig_iron_ingot")
	.tag('kubejs:hot_item_0');
        event.create("incomplete_hot_steel_ingot")
       	.tag('kubejs:hot_item_2');
        event.create("hot_steel_ingot")
       	.tag('kubejs:hot_item_1');
})
