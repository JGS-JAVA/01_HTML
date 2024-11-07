/*if - 양수인지 검사
input 은 문자라서 Number 로 감싸기
v1 이 양수면 

true 인 조건만 실행한다
*/
const input1 = document.getElementById("input1");
function check1() {
  const v1 = Number(input1.value);
  if (0 < v1) {
    alert("0보다 큰 양수다");
  }

  if (v1 <= 0) {
    alert("0 보다 같거나 작다");
  }
}
