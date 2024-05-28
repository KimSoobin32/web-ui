let sw = 0;
let sh = 0;
let mx = 0;
let my = 0;
let ox = 0;
let oy = 0;

var body = document.querySelector('.body');
var face = document.querySelector('.face');
var arm = document.querySelector('.arm');
var hand = document.querySelector('.hand');
var bg = document.querySelector('.bg');
var text = document.querySelector('.text');
var dist = 0;
const onMouseMove = (ev) => {
  sw = window.innerWidth * 0.5;
  sh = window.innerHeight * 0.5;
  mx = ev.clientX;
  my = ev.clientY;
  ox = ((sw - mx) / -sw).toFixed(2);
  oy = ((sh - my) / -sh).toFixed(2);
  dist = 1 + ((1 - (Math.abs(sw - mx) / sw)) * 1);
  body.style.transform = `translate3d(${ox * 10}px,${oy * 5}px,10px) rotate(${ox * 1.5}deg)`;
  arm.style.transform = `rotate(${ox * 2}deg) translate3d(${ox * 8}px, ${oy * 7}px, ${dist * 30}px)`;
  hand.style.transform = `translate3d(${ox * 10}px,${oy * 8}px, ${dist * 60}px) rotate(${ox * -5}deg)`;
  face.style.transform = `translate3d(${ox * 9}px,${oy * 5}px,25px) rotate(${ox * -3}deg)`;
  text.style.transform = `translate3d(${ox * 2}px,${oy * 2}px,10px)`;
  console.log(`mouse position: x:${mx} y:${my} `)
  console.log(`face position orientation x:${ox} y:${oy} `)
  console.log('arm translation', `rotate(${ox * 2}deg)`)
};

document.body.addEventListener('mousemove', onMouseMove);

window.addEventListener('deviceorientation', function(event) {
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  
  sw = window.innerWidth * 0.5;
  sh = window.innerHeight * 0.5;
  mx = Math.max(1, gamma*100); //ev.clientX;
  my = Math.max(1, beta*100); //ev.clientY;
  ox = ((sw - mx) / -sw).toFixed(2);
  oy = ((sh - my) / -sh).toFixed(2);
  dist = 1 + ((1 - (Math.abs(sw - mx) / sw)) * 1);
  body.style.transform = `translate3d(${ox * 10}px,${oy * 5}px,10px) rotate(${ox * 1.5}deg)`;
  arm.style.transform = `rotate(${ox * 2}deg) translate3d(${ox * 8}px, ${oy * 7}px, ${dist * 30}px)`;
  hand.style.transform = `translate3d(${ox * 10}px,${oy * 8}px, ${Math.max(1, dist * 60)}px) rotate(${ox * -5}deg)`;
  face.style.transform = `translate3d(${ox * 9}px,${oy * 5}px,25px) rotate(${ox * -3}deg)`;
  text.style.transform = `translate3d(${ox * 2}px,${oy * 2}px,10px)`;
});