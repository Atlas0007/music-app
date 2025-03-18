const songs = [
    
    { title: "Song 1", src : "songs/I'm_Your_Angel(256k).mp3" },
    { title: "Song 2", src: "songs/If_Viva_La_Vida_was_sad..._HENRY_MOODIE_X_LORYN_HANSEN_X_JOHN_DAVIS_MASON(256k).mp3" },
    { title: "Song 3", src: "songs/Imagine Dragons - Dream (Lyrics).mp3" },
    { title: "Song 4", src: "songs/It Will Rain - Bruno Mars (Lyrics).mp3" },
    { title: "Song 5", src: "songs/James Arthur - Naked.mp3" } ];

    let songIndex = 0;
    //Load Song
    function loadSong(index){
        console.log("Loading song:", songs[index].title);
        audio.src = songs[index].src;
        songTitle.textContent = song[index].title;
    }