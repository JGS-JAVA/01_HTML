function checkAge() {
  const age = document.getElementById("age").value;
  const msg = document.getElementById("ageMsg");

  if (age >= 18) {
    msg.innerText = "관람 가능";
    msg.className = "success";
    /* msg.style.color = "green";
    msg.style.backgroundColor = "lightpink";*/
  } else {
    msg.innerText = "관람 불가";
    msg.className = "fail";
    /* msg.style.color = "red";
    msg.style.backgroundColor = "orange";*/
  }
}
/*
변수명.className = "fail";
css 태그 안 작성한 css 클래스 속성명 불러오기
4순위

변수명.style.color = "blue";
2순위

조건문에서 변수명.className으로 시작시
다른 {} 안에도 className 으로 맞추기

*/
