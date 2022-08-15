import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//получаем секунды по нажатию плей.пауза
player.on('play', fTime);

let time = player.getCurrentTime().then(function (seconds) {});

function fTime(time) {
  console.log(time.seconds);
}
