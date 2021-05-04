// Complete Day 1 goals here

let songs = ["Still Your Best", "pink + white", "Fields"]; 
let images = ["https://i1.sndcdn.com/artworks-thySh6hNG3FrYfCA-ULeFSA-t500x500.jpg", "https://i.ytimg.com/vi/uzS3WG6__G4/maxresdefault.jpg", "https://images-na.ssl-images-amazon.com/images/I/81svHp1-4pL._AC_SL1500_.jpg"]; 
let artists = ["Giveon", "Frank Ocean", "Giveon"]; 
let lengths = ["2:58", "3:05", "3:40"]; 
let links = ["https://www.youtube.com/watch?v=24XM2WjWrts","https://www.youtube.com/watch?v=uzS3WG6__G4", "https://www.youtube.com/watch?v=nayxHjvf2p0"]; 

function displaySongInfo() {
  // Day 2 / Task 1: what keywords do you need for a for loop? Perfect! Don't forget the brackets {} for your for loop!
  // append? (yes! - gilbert)
  for (let song of songs) {
    // cool! so, now what do we need to do for every "song" in "songs"? 
    //is that right?
    // yep! but now what do we want to append? (what goes in the "()" )
    // the song title? - yes! what variable represents the song title? songs
    // close! "songs" is all of the songs, but we want to do each "song" (hint) one by one! what's the other option? 
    //the actual song title like "still your best"
    // almost! we're actually going to use the variable "song". the first time we loop, it'll be "Still Your Best", the second time we loop, it'll be "pink + white" etc
    // we use "song" instead of the literal song name since the value of "song" will change during each loop to be the next song in our array
    // weird huh? " .append(song); " (no quotes around 'song', since using quotes will add the literal string "song") :)
    $(".songs").append(song) // nice! any qs? so is that for the Day 2 task 1? or is there more 
    // yes! that's it! task 2 will be similar! oh right just instead of ".songs" its ".images" annd so on?
    // yep! and what else would change? 
    // .append(image) yeah! we'd also want to add new for loops for the different arrays! 
    // so there would be a total a 5 "for" loops? exactly! 1 loop for every array. we can't use the same "for" for multiple arrays with this syntax. kinda a bummer
    // oh! that makes a lot of sense. thank you!! np np! nice job!
    
    // oh oops! make sure this loop isn't in the other one! otherwise good start! :chef-kiss: (https://i.imgflip.com/4k2w2u.jpg) HAHA
   }
  for (let image of images) {
    $(".images").append(image) 
  }
  
  for (let artist of artists) {
    $(".artists").append(artist) 
  }
  
  for (let length of lengths) {
    $(".lengths").append(length) 
  }
  
  for (let link of links) {
    $(".links").append(link) 
  }
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
