/*
--------------------------------PART ONE-------------------------------------
*/

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
    //console.log(p, b); // Console logs p and b
    //console.log(`${pitch} ${p}, ${beats} ${b}`);
    // Make each one into an array
    //let together = `${pitch} ${p}, ${beats} ${b}`;
    //phrase.push(together); //push pieces together into array
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


/*
--------------------------------PART TWO-------------------------------------
*/

/*
-------------------------
INSTRUCTIONS
-------------------------
Parse a whole song string
Write a function called parseSong
Takes a song string as above, and returns an array of note objects
parseSong function uses parseNote function
*/

// function parseSong(func){ //This function parses a function
//     songArray = [func];
//   }
//
// console.log(parseSong(parseNote()));

/*
--------------------------------PART THREE-----------------------------------
*/

/*
-------------------------
INSTRUCTIONS
-------------------------
Create an html page the prompts user for song string and plays song
*/

/*
-------------------------
CODE SNIPPETS
-------------------------
*/

// Tic tac toe
// let row1 = [col1, col2, col3];
// let row2 = [col1, col2, col3];
// let row3 = [col1, col2, col3];
//
// let tictactoe = [row1, row2, row3];
//
// let result = tictactoe[0] // returns [col1, col2, col3]
// result[0]; // returns row1, col1
//
// tictactoe[0][0] = "X" // places X at that part of the game board.


// let headers = "id,first name,last name,email";
// let data = "1,jane,doe,wildmirror@yahoo.com";
//
// let header_arr = headers.split(",");
// let data_arr = data.split(",");
// let user = {};
//
// for (let i = 0; i < header_arr.length; i++) {
//   user[header_arr[i]] = data_arr[i];
// }
//
// console.log(user);
