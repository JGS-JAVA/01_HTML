let count = 0; //const는 값 변경 안돼서 사용금지
const bd = document.getElementById("bd");
const cnt = document.getElementById("count");

function 증가() {
  count += 1; //1씩 증가
  document.getElementById("count").innerText = count;
  bd.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";
}
function 감소() {
  cnt.innerText = count;
  count -= 1; //1씩 감소
  document.getElementById("count").innerText = count;
  cnt.style.color = count % 2 == 0 ? "orange" : "black";
}
function 초기화() {
  count = 0; //초기화, 증감버튼 모두 count 0으로 하기
  document.getElementById("count").innerText = 0;
}
/*삼항 연산자 이용해
count 값에 따라 배경색 변경*/

document;
