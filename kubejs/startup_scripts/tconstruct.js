Ingredient.registerCustomIngredientAction('tic_damage', (itemstack, index, inventory) => {
	let unbreakable = false;
	let nbt = itemstack.nbt.getCompound("tic_modifiers");
	for(let modifier of nbt){
		if(modifier.name == "tconstruct:unbreakable"){
			unbreakable = true;
			console.log("Unbreakable Modifier founded!\n");
			break;
		};
	};

	let nbt_damage = itemstack.getDamageValue() + 1;
	if(!unbreakable){
		itemstack.setNbt({Damage:nbt_damage});
	};
});
