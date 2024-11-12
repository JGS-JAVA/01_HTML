/*
floor 써야 올림돼서 빈공간 추가되지 않도록 한다
' ' 나 " " 로 문자열, 변수명 구분없이 한번에 쓰기
` ` 역따옴표는 문자열과 변수명 한번에 작성
변수명에 ${변수명} 으로 표기하면 위에 있는 변수명으로 표기;
*/

function pickFruit() {
  const result = document.getElementById("result");
  const 과일들 = [
    "사과",
    "오렌지",
    "바나나",
    "체리",
    "망고",
    "포도",
    "딸기",
    "파인애플",
    "블루베리",
    "복숭아",
  ];
  console.log(과일들.length);
  console.log(과일들[5]);
  const randomIndex = Math.floor(Math.random() * 과일들.length);
  const randomFruit = 과일들[randomIndex];
  result.innerText = "랜덤으로 뽑힌 과일 :" + randomFruit;
  result.innerText = `랜덤으로 뽑힌 과일 : ${randomFruit} `;
}
