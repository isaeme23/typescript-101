interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details{
    author:string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//const { song:anotherSong, songDuration:duration } = audioPlayer;


// Desestructuracion de interface details que esta adentro de AudioPlayer

//const {details:deDetails} = audioPlayer;
//const {author:detailsAuthor, year:newYear} = deDetails;

// console.log('Song: ', anotherSong)
// console.log('Duration', duration)

// console.log('Author: ', detailsAuthor)
// console.log('Year', newYear)

const [, , i3 = "Not found"]: string[] = ["Taylor", "Alison"];

console.log("Elemento:",i3)

export{};