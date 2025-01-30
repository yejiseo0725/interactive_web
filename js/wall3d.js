(function () {
  const houseElem = document.querySelector(".house");

  // 전체 문서 높이; 스크롤바 트랙의 높이; body의 높이
  // 현재 문서 높이 - 윈도우 높이 = 스크롤 가능 범위
  let maxScrollValue = 0;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("scroll", function () {
    // 비율: 0~1
    // 490 은 css transfrom 의 default 값을 빼준 것
    const zMove = (scrollY / maxScrollValue) * 970 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";
  });

  window.addEventListener("resize", resizeHandler);
  // 초기화를 위해 일부러 실행
  resizeHandler();
})();
