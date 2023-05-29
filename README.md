# Description

Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

![image](https://github.com/lucasbbs/codesignal_bishopAndPawn/assets/45081920/60b528bf-9eb0-45f1-ac45-b465fc1277c3)


## Example

For `bishop = "a1"` and `pawn = "c3"`, the output should be
`solution(bishop, pawn) = true`.

![image](https://github.com/lucasbbs/codesignal_bishopAndPawn/assets/45081920/d5210224-0038-4916-a923-458d2e281705)

For `bishop = "h1"` and `pawn = "h3"`, the output should be
`solution(bishop, pawn) = false`.

![image](https://github.com/lucasbbs/codesignal_bishopAndPawn/assets/45081920/06e00744-0a65-4d7f-b5b2-7c352d559d8b)

## Input/Output

- [execution time limit] 4 seconds (js)

- [memory limit] 1 GB

- [input] string bishop

Coordinates of the white bishop in the chess notation.

Guaranteed constraints:
`bishop.length = 2`,
`'a' ≤ bishop[0] ≤ 'h'`,
`1 ≤ bishop[1] ≤ 8`.

- [input] string pawn

Coordinates of the black pawn in the same notation.

Guaranteed constraints:
`pawn.length = 2`,
`'a' ≤ pawn[0] ≤ 'h'`,
`1 ≤ pawn[1] ≤ 8`.

- [output] boolean

`true` if the bishop can capture the pawn, false otherwise.

## Tests

input|output
-|-
bishop: "a1"<br/>pawn: "c3"|true
bishop: "h1"<br/>pawn: "h3"|false
bishop: "a5"<br/>pawn: "c3"|true
bishop: "g1"<br/>pawn: "f3"|false
bishop: "e7"<br/>pawn: "d6"|true
bishop: "e7"<br/>pawn: "a3"|true
bishop: "e3"<br/>pawn: "a7"|true
bishop: "a1"<br/>pawn: "h8"|true
bishop: "a1"<br/>pawn: "h7"|false
bishop: "h1"<br/>pawn: "a8"|true




