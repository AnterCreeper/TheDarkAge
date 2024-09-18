ServerEvents.tags('item', event => {
	let corundum = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"];
	corundum.forEach(color => {
		event.add('forge:corundum_clusters', 'quark:'+ color +'_corundum_cluster');
	});
	event.add("forge:tools/knives", "eidolon:athame");
})

ServerEvents.tags('block', event => {
        event.add('minecraft:mineable/axe', 'kubejs:treated_wood');
        event.add('minecraft:needs_wood_tool', 'kubejs:treated_wood');
})
