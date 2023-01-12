import { writable, derived } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/

export const textBufferInitial = {
  raw: "",
  words: [""],
  wordsWanted: 0,
  active: false
}

export const textStory = writable("")
export const textBuffer = writable(textBufferInitial)
export const appStatus = writable("disconnected")
export const writerFocused = writable(false)

/**
 * Derived functions
 */


export const bufferActive = derived(textBuffer, ($textBuffer) => {
  if ($textBuffer.active) {
    return $textBuffer.active
  }
})

export const bufferWords = derived(textBuffer, ($textBuffer) => {
  if ($textBuffer.raw) {
    return $textBuffer.raw.split(" ")
  }
})

export const bufferWordsWanted = derived(textBuffer, ($textBuffer) => {
  if ($textBuffer.wordsWanted) {
    return $textBuffer.wordsWanted
  }
})

// TODO: For this to work, should be a writable store too
export const barSliderValues = derived(textBuffer, ($textBuffer) => {
  if ($textBuffer.words && $textBuffer.wordsWanted) {
    return [$textBuffer.wordsWanted, $textBuffer.words.length]
  }
})