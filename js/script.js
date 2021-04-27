// Complete Day 1 goals here

let songs = ["Still Your Best", "pink + white", "Fields"]; 
let images = ["https://i1.sndcdn.com/artworks-thySh6hNG3FrYfCA-ULeFSA-t500x500.jpg",  "]; 
let artists = [""]; 
let lengths = [""]; 
let links = [""]; 

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
