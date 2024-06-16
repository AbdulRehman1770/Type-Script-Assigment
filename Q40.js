"use strict";
function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum("The Midnight", "Endless Summer");
let album2 = makeAlbum("Hozier", "Wasteland, Baby", 12);
let album3 = makeAlbum("Lana Del Rey", "Norman Fucking Rockwell");
console.log(album1);
console.log(album2);
console.log(album3);
