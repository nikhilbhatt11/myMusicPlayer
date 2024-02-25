const allSongs = [
  {
    id: 1,
    name: "Tera song yaara",
    artist: "Atif Aslam",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.utiA0JT0OWNefTGULyFHZwHaEK&pid=Api&P=0&h=180",
    genre: "Pop",
    source: "terasaangyaara.mp3",
    playlists: [],
  },
  {
    id: 2,
    name: "closer",
    artist: "Chainsmoker",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.oFuoGhVbXdLFZMGj5fu-6wHaHa&pid=Api&P=0&h=180",
    genre: "Rock",
    source: "Closer---The-Chainsmokers-Ft.-Halsey-320(PagalWorlld.Com).mp3",
    playlists: [],
  },
  {
    id: 3,
    name: "Perfect",
    artist: "ED shereen",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.NHlx4BgN036c2FAkGz3s9QHaEK&pid=Api&P=0&h=180",
    genre: "Hip Hop",
    source: "Perfect-(PagalSongs.Com.IN).mp3",
    playlists: [],
  },
  {
    id: 4,
    name: "Apna banala piya",
    artist: "Arijet Singh",
    image:
      "data:image/jpeg;base64,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",
    genre: "Pop",
    source: "Apna-Bana-Le---Bhediya(iTunesMp3).mp3",
    playlists: [],
  },
  {
    id: 5,
    name: "Gulabi saara",
    artist: "Aur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-G1JQkFY0s5kQmIN2UJ4j_sQQEI1CrqOtw&s",
    genre: "Rock",
    source: "Gulabi-Sharara(PaglaSongs).mp3",
    playlists: [],
  },
  {
    id: 6,
    name: "Hawayain",
    artist: "Arijet Singh",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.7yrO0oMJfubX0zZh5oX3igHaEK&pid=Api&P=0&h=180",
    genre: "Hip Hop",
    source: "Hawayein(PaglaSongs).mp3",
    playlists: [],
  },
];

var ID;

var allplaylist = [];

var curr = "";

const filterbtn = document.getElementById("filteroptions");
const modebtn = document.getElementById("modebtn");
const body = document.querySelector("body");
const mainheading = document.querySelector("h1");
const allSong = document.getElementById("allSongs");
const midcontainer = document.getElementById("songCard");
const lastcontainer = document.getElementById("playList");
const myinputtag = document.getElementById("myinput");
function displaysong(songs) {
  const filteredSongsContainer = document.getElementById("filteredSong");
  songs.forEach((song) => {
    const songEle = document.createElement("p");
    songEle.innerText = `${song.name}`;
    filteredSongsContainer.appendChild(songEle);
    if (song.id == 1) {
      displaySelectedSong(song.id);
      ID = song.id;
    }

    songEle.addEventListener("click", () => {
      displaySelectedSong(song.id);
      ID = song.id;
    });
  });
}

const filterSongByGenre = (genre) => {
  if (genre == "all") {
    return allSongs;
  } else {
    return allSongs.filter((song) => song.genre == genre);
  }
};

function clickprebtn(presong) {
  if (presong < 1) {
    presong = allSongs.length;
  }
  displaySelectedSong(presong);
}

function clicknextbtn(nextsong) {
  if (nextsong == allSongs.length + 1) {
    nextsong = 1;
  }
  displaySelectedSong(nextsong);
}

function addtomylist(songId) {
  const currlist = document.getElementById("currplaylist");
  let arr = [];
  let currsong = {};
  allSongs.filter((song) => {
    if (song.id == songId) {
      // arr.push(song);
      currsong = song;
      currsong.playlists.push(curr);
    }
  });
  console.log(currsong);
  arr = allSongs.filter((song) => song.playlists.includes(curr));
  currlist.innerHTML = "";
  arr.map((song) => {
    const songname = document.createElement("p");

    songname.innerText = `${song.name}`;
    currlist.appendChild(songname);
  });
}

function displaySelectedSong(songId) {
  allSongs.filter((song) => {
    if (song.id == songId) {
      const songImage = document.getElementById("songImage");

      const songdetail = document.getElementById("songdetail");
      songImage.innerHTML = "";
      songdetail.innerHTML = "";
      songImage.innerHTML = `<img src="${song.image}"/><p>${song.name}</p><p>${song.artist}</p>`;
      songdetail.innerHTML = `<audio controls>
  <source src="${song.source}" type="audio/ogg"/>
</audio>`;
    }
  });
  const prebtn = document.getElementById("prebtn");
  const nextbtn = document.getElementById("nextbtn");

  prebtn.addEventListener("click", () => {
    let presong = songId - 1;
    clickprebtn(presong);
  });
  nextbtn.addEventListener("click", () => {
    let nextsong = songId + 1;
    clicknextbtn(nextsong);
  });
}
const addtoplaylist = document.getElementById("addplaylistbtn");

addtoplaylist.addEventListener("click", () => {
  addtomylist(ID);
});

function filteroption() {
  const filterbtn = document.getElementById("filteroptions");
  const selectedGenre = filterbtn.value;

  const filterdSong = filterSongByGenre(selectedGenre);
  const filteredSongsContainer = document.getElementById("filteredSong");
  filteredSongsContainer.innerText = "";

  // console.log(newarr);

  filterdSong.forEach((song) => {
    const songEle = document.createElement("p");
    songEle.innerText = `${song.name}-${song.artist}`;

    filteredSongsContainer.appendChild(songEle);
    songEle.addEventListener("click", () => {
      const songId = song.id;

      displaySelectedSong(songId);
      ID = songId;
    });
  });
}

filterbtn.addEventListener("change", filteroption);

function selectplaylist() {}

function createplaylist() {
  let myplaylistname = [];
  var playlistinput = document.getElementById("myinput");

  const playlistnames = playlistinput.value;

  const myplaylists = document.getElementById("myplaylists");
  const currlist = document.getElementById("currplaylist");
  currlist.innerHTML = "";

  // myplaylistname.push(playlistnames);
  allplaylist.push(playlistnames);
  console.log("allplaylist", allplaylist);
  // allplaylist.map((value) => {
  myplaylists.innerHTML = "";
  allplaylist.forEach((value) => {
    const listname = document.createElement("p");
    listname.innerText = `${value}`;
    myplaylists.appendChild(listname);
    listname.addEventListener("click", () => {
      currlist.innerHTML = "";
      let arr = [];
      curr = value;
      arr = allSongs.filter((song) => song.playlists.includes(curr));
      console.log(arr);
      arr.map((song) => {
        const songname = document.createElement("p");

        songname.innerText = `${song.name}`;
        currlist.appendChild(songname);
      });
    });
    // currlist.innerHTML = "";
  });
  playlistinput.value = " ";
}

const createplaylistbtn = document.getElementById("playlistbtn");

createplaylistbtn.addEventListener("click", createplaylist);

let darkmode = true;
modebtn.addEventListener("click", () => {
  if (darkmode) {
    darkmode = false;
    body.classList.add("bodymode");
    mainheading.classList.add("headingdarkmode");
    allSong.classList.add("darkmodecontainer");
    midcontainer.classList.add("darkmodecontainer");
    lastcontainer.classList.add("darkmodecontainer");
    myinputtag.classList.add("darkmodecontainer");
  } else {
    darkmode = true;
    body.classList.remove("bodymode");

    mainheading.classList.remove("headingdarkmode");
    allSong.classList.remove("darkmodecontainer");
    midcontainer.classList.remove("darkmodecontainer");
    lastcontainer.classList.remove("darkmodecontainer");
    myinputtag.classList.remove("darkmodecontainer");
  }
});

displaysong(allSongs);
