ServerEvents.recipes(event => {
	event.custom(
	{
		"type":"createaddition:rolling",
		"input": {
		      	"tag": "forge:ingots/amethyst_bronze"
		},
		"result": {
			"item": "kubejs:amethyst_bronze_rod",
			"count": 2
		}
	});

	event.recipes.create.cutting('2x kubejs:amethyst_bronze_bolt', 'kubejs:amethyst_bronze_rod');
	event.recipes.create.cutting('2x kubejs:steel_bolt', 'kubejs:steel_rod');
	event.recipes.create.cutting('2x kubejs:brass_bolt', 'createaddition:brass_rod');
	event.recipes.create.cutting('2x kubejs:iron_bolt', 'createaddition:iron_rod');

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:amethyst_bronze_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_amethyst_bronze"
		},
		"temperature": 820,
		"time": 6
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:steel_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_steel"
		},
		"temperature": 950,
		"time": 30
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:brass_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_brass"
		},
		"temperature": 605,
		"time": 20
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:iron_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_iron"
		},
		"temperature": 800,
		"time": 30
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:diamond_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_diamond"
		},
		"temperature": 1450,
		"time": 85
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "kubejs:obsidian_bolt"
		},
		"result": {
			"amount": 20,
			"fluid": "tconstruct:molten_obsidian"
		},
		"temperature": 1000,
		"time": 16
	});
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "create:sturdy_sheet"
		},
		"result": {
			"amount": 250,
			"fluid": "tconstruct:molten_obsidian"
		},
		"temperature": 1000,
		"time": 73
	});
})
