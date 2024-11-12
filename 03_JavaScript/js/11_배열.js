/*
배열선언 및 기초사용법
arr1  arr2  둘 방법 다 빈배열 생성
자바스크립트에선 [] 방법 선호
자바는 new Array() 방법 선호
각 배열의 몇 까지의 값이 있는지 확인하기
배열명.length : 배열길이, 칸 수, 저장된 데이터 수 확인 
*/
function check1() {
  const arr1 = new Array(); //배열 생성
  const arr2 = []; //배열 생성
  const arr3 = new Array(3); //3칸 빈 배열 생성
  const arr4 = ["홍길동", "박철수", "강영식"]; //3칸 채워진 배열 생성, arr4.length = 3
  alert(arr4.length + "이다");
  const arr5 = ["A", "B", "C", "D", "E"];
  console.log("arr5의 0번째 값: " + arr5[0]);
  console.log("arr5의 1번째 값: " + arr5[1]);
  console.log("arr5의 2번째 값: " + arr5[2]);
  console.log("arr5의 3번째 값: " + arr5[3]);
  console.log("arr5의 4번째 값: " + arr5[4]);
  console.log("arr5의 5번째 값: " + arr5[5]);

  const arr6 = [];
  arr6[0] = 100;
  arr6[1] = "낙엽";
  arr6[2] = true;

  const arr7 = [];
  arr7[1] = 200; //0번째는 비어있고, 1번째에 200 들어감
  arr7[3] = "하늘"; //0번째는 비어있고, 1번째에 200 들어감
}
/*
const 변수명 = 배열값 세팅시 [] 작성시 왼쪽에 new 붙이지 말기.
대괄호 미사용시 new Array 사용하기

배열 index(색인, 번호)
배열 각 칸 구분번호
0부터 시작
중간에 번호 건너뛰기, 생략 불가
마지막 index == 배열길이 -1
index 사용법
A 는 0번째, B 는 1번째, ...
length = 5
마지막 index 번호는 5-1 = 4

자바스크립트 배열은 인덱스별 자료형 다르게 넣을수 있다
자료형은 숫자, 문자, true, false 등 나타내는 boolean 인지 구분

자바는 자료형 일치시켜야 한다
*/
