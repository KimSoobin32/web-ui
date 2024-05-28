const wrap = document.querySelector('.wrapper');
const eye = document.querySelector('.eye');

const speed = 1;
let x = 0;
let y = 0;
let followX = 0;
let followY = 0;

function animate() {
  x += (followX - x) * speed;
  y += (followY - y) * speed;
  eye.style.transform=`translate(${-x}px, ${-y}px)`;
  wrap.style.transform=`translate(-50%, -50%) perspective(600px) rotateX(${-y}deg) rotateY(${-x}deg)`;

	requestAnimationFrame(animate);
}

window.addEventListener('mousemove',(e)=>{
  let mouseX = Math.max(-100, Math.min(100, window.innerWidth/2 - e.clientX));
  let mouseY = Math.max(-100, Math.min(100,window.innerHeight/2 - e.clientY));
  
  followX = (12 * mouseX) / 100;
  followY = (10 * mouseY) / 100;
});

window.addEventListener('keydown', (e) => {
  switch(e.keyCode){
    case 37:
      followX = 12;
      break;
    case 38:
      followY = 10;
      break;
    case 39:
      followX = -12;
      break;
    case 40:
      followY = -10;
      break;
    default:
      break;
  }

});
animate();