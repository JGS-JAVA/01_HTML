/*변수명에 특정값 담지않고(undefined) 변수명만 선언. 값은 나중에 담는다
동일 비교연산자
!== -> 값과 자료형 모두 다른경우 true
=== -> 값과 자료형 모두 같은경우 true
확인 -> 입력값
취소 -> null 값
*/
function check1() {
  let val;

  while (val !== null) {
    val = prompt("입력 후 확인");
    alert(val + "값 확인");
  }
}
function check2() {
  let age;

  while (age !== null) {
    age = prompt("나이입력");
    if (age >= 18) {
      alert("성인");
    } else if (age >= 13) {
      alert("청소년");
    } else {
      alert("어린이");
    }
  }
}
function check3() {
  let gender;
  /*gender 가 null 아니라는 확인하기*/
  while (gender !== null) {
    gender = prompt("성별입력");
    if (gender === "남자") {
      alert("남자");
    } else if (gender === "여자") {
      alert("여자");
    } else {
      alert("입력 오류");
    }
  }
}
