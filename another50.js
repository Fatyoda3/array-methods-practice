// ### 51. Fruit Log Count
// Count how many times “banana” appears in a fruit log.
const q51 = [['banana', 'apple', 'banana'], ['banana', 'banana'], ['banana']];
const a51 = q51.flat().reduce((totalBananas, fruit) =>
  fruit === 'banana' ?
    totalBananas + 1 : totalBananas, 0);
console.log("51.", a51);

// ### 52. Worksheet Words Combination
// Combine all words written by students on three worksheets.
const q52 = [['jack', 'is', 'evil!'], ['Leon', 'is', 'overpowered'], ['what', 'you', 'buyin\'']];
const a52 = q52.flat().reduce((sentence, currentWord) => sentence.concat(currentWord, ' '), '');
console.log("52.", a52);

// ### 53. Word "Excellent" Check
// Determine whether any student wrote the word “excellent”.
const q53 = [['jack', 'is', 'evil!'], ['Leon', 'is', 'overpowered'], ['what', 'you', 'buyin\'', 'excellent']];
const a53 = q53.flat().some(student => student === 'excellent');
console.log("53.", a53);

// ### 54. Rainfall Cap Validation
// Check whether all recorded rainfall values are under 50.
const q54 = [[1, 44, 5, 4, 32, 2], [234, 323, 12, 33, 50], [2, 46, 67, 443]];
const a54 = q54.flat().every((val) => val < 50);
console.log("54.", a54);

// ### 55. Unique Movie Genres
// Produce a list of unique movie genres mentioned by a club.
const q55 = [['horror', 'sorority', 'war'],
['animated', 'horror', 'adventure'],
['animated', 'war', 'psychology']];
const a55 = q55.flat().reduce((uniqueGenres, current) => {
  if (!(uniqueGenres.includes(current))) {
    uniqueGenres.push(current);
  }
  return uniqueGenres;
}, []);
console.log("55.", a55);

// ### 56. Pushup Total
// Compute the total number of pushups done in all sessions.
const q56 = [[6, 16, 22], [22, 34, 5], [12, 22, 12], [12], [32]]
const a56 = q56.flat().reduce(((count, current) => count + current), 0);
console.log("56.", a56);

// ### 57. Unique Bird Species
// Create a list of all unique bird species spotted on a trip.
const q57 = [['night angel', 'crow', 'swan'], ['flamingo', 'parrot', 'sparrow'], ['ostrich', 'Kori Bustard'], ['duck', 'dodo']];
const a57 = q57.flat().reduce((uniqueSightings, current) => {
  if (!(uniqueSightings.includes(current))) {
    uniqueSightings.push(current);
  }
  return uniqueSightings;
}, []);
console.log("57.", a57);

// ### 58. Red Tile Count
// Count how many tiles in a mosaic were listed as “red”.
const q58 = [['red', 'green', 'blue'], ['red', 'orange', 'purple'], ['red', 'green', 'violet']];
const a58 = q58.flat().reduce((prev, current) => current === 'red' ? prev + 1 : prev, 0);
console.log("58.", a58);

// ### 59. Cycling Distance Sum
// Sum all distances covered during cycling practice.
const q59 = [[1, 44, 5, 4, 32, 2], [234, 323, 12, 33, 50], [2, 46, 67, 443]]
const a59 = q59.flat().reduce((prev, current) => current + prev, 0);
console.log("59.", a59);

// ### 60. Unique Ice Cream Flavors
// List unique flavors tried in an ice-cream tasting event.
const q60 = 
const a60 = q60
console.log("60.", a60);

// ### 61. High Score Check
// Check if any participant scored above 90 in tests.
const q61 = 
const a61 = q61
console.log("61.", a61);

// ### 62. Age Restriction Validation
// Verify if all ages listed for an event are 18 or above.
const q62 = 
const a62 = q62
console.log("62.", a62);

// ### 63. Combined Recipe Ingredients
// Combine the ingredients from all recipe attempts.
const q63 = 
const a63 = q63
console.log("63.", a63);

// ### 64. Reverse Dance Steps
// Reverse the order of dance steps recorded by a choreographer.
const q64 = 
const a64 = q64
console.log("64.", a64);

// ### 65. Word Frequency Summary
// Build a frequency summary of words used in a poem draft.
const q65 = 
const a65 = q65
console.log("65.", a65);

// ### 66. Note "Fa" Check
// Determine whether the note “fa” appears in any music sheet.
const q66 = 
const a66 = q66
console.log("66.", a66);

// ### 67. Parcel Weight Sum
// Sum all weights of parcels recorded in a courier office.
const q67 = 
const a67 = q67
console.log("67.", a67);

// ### 68. Distinct Pizza Toppings
// List distinct toppings chosen by pizza customers.
const q68 = 
const a68 = q68
console.log("68.", a68);

// ### 69. Chapter Reread Count
// Count how many times a student reread a particular chapter.
const q69 = 
const a69 = q69
console.log("69.", a69);

// ### 70. Combine Color Swatches
// Combine all color swatches from three design sets.
const q70 = 
const a70 = q70
console.log("70.", a70);

// ### 71. Maximum Threshold Check
// Check if any experiment reading hit the maximum threshold of 100.
const q71 = 
const a71 = q71
console.log("71.", a71);

// ### 72. Completion Verification
// Verify whether every participant completed at least one task.
const q72 = 
const a72 = q72
console.log("72.", a72);

// ### 73. Unique Travel Destinations
// List unique destinations chosen in a travel club survey.
const q73 = 
const a73 = q73
console.log("73.", a73);

// ### 74. Instrument Practice Sum
// Sum all hours spent practicing an instrument.
const q74 = 
const a74 = q74
console.log("74.", a74);

// ### 75. Distinct Plant Types
// Find all distinct types of plants noted during fieldwork.
const q75 = 
const a75 = q75
console.log("75.", a75);

// ### 76. Specific Sound Occurrence Count
// Count occurrences of a specific sound in a phonetics study.
const q76 = 
const a76 = q76
console.log("76.", a76);

// ### 77. Combined Syllables
// Combine all syllables used in language drills.
const q77 = 
const a77 = q77
console.log("77.", a77);

// ### 78. Zero Measurement Check
// Check if any measurement is exactly zero.
const q78 = 
const a78 = q78
console.log("78.", a78);

// ### 79. Weight Limit Validation
// Verify that all listed items weigh less than 10 grams.
const q79 = 
const a79 = q79
console.log("79.", a79);

// ### 80. Color Frequency Summary
// Summarize how many times each color appears in a creative art project.
const q80 = 
const a80 = q80
console.log("80.", a80);

// ### 81. Reverse Instructions
// Reverse the order of instructions written for a scavenger hunt.
const q81 = 
const a81 = q81
console.log("81.", a81);

// ### 82. Journal Mention Count
// Count how many entries in a journal mention “rain”.
const q82 = 
const a82 = q82
console.log("82.", a82);

// ### 83. Merge Poetry Fragments
// Merge all small poetry fragments into one list of lines.
const q83 = 
const a83 = q83
console.log("83.", a83);

// ### 84. Unique Cartoon Characters
// List unique cartoon characters favored by children.
const q84 = 
const a84 = q84
console.log("84.", a84);

// ### 85. Total Points Scored
// Add up all points scored by a team across multiple games.
const q85 = 
const a85 = q85
console.log("85.", a85);

// ### 86. Exact Score Check
// Check whether any team scored exactly 50 points.
const q86 = 
const a86 = q86
console.log("86.", a86);

// ### 87. pH Value Validation
// Ensure all pH values recorded are below 8.
const q87 = 
const a87 = q87
console.log("87.", a87);

// ### 88. Unique Chocolate Flavors
// Count unique flavors tasted in a chocolate workshop.
const q88 = 
const a88 = q88
console.log("88.", a88);

// ### 89. Meditation Time Sum
// Sum all minutes of meditation logged across sessions.
const q89 = 
const a89 = q89
console.log("89.", a89);

// ### 90. Unique Repair Tools
// Identify every unique tool used in a repair workshop.
const q90 = 
const a90 = q90
console.log("90.", a90);

// ### 91. White Shirt Count
// Count how many shirts in a laundry batch were listed as “white”.
const q91 = 
const a91 = q91
console.log("91.", a91);

// ### 92. Combined Meeting Notes
// Combine all notes written during a meeting into one list.
const q92 = 
const a92 = q92
console.log("92.", a92);

// ### 93. "Fragile" Item Check
// Check if any item in a shipment is marked “fragile”.
const q93 = 
const a93 = q93
console.log("93.", a93);

// ### 94. Lowercase Letter Validation
// Verify that all letters written by participants are lowercase.
const q94 = 
const a94 = q94
console.log("94.", a94);

// ### 95. Reverse Chess Moves
// Reverse a list of moves recorded during a chess game.
const q95 = 
const a95 = q95
console.log("95.", a95);

// ### 96. Musical Note Frequency
// Build a frequency list for musical notes practiced in a session.
const q96 = 
const a96 = q96
console.log("96.", a96);

// ### 97. Error Message Count
// Count the number of times “error” appears in a log of messages.
const q97 = 
const a97 = q97
console.log("97.", a97);

// ### 98. Gather All Ingredients
// Gather all ingredients used in three versions of the same dish.
const q98 = 
const a98 = q98
console.log("98.", a98);

// ### 99. Skipped Activity Check
// Check if any student skipped all activity sessions.
const q99 = 
const a99 = q99
console.log("99.", a99);

// ### 100. Distinct Hummed Songs
// Create a list of distinct songs hummed by children on a bus ride.
const q100 = 
const a100 = q100
console.log("100.", a100);