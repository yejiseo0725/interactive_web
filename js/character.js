// 생성자 함수: 맨 앞자리 대문자
function Character(info) {
  this.mainElem = document.createElement("div");
  // 의미: <div></div>
  this.mainElem.classList.add("character");
  // 의미: <div class="character"></div>
  // this.mainElem.classList.add("character", "running");
  // add 로 여러 개의 class 넣을 때는 ,(쉼표)로 구분해주기
  this.mainElem.innerHTML =
    "" +
    '<div class="character-face-con character-head">' +
    '<div class="character-face character-head-face face-front"></div>' +
    '<div class="character-face character-head-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-torso">' +
    '<div class="character-face character-torso-face face-front"></div>' +
    '<div class="character-face character-torso-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-arm character-arm-right">' +
    '<div class="character-face character-arm-face face-front"></div>' +
    '<div class="character-face character-arm-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-arm character-arm-left">' +
    '<div class="character-face character-arm-face face-front"></div>' +
    '<div class="character-face character-arm-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-leg character-leg-right">' +
    '<div class="character-face character-leg-face face-front"></div>' +
    '<div class="character-face character-leg-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-leg character-leg-left">' +
    '<div class="character-face character-leg-face face-front"></div>' +
    '<div class="character-face character-leg-face face-back"></div>' +
    "</div>";

  document.querySelector(".stage").appendChild(this.mainElem);

  // 캐릭터 생성 위치 잡기
  this.mainElem.style.left = info.xPos + "%";
  // 현재 스크롤 중인지 아닌지 체크
  this.scrollState = false;
  // 바로 이전(마지막) 스크롤 위치 (현재 스크롤 위치와 비교 위함)
  this.lastScrollTop = 0;
  this.xPos = info.xPos;
  // 방향키를 누르면 이 speed 값 만큼 이동시키려고 만든 변수
  this.speed = 5;
  this.init();
}

// prototype 객체의 재설정 (기존것을 변화시키기 위함)
Character.prototype = {
  // constructor 속성이 가리키는 것: 생성자 (기존것을 일단 보존하기 위해 따로 지정해 줌)
  constructor: Character,
  init: function () {
    const self = this;
    // this 를 window.addEventListener 안에서 사용하기 위해 변수에 넣어줌

    window.addEventListener("scroll", function () {
      // setTimeout 함수를 취소하는 역할
      clearTimeout(self.scrollState);

      // 스크롤이 발생할 때마다 실행 됨 ---> 너무 많은 실행(비효율적)
      if (!self.scrollState) {
        self.mainElem.classList.add("running");
      }

      // setTimeout,500 ---> 0.5초 후에 1번 실행 & 항상 숫자 리턴
      // clear가 되지 못한 마지막 1번만 실행 (효율적)
      self.scrollState = setTimeout(function () {
        self.scrollState = false;
        self.mainElem.classList.remove("running");
      }, 500);

      // 이전 스크롤 위치와 현재 스크롤 위치를 비교
      if (self.lastScrollTop > scrollY) {
        // 이전 스크롤 위치가 크다면: 스크롤 올림
        self.mainElem.setAttribute("data-direction", "backward");
      } else {
        // 현재 스크롤 위치가 크다면: 스크롤 내림
        self.mainElem.setAttribute("data-direction", "forward");
      }

      self.lastScrollTop = scrollY;
    });

    // 키보드 키를 눌렀을 때 발생하는 이벤트
    // 현재의 e.key 속성은 따로 방향 설정 안 해줘도 동작함!
    window.addEventListener("keydown", function (e) {
      if (e.key == "ArrowLeft") {
        self.mainElem.setAttribute("data-direction", "left");
        self.mainElem.classList.add("running");
        self.xPos = self.xPos - self.speed;
        self.mainElem.style.left = self.xPos + "%";
      } else if (e.key == "ArrowRight") {
        self.mainElem.setAttribute("data-direction", "right");
        self.mainElem.classList.add("running");
      }
    });

    // 키보드 키를 뗐을 때 발생하는 이벤트
    window.addEventListener("keyup", function (e) {
      self.mainElem.classList.remove("running");
    });
  },
};
