jukebox = {}


const reverseButton = document.querySelector(".reverse")
const displaySongList = document.querySelector(".displaySongList")

const songs = [
    {
        songName: "Squeaky Boots", 
        artist: "Tennyson Wolf", 
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Colin Jacques", "Jordan Gauthier"],
        releaseOrder: 1,
        genre: ["pop", "rock"],
        mp3: "squeakyBoots.mp3",
        mood: ["energetic"],
        dayNight: "day",
    }, 
    {
        songName: "House By The Sea",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 2,
        genre: ["folk"],
        mp3: "houseByTheSea.mp3",
        mood: ["calm", "sad"],
        dayNight: "night",
    }, 
    {
        songName: "Young",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton", "Nick Dooley", "Colin Jacques"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Colin Jacques", "Jordan Gauthier"],
        releaseOrder: 3,
        genre: ["pop", "rock", "pop-punk"],
        mp3: "young.mp3",
        mood: ["energetic"],
        dayNight: "day",
    }, 
    {
        songName: "Sad Songs",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb", "Matt Newcomb"],
        releaseOrder: 4,
        genre: ["pop", "rock", "pop-punk"],
        mp3: "sadSongs.mp3",
        mood: ["energetic", "happy", "upbeat"],
        dayNight: "day",
    },
    {
        songName: "11:11",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb", "Matt Newcomb"],
        releaseOrder: 5,
        genre: ["pop", "rock", "pop-punk"],
        mp3: "1111.mp3",
        mood: ["energetic"],
        dayNight: "night",
    },
    {
        songName: "Lonely Walks",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 6,
        genre: ["folk", "acoustic", "singer-songwriter"],
        mp3: "lonelyWalks.mp3",
        mood: ["mellow", "sad"],
        dayNight: "night",
    },
    {
        songName: "TV Show",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: [],
        releaseOrder: 7,
        genre: ["pop", "singer-songwriter"],
        mp3: "tvShow.mp3",
        mood: ["mellow"],
        dayNight: "night",
    },
    {
        songName: "My Name",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: [],
        releaseOrder: 8,
        genre: ["acoustic", "singer-songwriter"],
        mp3: "myName.mp3",
        mood: ["mellow", "sad"],
        dayNight: "night",
    },
    {
        songName: "Might Be",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 9,
        genre: ["pop", "rock", "80s", "synth"],
        mp3: "mightBe.mp3",
        mood: ["energetic"],
        dayNight: "night",
    },
    {
        songName: "The Wild",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 10,
        genre: ["pop", "rock", "80s", "synth"],
        mp3: "theWild.mp3",
        mood: ["energetic", "wild"],
        dayNight: "night",
    },
    {
        songName: "Like This",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 11,
        genre: ["pop", "rock", "indie"],
        mp3: "likeThis.mp3",
        mood: [],
        dayNight: "day",
    },
    {
        songName: "Be Fine",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton", "Scott Girouard"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb", "Scott Girouard"],
        releaseOrder: 12,
        genre: ["pop", "electronic"],
        mp3: "beFine.mp3",
        mood: [],
        dayNight: "night",
    },
    {
        songName: "Civil",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 13,
        genre: ["pop", "rock", "anthemic", "80s"],
        mp3: "civil.mp3",
        mood: [],
        dayNight: "day",
    },
    {
        songName: "Whose Shirt",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 14,
        genre: ["pop", "rock", "anthemic", "80s"],
        mp3: "whoseShirt.mp3",
        mood: [],
        dayNight: "night",
    },
    {
        songName: "Thunder and Lightning",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Fair at VillaSounds"],
        otherMusicians: ["Adam Fair"],
        releaseOrder: 15,
        genre: ["pop", "rock"],
        mp3: "thunderAndLightning.mp3",
        mood: [],
        dayNight: "day",
    },
    {
        songName: "This Side of Midnight",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 16,
        genre: ["pop", "rock"],
        mp3: "thisSideOfMidnight.mp3",
        mood: [],
        dayNight: "night",
    },
    {
        songName: "Yesterday's Me",
        artist: "Tennyson Wolf",
        musicBy: ["Gavin Sutton"],
        lyricsBy: ["Gavin Sutton"],
        recordedBy: ["Adam Newcomb at Newcomb Studios"],
        otherMusicians: ["Adam Newcomb"],
        releaseOrder: 17,
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