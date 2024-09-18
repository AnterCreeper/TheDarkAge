let DoEval {
    let namespaces = {}
    let GetNamespace = function (/**@type {Internal.ServerPlayer}*/ player) {
        let key = player.stringUuid
        if (!namespaces[key]) namespaces[key] = {}
        return namespaces[key]
    }
    DoEval = function (code, player) {
        player.tell(Text.gold('Code:').append(Text.white(code)).clickCopy(code))
        let ns = GetNamespace(player)
        try {
            let tmp
            with (global) {
                tmp = eval(code)
                player.tell(Text.green('Result:').append(Text.white(tmp)).clickCopy(tmp))
            }
            ns.res = tmp
        } catch (e) {
            player.tell(Text.red('Error:').append(Text.white(e)).clickCopy(e))
        }
    }
}

PlayerEvents.chat(e => {
    if (e.level.isClientSide()) return
    let code = String(e.message)
    if (!code.startsWith('e@')) return
    code = code.substring(2)
    Utils.server.scheduleInTicks(0, () => DoEval(code, e.player))
    e.cancel()
})
