import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let sec = 0;
player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(function (seconds) {
      sec = Math.floor(seconds);
      console.log(sec);
    });
  }, 1000)
);

player.setCurrentTime(sec).then(function (seconds) {});
