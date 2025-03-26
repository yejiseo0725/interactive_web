// 전역변수 사용을 회피하기 위한
// '즉시실행 익명 함수' 생성
// 함수 마지막의 (); <-- 덕분에 바로 실행됨.
(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  // 현재 활성화된(visible 클래스가 붙은) .graphic-item 을 지정
  let currentItem = graphicElems[0];
  let ioindex;

  const io = new IntersectionObserver((entries, observer) => {
    ioindex = entries[0].target.dataset.index * 1;
    // * 1 : 문자열을 숫자로 변환하는 방법
    console.log(ioindex);
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    // stepElems[i].setAttribute("data-index", i);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  // 함수를 기능별로 나눠주기
  function activate() {
    currentItem.classList.add("visible");
  }

  function inactivate() {
    currentItem.classList.remove("visible");
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;
    let temp = 0;

    // for (let i = 0; i < stepElems.length; i++) {
    for (let i = ioindex - 1; i < ioindex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;
      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.2 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate();
        currentItem = graphicElems[step.dataset.index];
        activate();
      }
    }
  });

  activate();
})();
