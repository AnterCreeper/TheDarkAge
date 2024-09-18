CreateEvents.spoutHandler(event => {
    let corundum = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"];
    corundum.forEach(color => {
            event.add(
            "kubejs:" + color + "_corundum",
            "quark:" + color + "_corundum",
            (block, fluid, simulate) => {
                    if (fluid.id === "minecraft:water" && fluid.amount >= 100) {
                            if (!simulate) block.blockState.randomTick(block.level, block.pos, block.level.random);
                            return 100;
                    }
                    return 0;
            });
    });
})
