let numero = randint(5, 10)
basic.showNumber(numero)
for (let index = 0; index <= numero; index++) {
    basic.showNumber(index)
    for (let index2 = 0; index2 < index; index2++) {
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(500)
    }
}
basic.showString("A buscar!!!")
music.playMelody("E B C5 A B G A F ", 120)
