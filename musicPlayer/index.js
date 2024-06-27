const songs = [
    {
        title: "Tod da e Dil",
        artist: "Ammy Virk",
        src:"song1.mp3"
    },
    {
        title: "Champagne",
        artist: "Diljit dosanjh",
        src: "song2.mp3"
    },
    {
        title: "Dabde ni",
        artist: "Ammy virk,Avvy sara",
        src: "song3.mp3"
    },
    {
        title: "Meri pyari ammi",
        artist: "Zaira wasim",
        src: "song4.mp3"
    },
    {
        title: "G.O.A.T",
        artist: "Siddhu moosewala",
        src: "song5.mp3"
    },
];
let currentSongIndex = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playButton = document.getElementById('play');
// const volumeControl = document.getElementById('volume');
const seekbar = document.getElementById('seekbar');


function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}
function playSong() {
    audio.play();
    playButton.textContent ="⏸";
}
function pauseSong() {
    audio.pause();
    playButton.textContent = "▶";
}
function togglePlayPause() {
    if (audio.paused) {
        playSong();

    } else {
        pauseSong();
    }
}

function backSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

audio.addEventListener('loadedmetadata', function() {
    seekbar.max = audio.duration;
});

audio.addEventListener('timeupdate', function() {
    seekbar.value = audio.currentTime;
});
seekbar.addEventListener('input', function() {
    audio.currentTime = seekbar.value;
});

audio.addEventListener('ended',function(){
    nextSong();
});
loadSong(songs[currentSongIndex]);
