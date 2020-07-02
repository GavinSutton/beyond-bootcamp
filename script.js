jukebox = {}


const reverseButton = document.querySelector(".reverse")
const displaySongList = document.querySelector(".displaySongList")

const songs = [
    {
        songName: "Squeaky Boots", 
        artist: "Tennyson Wolf", 
        album: {
            name: "Bad Beat EP",
            trackOrder: 1,
            single: false
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Colin Jacques", "Jordan Gauthier"],
        releaseOrder: 1,
        spotifyPopStreams: 10,
        spotifyPopSave: 11,
        genre: ["pop", "rock"],
        mp3: "squeakyBoots.mp3",
        mood: ["energetic"],
        dayNight: "day",
    }, 
    {
        songName: "House By The Sea",
        artist: "Tennyson Wolf",
        album: {
            name: "Bad Beat EP",
            trackOrder: 2,
            single: false
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 2,
        spotifyPopStreams: 8,
        spotifyPopSave: 9,
        genre: ["folk"],
        mp3: "houseByTheSea.mp3",
        mood: ["calm", "sad"],
        dayNight: "night",
    }, 
    {
        songName: "Young",
        artist: "Tennyson Wolf",
        album: {
            name: "Bad Beat EP",
            trackOrder: 3,
            single: false
        },
        musicBy: ["Gavin Sutton", "Nick Dooley", "Colin Jacques"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Colin Jacques", "Jordan Gauthier"],
        releaseOrder: 3,
        spotifyPopStreams: 9,
        spotifyPopSave: 12,
        genre: ["pop", "rock", "pop-punk"],
        mp3: "young.mp3",
        mood: ["energetic"],
        dayNight: "day",
    }, 
    {
        songName: "Sad Songs",
        artist: "Tennyson Wolf",
        album: {
            name: null,
            trackOrder: 1,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb", "Matt Newcomb"],
        releaseOrder: 4,
        spotifyPopStreams: 6,
        spotifyPopSave: 8,
        genre: ["pop", "rock", "pop-punk"],
        mp3: "sadSongs.mp3",
        mood: ["energetic", "happy", "upbeat"],
        dayNight: "day",
    },
    {
        songName: "11:11",
        artist: "Tennyson Wolf",
        album: {
            name: null,
            trackOrder: 1,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb", "Matt Newcomb"],
        releaseOrder: 5,
        spotifyPopStreams: 7,
        spotifyPopSave: 7,
        genre: ["pop", "rock", "pop-punk"],
        mp3: "1111.mp3",
        mood: ["energetic"],
        dayNight: "night",
    },
    {
        songName: "Lonely Walks",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 5,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 6,
        spotifyPopStreams: 0,
        spotifyPopSave: 1,
        genre: ["folk", "acoustic", "singer-songwriter"],
        mp3: "lonelyWalks.mp3",
        mood: ["mellow", "sad"],
        dayNight: "night",
    },
    {
        songName: "TV Show",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 9,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: [],
        releaseOrder: 7,
        spotifyPopStreams: 5,
        spotifyPopSave: 5,
        genre: ["pop", "singer-songwriter"],
        mp3: "tvShow.mp3",
        mood: ["mellow"],
        dayNight: "night",
    },
    {
        songName: "My Name",
        artist: "Tennyson Wolf",
        album: {
            name: null,
            trackOrder: 1,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: [],
        releaseOrder: 8,
        spotifyPopStreams: 14,
        spotifyPopSave: 16,
        genre: ["acoustic", "singer-songwriter"],
        mp3: "myName.mp3",
        mood: ["mellow", "sad"],
        dayNight: "night",
    },
    {
        songName: "Might Be",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 7,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 9,
        spotifyPopStreams: 2,
        spotifyPopSave: 2,
        genre: ["pop", "rock", "80s", "synth"],
        mp3: "mightBe.mp3",
        mood: ["energetic"],
        dayNight: "night",
    },
    {
        songName: "The Wild",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 4,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 10,
        spotifyPopStreams: 4,
        spotifyPopSave: 4,
        genre: ["pop", "rock", "80s", "synth"],
        mp3: "theWild.mp3",
        mood: ["energetic", "wild"],
        dayNight: "night",
    },
    {
        songName: "Like This",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 6,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 11,
        spotifyPopStreams: 3,
        spotifyPopSave: 3,
        genre: ["pop", "rock", "indie"],
        mp3: "likeThis.mp3",
        mood: [],
        dayNight: "day",
    },
    {
        songName: "Be Fine",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 3,
            single: true
        },
        musicBy: ["Gavin Sutton", "Scott Girouard"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb", "Scott Girouard"],
        releaseOrder: 12,
        spotifyPopStreams: 15,
        spotifyPopSave: 15,
        genre: ["pop", "electronic"],
        mp3: "beFine.mp3",
        mood: [],
        dayNight: "night",
    },
    {
        songName: "Civil",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 2,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 13,
        spotifyPopStreams: 12,
        spotifyPopSave: 13,
        genre: ["pop", "rock", "anthemic", "80s"],
        mp3: "civil.mp3",
        mood: [],
        dayNight: "day",
    },
    {
        songName: "Whose Shirt",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 8,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 14,
        spotifyPopStreams: 16,
        spotifyPopSave: 14,
        genre: ["pop", "rock", "anthemic", "80s"],
        mp3: "whoseShirt.mp3",
        mood: [],
        dayNight: "night",
    },
    {
        songName: "Thunder and Lightning",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 1,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Fair at VillaSounds"],
        otherMusicians: ["Adam Fair"],
        releaseOrder: 15,
        spotifyPopStreams: 13, 
        spotifyPopSave: 10,
        genre: ["pop", "rock"],
        mp3: "thunderAndLightning.mp3",
        mood: [],
        dayNight: "day",
    },
    {
        songName: "This Side of Midnight",
        artist: "Tennyson Wolf",
        album: {
            name: "Eighteen Nineteen",
            trackOrder: 10,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 16,
        spotifyPopStreams: 11,
        spotifyPopSave: 6,
        genre: ["pop", "rock"],
        mp3: "thisSideOfMidnight.mp3",
        mood: [],
        dayNight: "night",
    },
    {
        songName: "Yesterday's Me",
        artist: "Tennyson Wolf",
        album: {
            name: null,
            trackOrder: 1,
            single: true
        },
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 17,
        spotifyPopStreams: 17,
        spotifyPopSave: 17,
        genre: ["folk", "country", "amricana"],
        mp3: "yesterdaysMe.mp3",
        mood: [],
        dayNight: "day",
    },
]


const displaySongs = () => {
    const songList = document.querySelector(".songList")
    songList.innerHTML = ""
    console.log(songs)
    songs.map((song)=>{
        const listItem = document.createElement("li")
        const songNames = song.songName
        listItem.id = song.mp3
        listItem.append(songNames)
        songList.append(listItem)
    })
}



const reverseSongs = () => {
    const songList = document.querySelector(".songList")
    songList.innerHTML = ""
    const songListForReversing = songs.slice(0)
    const reversed = songListForReversing.reverse()
    console.log(reversed)
    reversed.map((song)=>{
        const listItem = document.createElement("li")
        const songNames = song.songName
        listItem.id = song.mp3
        listItem.append(songNames)
        songList.append(listItem)
    })
}

const changeSong = (id) => {
    const source = document.querySelector("source")
    const audio = document.querySelector("audio")
    source.src = `assets/songs/${id}`
    audio.load();
}

jukebox.init = () => {
    reverseButton.addEventListener('click', reverseSongs)
    displaySongList.addEventListener('click', displaySongs)

    window.onclick = e => {
        changeSong(e.target.id);
    } 
}
    
(function () {
    jukebox.init()
})();