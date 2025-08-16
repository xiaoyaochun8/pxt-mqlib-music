/**
 * mqMusic blocks
 */

enum MqMusicList {
    //% block="小星星"
    s1 = 1
}

//% weight=100 color=#5c2d91 icon=""
//% groups=['Music','others']
namespace mqlib {
    export function playMusicByAry(array: number[][]) {
        for (let v of array) {
            let a = v[0]
            let b = v[1]
            if (a == 0) {
                music.rest(getT(b))
            } else {
                music.play(music.tonePlayable(getYd(a), getT(b)), music.PlaybackMode.UntilDone)
            }
        }
    }
    function getYd(n: number) {
        let yd = 131
        if (n == 11) {
            yd = 131
        } else if (n == 12) {
            yd = 147
        } else if (n == 13) {
            yd = 165
        } else if (n == 14) {
            yd = 175
        } else if (n == 15) {
            yd = 196
        } else if (n == 16) {
            yd = 220
        } else if (n == 17) {
            yd = 247
        } else if (n == 21) {
            yd = 262
        } else if (n == 22) {
            yd = 294
        } else if (n == 23) {
            yd = 330
        } else if (n == 24) {
            yd = 349
        } else if (n == 25) {
            yd = 392
        } else if (n == 26) {
            yd = 440
        } else if (n == 27) {
            yd = 494
        } else if (n == 31) {
            yd = 523
        } else if (n == 32) {
            yd = 587
        } else if (n == 33) {
            yd = 659
        } else if (n == 34) {
            yd = 698
        } else if (n == 35) {
            yd = 784
        } else if (n == 36) {
            yd = 880
        } else if (n == 37) {
            yd = 988
        }
        return yd
    }
    function getT(n: number) {
        let t = music.beat(BeatFraction.Whole)
        if (n == 1) {
            t = music.beat(BeatFraction.Whole)
        } else if (n == 12) {
            t = music.beat(BeatFraction.Half)
        } else if (n == 14) {
            t = music.beat(BeatFraction.Quarter)
        } else if (n == 18) {
            t = music.beat(BeatFraction.Eighth)
        } else if (n == 116) {
            t = music.beat(BeatFraction.Sixteenth)
        } else if (n == 2) {
            t = music.beat(BeatFraction.Double)
        } else if (n == 4) {
            t = music.beat(BeatFraction.Breve)
        }
        return t
    }

    //% subcategory="音乐"
    //% block
    export function musicPlay(mqMusic: MqMusicList): void {
        if (mqMusic == MqMusicList.s1) {
            let text_list = [
                [21, 1],
                [21, 1],
                [25, 1],
                [25, 1],
                [26, 1],
                [26, 1],
                [25, 1],
                [0, 1],
                [24, 1],
                [24, 1],
                [23, 1],
                [23, 1],
                [22, 1],
                [22, 1],
                [21, 1],
                [0, 1],
                [25, 1],
                [25, 1],
                [24, 1],
                [24, 1],
                [23, 1],
                [23, 1],
                [22, 1],
                [0, 1],
                [25, 1],
                [25, 1],
                [24, 1],
                [24, 1],
                [23, 1],
                [23, 1],
                [22, 1],
                [0, 1],
            ]
            playMusicByAry(text_list)
        } else {
        }

    }
}