/*
-------------------------
OVERVIEW
-------------------------
let notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
Play the song at 400 beats per minute.
playSong(notes, 400)
*/

let notes = prompt("Enter some musical notes. Remember to leave spaces between each note, and if you want to change how long a note plays, use '*[number]'.");
let notation;

/*
-------------------------
INSTRUCTIONS
-------------------------
Parse individual notes
Write a function called parseNote
From string "C#*2"); --> pitch: 'C#', beats: 2
If the user doesn't provide a number of beats then set beats to 1.
*/
function parseSong(notes){
  notation = notes.split(" "); //Splits notes string by space
  let song = parseNote(notation);
  const onComplete = function () {
   console.log('Song finished playing');
   parseSong(prompt("Enter some musical notes. Remember to leave spaces between each note, and if you want to change how long a note plays, use '*[number]'."));
  }
  playSong(song, 400, onComplete);
}

function parseNote(str){ //This function parses a string called notes
  // Join each notation so they become strings again
  let phrase = []; //temporary array

  for (let note of notation){
    notation.toString(note); //Changes array elements to strings
    //console.log(note); // Console logs note
    let splitter = note.split("*"); //Splits notation string by *
    //console.log(splitter); // Console logs splitter
    //Assign splitter to p and b columns
    //If b is not a number, assign 1
    let p = splitter[0];
    let b = parseInt(splitter[1]);
    if (isNaN(b) == true){
      b = 1;
    }
    let together = {
      pitch: p,
      beats: b
    };
    //console.log(together);
    phrase.push(together);
  }
  return phrase;
}

parseSong(notes);
