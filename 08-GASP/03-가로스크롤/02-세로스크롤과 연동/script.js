const horizonScroll = document.querySelector('.horizontal-scroll');
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sec4',
    pin: true,
    markers: true,
    start: 'top top',
    end: () => '+=' + horizonScroll.offsetWidth,
    scrub: 2,
    // scrub 숫자 늘리면 휠이 따라가는 속도 느려짐
  },
});
tl.from(horizonScroll, { autoAlpha: 0, duration: 2 });
// duration 주면 이동되는 속도 다같이 빨라지는 효과도 있음..
tl.to(horizonScroll, {
  x: () => -(horizonScroll.offsetWidth - innerWidth),
  duration: 30,
});
tl.to('.fake', { x: 10, delay: 10 });
//fake div를 추가하여 가로스크롤 끝나고 바로 내려가는 현상 제거.. 좀 기다림 효과

//개별 움직임을 가로 스크롤과 연동
gsap.from('.pic1', {
  x: -100,
  autoAlpha: 0,
  scrollTrigger: {
    containerAnimation: tl,
    trigger: '.pic1',
    start: 'left 60%',
    markers: true,
  },
});
