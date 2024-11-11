/*브레이크 확인
1~10 까지 1씩 증가하다가 5되면 멈춤
1. for 문을 이용해서 1~5 까지 합 출력
break: for문 멈추기. for 문 중단하기 전 값을 저장한 상태로 탈출*/
function check1() {
  let result = 0; //let은 변수
  /*초기식 조건식 증감식*/
  for (let a = 1; a <= 10; a++) {
    result += a;
    if (a == 5) {
      break;
    }
  }
  alert(result); //1~5까지 더한 결과값
}
/*1~20 더하기
첫 수 + 끝 수 = 21
20/2 = 10
21*10 = 210
1~10 = 11  
10/2 = 5
11*5 = 55*/
function check2() {
  let result = 0;

  for (let a = 1; a <= 20; a++) {
    result += a;
    if (a == 15) {
      break;
    }
  }
  alert(result); //1~15까지 더한 결과값
}

function check3() {
  let result = 0;

  for (let a = 1; a <= 20; a++) {
    console.log(a);
    if (a % 3 == 0) {
      break;
    }
    console.log("a 값 [" + a + "]");
  }
}
