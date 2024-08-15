StartupEvents.registry('mob_effect', e => {
    let cfg = global.CFG.inventory_burning
    e.create(cfg.effect)
        .harmful()
        .effectTick(entity => {
            let effects = entity.potionEffects
            let amp = effects.getActive(cfg.effect).amplifier
            let timeLeft = effects.getDuration(cfg.effect)
            if (timeLeft % cfg.getEffectTick(amp)) return
            entity.attack(DamageSource.ON_FIRE, cfg.getEffectDamage(amp))
        })
})
