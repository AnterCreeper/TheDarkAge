ServerEvents.tags('item', event => {
	let corundum = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"];
	corundum.forEach(color => {
		event.add('forge:corundum_clusters', 'quark:'+ color +'_corundum_cluster');
	});
	event.add("forge:tools/knives", "eidolon:athame");
})
