export function research(researchId) {
    return {
        type: 'RESEARCH',
        researchId
    }
}
export function tick() {
    return {
        type: 'TICK'
    }
}