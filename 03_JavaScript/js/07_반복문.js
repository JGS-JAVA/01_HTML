/*onclick = fuction
for([1]초기식 ; [2]조건식; [4]증감식){
            [3] 조건식이 true 이면 반복수행할 코드;
}
            for( 공간을 ; 로 구분한다 )


function check1() {
    for(최초 1회만 어떤 값인지 보여주는 공간 ; {} 안에 들어가 작성된 코드 실행하는 조건 ; 더하거나 뺄 값){
        조건 true 면 실행할 공간
    }
}
 for 문 안에 const(상수) 대신 let(변수) 사용
문자열 형식으로 모든 숫자 출력해 숫자 다 나왔는지 확인


결과란 변수명에 숫자 1~5 누적해서 이어붙이기
결과=결과+숫자
숫자++  ===> 숫자=숫자+1
*/
let 결과 = "";
for (let 숫자 = 1; 숫자 <= 5; 숫자++) {
  결과 += 숫자;
  console.log("결과 : " + 결과);
}

console.log("==========");
console.log("최종값은 ");
console.log(결과 + " 입니다. ");

function check2() {
  for (let a = 1; a <= 10; a++) {
    console.log("1~10:" + a);
  }
}

function check3() {
  for (let a = 1; a <= 20; a++) {
    console.log("1~20:" + a);
  }
}

function check4() {
  for (let a = 5; a <= 15; a++) {
    결과 += a;
    console.log("5~15:" + a);
  }
  alert("최종출력수는 " + 결과);
}
/*while 구조
while(조건식){
반복할 코드
     }
*/
function while1() {
  let abc = 1;
  while (abc <= 5) {
    alert(abc);
    abc++; //abc = abc + 1;
  }
}

function while2() {
  let abc = 1;
  while (abc <= 10) {
    console.log("while2 버튼====== " + abc);
    console.log("abc: " + abc);
    abc++;
  }
}
function while3() {
  let abc = 1;
  while (abc <= 10) {
    console.log("while3 버튼====== " + abc);
    console.log("abc: " + abc);
    abc++;
  } if(abc == 5){
    break;
  }
}
function while4(){

  let xyz = 0;
  while(xyz <= 20){
    console.log(xyz);
    xyz++;
  }
}
function while5(){

  let xyz = 5;
  while(xyz <= 20){
    console.log(xyz);
    xyz++;
  } if(xyz == 15){
    break;
  }
}
