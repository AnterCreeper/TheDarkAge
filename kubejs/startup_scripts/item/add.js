StartupEvents.registry("item", event => {
	event.create("cooked_kernels")..maxStackSize(16).food(food => {
	food
    		.hunger(2)
    		.saturation(3)
      		.effect("minecraft:hunger", 600, 0, 1)
	})
})
