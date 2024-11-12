/*
for 문 활용한 배열 요소 초기화
index: 칸 번호
배열요소: 칸
초기화: 변수/배열요소에 처음으로 값 대입
arr1 만 쓰면 arr1 모든값 출력

각 [0] 부터 [3] 까지 출력하기
for 문 활용
*/

function check() {
  const arr1 = [];
  arr1[0] = "김밥";
  arr1[1] = "떡볶이";
  arr1[2] = "라면";
  arr1[3] = "볶음밥";
  document.getElementById("result").innerText = arr1;

  for (let i = 0; i <= 3; i++) {
    alert(arr1[i]);
  }
}
