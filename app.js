function solution(bishop, pawn) {
    let x = 'abcdefgh'
    bishop = [x.indexOf(bishop[0]), Number(bishop[1])]
    pawn = [x.indexOf(pawn[0]), Number(pawn[1])]
    const m = (bishop[1] - pawn[1]) / (bishop[0] - pawn[0])
    if (Math.abs(m) === 1) return true
    return false
}
