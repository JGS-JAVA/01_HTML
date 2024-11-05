/*변수 선언해 기능만들기


*/
const 숫자1 = document.getElementById("input1");
const 숫자2 = document.getElementById("input2");
const 결과 = document.getElementById("계산결과");

/*숫자1 숫자2 더하기 설정
input 태그에 value 값 작성
두 수의 합을 #계산결과 요소에 내부글자로 넣기
input에서  type 을  number 로 설정해도 
input 태그 안에 작성한 값은 무조건 글자형식
type=number 는 가나다, abc 같은 문자작성 못하게 막아줄 뿐.
[해결책]
문자를 숫자로 변경하기
data parsing : 데이터 종류 바꿈
숫자만 작성된 문자를 진짜 숫자로 바꾸기
123 이면 number(123) 으로 작성

*/
function 더하기() {
  const value1 = 숫자1.value1;
  숫자1.value;
  숫자2.value;
  결과.innerText = Number(숫자1.value) + Number(숫자2.value);
}
function 빼기() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  결과.innerText = value1 - value2;
}
