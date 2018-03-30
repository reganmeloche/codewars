/*

Check if given chord is minor or major.

Rules:

Basic minor/major chord have three elements.

Chord is minor when interval between first and second element equals 3 and between second and third -> 4.

Chord is major when interval between first and second element equals 4 and between second and third -> 3.

In minor/major chord interval between first and third element equals... 7.

There is a preloaded list of the 12 notes of a chromatic scale built on C. This means that there are (almost) all allowed note' s names in music.

notes = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']

Note that e. g. 'C#' - 'C' = 1, 'C' - 'C#' = 1, 'Db' - 'C' = 1 and 'B' - 'C' = 1.

Input: String of notes separated by whitespace, e. g. 'A C# E'

Output: String message: 'Minor', 'Major' or 'Not a chord'.

*/

function minorOrMajor(chord){
  let result = 'Not a chord';
  
  let chordNotes = chord.split(' ');
  if (chordNotes.length != 3) { return result; }
  
  var l1 = getPos(chordNotes[0]);
  var l2 = getPos(chordNotes[1]);
  var l3 = getPos(chordNotes[2]);
  
  if (l1 < 0 || l2 < 0 || l3 < 0) { return result; }
  
  var i12 = getDiff(l1,l2);
  var i23 = getDiff(l2,l3);
  var i13 = getDiff(l1,l3);

  if (i12 == 4 && i13 == 7 && i23 == 3) { result = 'Major'; }
  if (i12 == 3 && i13 == 7 && i23 == 4) { result = 'Minor'; }

  
  return result;
}

function getDiff(l1, l2) {
  return (((l2 - l1) % 12) + 12) % 12;
}

function getPos(note) {
  var f = theNotes.indexOf(note[0]);
  if (note.indexOf('b') > 0) {
    f -=1;
  }
  
  if (note.indexOf('#') > 0) {
    f +=1;
  } 
  return f;
}

const theNotes = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B'];

// Test
Test.describe('Major chords',_=>{
Test.assertEquals(minorOrMajor('C E G'), 'Major');
Test.assertEquals(minorOrMajor('Db F Ab'), 'Major');
Test.assertEquals(minorOrMajor('D F# A'), 'Major');
Test.assertEquals(minorOrMajor('Eb G Bb'), 'Major');
Test.assertEquals(minorOrMajor('E G# B'), 'Major');
Test.assertEquals(minorOrMajor('F A C'), 'Major');
Test.assertEquals(minorOrMajor('F# A# C#'), 'Major');
Test.assertEquals(minorOrMajor('Gb Bb Db'), 'Major');
Test.assertEquals(minorOrMajor('G B D'), 'Major');
Test.assertEquals(minorOrMajor('Ab C Eb'), 'Major');
Test.assertEquals(minorOrMajor('A C# E'), 'Major');
Test.assertEquals(minorOrMajor('Bb D F'), 'Major');
Test.assertEquals(minorOrMajor('B D# F#'), 'Major');
})
Test.describe('Minor chords',_=>{
Test.assertEquals(minorOrMajor('C Eb G'), 'Minor');
Test.assertEquals(minorOrMajor('C# E G#'), 'Minor');
Test.assertEquals(minorOrMajor('D F A'), 'Minor');
Test.assertEquals(minorOrMajor('D# F# A#'), 'Minor');
Test.assertEquals(minorOrMajor('Eb Gb Bb'), 'Minor');
Test.assertEquals(minorOrMajor('E G B'), 'Minor');
Test.assertEquals(minorOrMajor('F Ab C'), 'Minor');
Test.assertEquals(minorOrMajor('F# A C#'), 'Minor');
Test.assertEquals(minorOrMajor('G Bb D'), 'Minor');
Test.assertEquals(minorOrMajor('G# B D#'), 'Minor');
Test.assertEquals(minorOrMajor('A C E'), 'Minor');
Test.assertEquals(minorOrMajor('Bb Db F'), 'Minor');
Test.assertEquals(minorOrMajor('B D F#'), 'Minor');
})
Test.describe('Invalid chords',_=>{
Test.assertEquals(minorOrMajor('C D G'), 'Not a chord');
Test.assertEquals(minorOrMajor('A C D'), 'Not a chord');
Test.assertEquals(minorOrMajor('A C# D#'), 'Not a chord');
Test.assertEquals(minorOrMajor('D F A G'), 'Not a chord');
Test.assertEquals(minorOrMajor('D F'), 'Not a chord');
Test.assertEquals(minorOrMajor('D F A C#'), 'Not a chord');
Test.assertEquals(minorOrMajor('K L M'), 'Not a chord');
Test.assertEquals(minorOrMajor('C A G'), 'Not a chord');
Test.assertEquals(minorOrMajor('C H G'), 'Not a chord');
Test.assertEquals(minorOrMajor('C A G'), 'Not a chord');
Test.assertEquals(minorOrMajor('G E C'), 'Not a chord');
Test.assertEquals(minorOrMajor('E C A'), 'Not a chord');
Test.assertEquals(minorOrMajor('G# E C#'), 'Not a chord');
Test.assertEquals(minorOrMajor('Bb Gb Eb'), 'Not a chord');
})
