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

  this.mainElem.style.left = info.xPos + "%";
}

// prototype 객체의 재설정 (기존것을 변화시키기 위함)
Character.prototype = {
  // constructor 속성이 가리키는 것: 생성자 (기존것을 일단 보존하기 위해 따로 지정해 줌)
  constructor: Character,
};
