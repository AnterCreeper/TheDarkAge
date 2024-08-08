ServerEvents.recipes(event => {
	//paper
	//iron_sheet
	//brass_sheet
	//golden_sheet
	//copper_sheet
	//zinc_sheet
	//electrum_sheet
	//lapis_sheet
	//refined_radiance_sheet
	//shadow_steel_sheet
	//steel_sheet

	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "minecraft:sugar_cane"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "minecraft:paper",
			"count": 1
		}]
	});

	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "minecraft:iron_ingot"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "create:iron_sheet",
			"count": 1
		}]
	});
	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "create:brass_ingot"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "create:brass_sheet",
			"count": 1
		}]
	});
	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "minecraft:gold_ingot"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "create:golden_sheet",
			"count": 1
		}]
	});
	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "minecraft:copper_ingot"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "create:copper_sheet",
			"count": 1
		}]
	});

	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "createaddition:electrum_ingot"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "createaddition:electrum_sheet",
			"count": 1
		}]
	});
	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "create:zinc_ingot"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "createaddition:zinc_sheet",
			"count": 1
		}]
	});

	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "minecraft:lapis_block"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "rainbowcompound:lapis_sheet",
			"count": 1
		}]
	});
	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "create:shadow_steel"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "rainbowcompound:shadow_steel_sheet",
			"count": 1
		}]
	});
	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "create:refined_radiance"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "rainbowcompound:refined_radiance_sheet",
			"count": 1
		}]
	});

	event.custom(
	{
		"type": "lychee:block_crushing",
		"item_in": [
		{
			"item": "kubejs:steel_ingot"
		}],
		"post": [
		{
			"type": "drop_item",
			"item": "kubejs:steel_sheet",
			"count": 1
		}]
	});

});
