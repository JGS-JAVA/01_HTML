/*
버튼 클릭시 바디 안 글자색, 배경색 변경
darkmode 버튼 클릭시 기능실행
css 에선 javascript 기능 작성불가
javascript 에선 css 기능 작성가능 (비추천)
*/
const 바디 = document.getElementById("cssStyle");
function darkMode() {
  바디.style.color = "white";
  바디.style.backgroundColor = "black";
}
function lightMode() {
  바디.style.color = "black";
  바디.style.backgroundColor = "white";
}
