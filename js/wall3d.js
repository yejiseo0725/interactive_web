(function () {
  const houseElem = document.querySelector(".house");

  // 전체 문서 높이; 스크롤바 트랙의 높이; body의 높이
  // 전체 높이 - 스크롤바 제외 높이 = 스크롤 가능 범위
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;

  window.addEventListener("scroll", function () {
    // 비율: 0~1
    // 490 은 css transfrom 의 default 값을 빼준 것
    const zMove = (scrollY / maxScrollValue) * 980 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";
  });
})();
