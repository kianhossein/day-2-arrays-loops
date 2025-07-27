const songs = ['Bohemian Rhapsody', 'Billie Jean', 'Imagine'];

for (const song of songs) {
  console.log(song);
}

songs.forEach((song, index) => {
  console.log(`${index + 1}. ${song}`);
});

for (let i = 0; i < songs.length; i++) {
  console.log(songs[i]);
}


const songs = ['Bad Guy', 'Thriller', 'Shallow'];

for (let i = 0; i < songs.length; i++) {

  if (songs[i] === `Thriller`) {
    console.log(`${i + 1}. 🎃 ${songs[i]}`);
  } else {
    console.log(`${i + 1}. ${songs[i]}`);
  }
}

const playlist = [
  { title: 'Imagine', duration: 183 },
  { title: 'One Dance', duration: 120 },
  { title: 'Stairway to Heaven', duration: 482 }
];

for (let i = 0; i < playlist.length; i++) {

  if ([i].duration < 180) {
    console.log(`${[i].title} is a short song`);
  }
}

const songs = ['Bohemian Rhapsody', 'bad guy', 'Yesterday', 'All of Me', 'Hallelujah'];

const sorted = songs.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

for (let i = 0; i < sorted.length; i++) {
  console.log(`${i + 1}. ${sorted[i]}`);
}
