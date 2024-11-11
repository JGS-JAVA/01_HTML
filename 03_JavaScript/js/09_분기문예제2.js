function select() {
  let choice;
  const result = document.getElementById("result");
  const bd = document.getElementById("bd");
  /*input은 기본으로 숫자 아닌 글자라 숫자 ""로 감싸기
  let은 변수라서 변수명,변수값 안넣어도 됨
  const는 상수라서 상수명,상수값 넣어야함
  innerText, style 등은 느리고
  switch 에서 while 로 가는 속도가 더빨라서 육안확인불가*/
  while (choice !== null) {
    choice = prompt("숫자입력");
    switch (choice) {
      case "3":
      case "4":
      case "5":
        bd.style.backgroundColor = "lightpink";
        alert("봄 선택");
        break;
      case "6":
      case "7":
      case "8":
        bd.style.backgroundColor = "lightyellow";
        alert("여름 선택");
        break;
      case "9":
      case "10":
      case "11":
        bd.style.backgroundColor = "sandybrown";
        alert("가을 선택");
        break;
      case "12":
      case "1":
      case "2":
        bd.style.backgroundColor = "lightblue";
        alert("겨울 선택");
        break;
      case "종료":
        alert("종료합니다");
        return;
      default:
        alert("입력 오류");
        break;
    }
  }
}
