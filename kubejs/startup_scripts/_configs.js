global.CFG = {
    // item burning buff
    inventory_burning: {
        tags: [0, 1, 2].map(x => `kubejs:hot_item_${x}`),
        effect: 'kubejs:inventory_item_burn',
        getEffectTick(amp) {
            return Math.max(20, 30 - amp * 5)
        },
        getEffectDamage(amp) {
            return 1 + amp
        },
        checkInterval: 60,
        checkApplyDuration: 100,
    },
}
