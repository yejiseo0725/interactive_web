// 전역변수 사용을 회피하기 위한
// '즉시실행 익명 함수' 생성
// 함수 마지막의 (); <-- 덕분에 바로 실행됨.
(() => {
  const actions = {
    birdFlies(key) {
      if (key) {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(${window.innerWidth}px)`;
      } else {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(-100%)`;
      }
    },

    birdFlies2(key) {
      if (key) {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translate(${window.innerWidth}px, ${
          -window.innerHeight * 0.7
        }px)`;
      } else {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translateX(-100%)`;
      }
    },
  };

  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  let currentItem = graphicElems[0];
  let ioindex;

  const io = new IntersectionObserver((entries, observer) => {
    ioindex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    stepElems[i].dataset.index = i;
    if (graphicElems[i]) {
      graphicElems[i].dataset.index = i;
    }
  }

  function activate(action) {
    currentItem.classList.add("visible");
    if (action) {
      actions[action](true);
    }
  }

  function inactivate(action) {
    currentItem.classList.remove("visible");
    if (action) {
      actions[action](false);
    }
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    for (let i = ioindex - 1; i < ioindex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;
      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.2 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        // 🛠 기존 동작 해제 추가
        inactivate(currentItem.dataset.action);
        currentItem = graphicElems[step.dataset.index];
        activate(currentItem.dataset.action);
      }
    }
  });

  window.addEventListener("load", () => {
    setTimeout(() => scrollTo(0, 0), 100);
  });

  activate();
})();
