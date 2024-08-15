// 物品栏燃烧
{
    let cfg = global.CFG.inventory_burning
    PlayerEvents.tick(e => {
        const { player } = e
        if (player.age % cfg.checkInterval) return
        let burnLevel = -1
        for (let item of player.inventory.allItems) {
            for (let i = burnLevel + 1; i < cfg.tags.length; i++) {
                if (item.hasTag(cfg.tags[i])) {
                    burnLevel = i
                    break
                }
            }
        }
        if (burnLevel >= 0) {
            player.potionEffects.add(cfg.effect, cfg.checkApplyDuration, burnLevel, true, false)
            player.setSecondsOnFire(cfg.checkApplyDuration / 20)
        }
    })
}
