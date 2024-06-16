/*Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return 
a Object containing these two pieces of information. Use the function to make three 
dictionaries representing different albums */
type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

let album1: Album = makeAlbum("The Midnight", "Endless Summer");
let album2: Album = makeAlbum("Hozier", "Wasteland, Baby", 12);
let album3: Album = makeAlbum("Lana Del Rey", "Norman Fucking Rockwell");

console.log(album1);
console.log(album2);
console.log(album3);
