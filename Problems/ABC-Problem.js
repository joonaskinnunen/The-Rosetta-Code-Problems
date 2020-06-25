/*
You are given a collection of ABC blocks [e.g., childhood alphabet blocks]. There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

[B, O]
[X, K]
[D, Q]
[C, P]
[N, A]
[G, T]
[R, E]
[T, G]
[Q, D]
[F, S]
[J, W]
[H, U]
[V, I]
[A, N]
[O, B]
[E, R]
[F, S]
[L, Y]
[P, C]
[Z, M]
Implement a function that takes a string [word] and determines whether the word can be spelled with the given collection of blocks.

Some rules to keep in mind:

Once a letter on a block is used, that block cannot be used again.
The function should be case-insensitive. */

function canMakeWord(word) {
    let wordBlocks = [["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"], ["G", "T"], ["R", "E"], ["T", "G"], ["Q", "D"], ["F", "S"], ["J", "W"], ["H", "U"], ["V", "I"], ["A", "N"], ["O", "B"], ["E", "R"], ["F", "S"], ["L", "Y"], ["P", "C"], ["Z", "M"]]
    let letterFound = false
    for(let i = 0; i < word.length; i++) {
        for(let j = 0; j < wordBlocks.length; j++) {
            if(wordBlocks[j][0].toLowerCase() === word.charAt(i).toLowerCase() || wordBlocks[j][1].toLowerCase() === word.charAt(i).toLowerCase()) {
                removeBlock(j)
                break
            } else {
                letterFound = false
            }
        }
        if(letterFound === false) {
            break
        }
    }
    function removeBlock(index) {
        letterFound = true
        wordBlocks.splice(index, 1)
    }
    console.log(letterFound)
    return letterFound
  }

  canMakeWord("c5onFUSE55")