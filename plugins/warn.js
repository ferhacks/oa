let handler = async (m, { conn}) => {
    const war = m.quoted.sender.id
    const warss = warnss.getwarns(war, _warn, warnCount)
    if (Number(warss) >= 5) {
        kill.sendTextWithMentions(from, `@${war} ha alcanzado los limites, La sancion es: Expulsar`) 
        await kill.removeParticipant(groupId, war)
        warnss.resetwarn(war, _warn)
    } else {
    warnss.addwarn(war, _warn)
    kill.sendTextWithMentions(from, `@${war} Ha sido advertido \n\n${warss}/5\n\n Si tus advertencias llegan a 5 Seras sancionado`)
    }
    
}