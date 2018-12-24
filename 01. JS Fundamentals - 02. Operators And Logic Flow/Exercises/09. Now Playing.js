function nowPlaying (array) {
    let trackName = array[0];
    let artistName = array[1];
    let duration = array[2];
    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`);
}
nowPlaying(['Number One', 'Nelly', '4:09']);