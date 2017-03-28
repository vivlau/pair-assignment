# Assignment 1: Jukebox Part 1

You will build a Jukebox app using Javascript. It won't be that impressive at first, but we'll make it better every week. It will work as follows:

When the user loads Jukebox, it prompts them to enter a song to play. Jukebox plays the song the user entered. When the song is finished playing, Jukebox prompts the user to enter another song.

Songs will be entered as a string of notes separated by spaces (e.g. "A B C# D"). The letters represent the pitch to play. The user can also optionally specify the length of each note (the number of beats) using (e.g. A*2 B C#*3 D). If the number of beats isn't specified, it should default to 1.

## Setup

I've provided you with player.js (click here to download) which defines a function called playSong to play a song composed of an array of note objects. You can use playSong as follows:

let notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
// Play the song at 400 beats per minute.
playSong(notes, 400);
Tasks

Create a new script file called jukebox.js, where you will put all of your Javascript for this assignment.

First we need to be able to parse individual notes. Write a function called parseNote, that takes a string representing a single note (e.g. "C#*2" or "A") and returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.

```
// Example usage
parseNote("C#*2"); //=> { pitch: 'C#', beats: 2}
parseNote("D"); //=> { pitch: 'D', beats: 1}
Now let's parse a whole song string. Write a function called parse Song that takes a song string as above, and returns an array of note objects. The parseSong function should use the parseNote function.

// Example usage
parseSong("Ab B"); // =>; [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]
Finally, let's build our amazing Jukebox! Create an HTML page that, when loaded, prompts the user for a song string and plays the song. To keep things clean, please use two script tags in your page. One to load the provided player.js file, and one to load your own jukebox.js file.
```

## Bonus

When the song if finished playing, prompt the user for another song, forever! Hint: You can pass an optional 3rd parameter to playSong, a function that will get called when the song is finished playing, as shown below.

```
const onComplete = function () {
   console.log('Song finished playing');
}
playSong(song, bpm, onComplete);
```
