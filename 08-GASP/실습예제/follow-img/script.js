window.addEventListener('load', () => {
  //대상을 변수에 저장
  const listEl = document.querySelectorAll('.pic-list li');
  const imgBox = document.querySelector('.img-box');
  const img = document.querySelector('img');
  console.log(listEl, imgBox, img);

  //기본 세팅 : .img-box를 작게, 안보이게
  gsap.set(imgBox, { scale: 0.8, autoAlpha: 0 });

  // 대상.forEach(function(){})
  // 대상.forEach((요소, 인덱스) => {}))
  //마우스가 li에 들어오면 각각 할 동작
  listEl.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      //이미지 조립
      img.src = `img/newjeans${index + 1}.webp`;

      //.img-box를 원래 크기로, 보이게
      gsap.to(imgBox, { scale: 1, autoAlpha: 1 });
    });
  });
  //마우스가 li에서 나가면 각각 할 동작
  listEl.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      gsap.to(imgBox, { scale: 0.2, autoAlpha: 0 });
    });
  });

  //li 영역에서 마우스가 움직이면 할 동작
  listEl.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
      console.log(e);
      const imgBoxX = e.pageX;
      const imgBoxY = e.pageY;
      imgBox.style.left = imgBoxX + 'px';
      imgBox.style.top = imgBoxY + 'px';
    });
  });
});
