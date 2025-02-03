(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  const barElem = document.querySelector(".progress-bar");
  const mousePos = { x: 0, y: 0 };

  // 전체 문서 높이; 스크롤바 트랙의 높이; body의 높이
  // 현재 문서 높이 - 윈도우 높이 = 스크롤 가능 범위
  let maxScrollValue = 0;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  // scroll 이 될 때마다 event 실행
  window.addEventListener("scroll", function () {
    const scrollPer = scrollY / maxScrollValue;
    // 비율: 0~1
    // 490 은 css transfrom 의 default 값을 빼준 것
    const zMove = (scrollY / maxScrollValue) * 970 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";

    // progress bar
    barElem.style.width = scrollPer * 100 + "%";
  });

  // mousemove 될 때마다 event 실행
  window.addEventListener("mousemove", function (e) {
    // console.log(e.clientX, e.clientY);
    // 매우 활용도가 높은 계산식: -1 / 0 / +1
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    // console.log(mousePos);

    // ex) 마우스 x축 기준일 때: 수직 이동(y)
    stageElem.style.transform =
      "rotateX(" + mousePos.y * 2 + "deg) rotateY(" + mousePos.x * 2 + "deg)";
  });

  // resize 될 때 마다 event 실행
  window.addEventListener("resize", resizeHandler);
  // 초기화를 위해 일부러 실행
  resizeHandler();

  new Character();
})();
