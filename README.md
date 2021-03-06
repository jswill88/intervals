# Interval
Find any musical interval and the interval between two notes. Enter the note, the interval, and specify if you want a downward interval. The enharmonically correct note name will be returned.
### Example:
```js

const { interval, between } = require('@joshuawilliams/interval');

// Perfect
interval('Gb','P4') // => 'Cb'
// Minor
interval('A','m7') // => 'G'
// Major
interval('C#','M3') // => 'E#'
// Augmented
interval('Bb','A5') // => 'F#'
// Diminished
interval('A','d7') // => 'Gb'

// Intervals down
interval('Bb','m3','down') // => 'G'
interval('C#','M6','down') // => 'E'

// Double sharps and flats
interval('Dx','d5') // => 'A#'
interval('Ebb','A2') // => 'F'

// Triple (or more) sharps and flats
interval('Bx#', 'm2') // => 'Cx#'

// Extended intervals
interval('F','M13') // => 'D'
interval('G', 'm9') // => 'Ab'

// Tritone
interval('A', 'TT') // => 'D#'

// Doubly diminished and augmented
interval('E','dd3') // => 'Gbb'
interval('F','AA5') // => 'Cx'

// Intervals between two notes
between('A','E') // => 'P5'
between('Db','F') // => 'M3'
between('G#','D') // => 'd5'
between('Cb','F') // => 'A4'
between('E', 'G') // => 'm3'

```

## interval(note, interval, direction)
1. The first argument is the note. It should be a letter from `'A'-'G'`, and can be flatted with `'b'`, sharped with `'#'`, double flatted with `'bb'`, and double sharped with `'x'`.
1. The second argument is the interval, consisting of an interval quality and the interval number.
1. The third argument can be used to indicate a descending interval with either `'down'` or `'descending'`
### Interval options: 
| Quality | Description| Number options |
| -- | -- |-- |
| `P` | Perfect | 1, 4, 5, 8, 11, 12, etc. |
| `m` | minor | 2, 3, 6, 7, 9, 10, 13, etc. |
| `M` | Major | 2, 3, 6, 7, 9, 10, 13, etc. |
| `d` | diminished* | Any |
| `A` | Augmented* | Any|
| `TT` | Tritone | None | 
\*Diminished and augmented can be doubled or tripled (or more) by repeating the `'d'` or `'A'`. `'ddd4'` for example would represent a triply diminished 4th.  
## between(note1, note2)
1. Both arguments are notes. Each note needs to be a letter from `'A'-'G'`, and can be flatted with `'b'`, sharped with `'#'`, double flatted with `'bb'`, and double sharped with `'x'`.
1. `between()` will return the interval between both the notes. It will interpret the note1 as the lower note and note 2 as the higher note.
