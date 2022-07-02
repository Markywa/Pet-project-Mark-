const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const img = document.getElementById('img')
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const currentTimeEl = document.getElementById('current-time')
const durationEl = document.getElementById('duration')



const songs = [{
    name: 'oxy1',
    displayName: 'Африканские бусы',
    artist: 'Oxxxymiron'
},
{
    name: 'pyro',
    displayName: '31006',
    artist: 'Pyrokinesis x DAKOOKA'
},
{
    name: 'oxy2',
    displayName: 'Хитиновый покров',
    artist: 'Oxxxymiron'
},
{
    name: 'skr',
    displayName: 'Ламбада',
    artist: 'Скриптонит x T-fest'
},
]


let isPlaying = false;


function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title','pause')
    music.play();
}

function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title','Play')
    music.pause();
}

let songIndex = 0;

function nextSong(){
    songIndex++;
    if (songIndex > songs.length - 1)
    {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function prevSong(){
    songIndex--;
    if (songIndex < 0)
    {
        songIndex = songs.length - 1;
    }
    
    loadSong(songs[songIndex]);
    playSong();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()))

function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `mp3/${song.name}.mp3`;
    img.src = `img/${song.name}.jpg`;
}

loadSong(songs[songIndex]);

function updateProgessBar(e) {
    if (isPlaying)
    {
        const {duration, currentTime} = e.srcElement;
        console.log(duration, currentTime);
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10)
        {
            durationSeconds = `0${durationSeconds}`;
        }
        if (durationSeconds)
        {
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`
        }

        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10)
        {
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`
    }
}

function setProgressBar(e)
{
const width = this.clientWidth;
const clickX = e.offsetX;
const {duration} = music;
music.currentTime = (clickX / width) * duration;
}


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgessBar);
progressContainer.addEventListener('click', setProgressBar)