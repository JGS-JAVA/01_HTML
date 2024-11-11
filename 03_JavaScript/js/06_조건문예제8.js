function gender() {
  let gdr = prompt("성별입력(남/여 만 가능)");
  switch (
    gdr //어떤 조건 도착시
  ) {
    case "남성":
      alert("남성");
      break;
    /*case 뒤 break / return 문 없으면 뒤에 case 들의 의미가 사라짐
      case 남성 실행후 확인하면 뒤의 case 여성, default 모두 실행됨
      break 로 switch 문 탈출해야함 */
    case "여성":
      alert("여성");
      break;
    default:
      alert("입력 오류");
      break;
  }
}
/*\n 은 엔터처럼 줄바꿈 javaScript 표기*/
function order() {
  let menu;
  while (menu !== null) {
    menu = prompt(
      "메뉴 선택 \n 삼겹, 부대, 김치 \n 만 입력가능 \n 종료 작성시 메뉴선택 종료됨"
    );
    switch (menu) {
      case "삼겹":
        alert("삼겹 선택함. \n 가격은 12000원");
        break; // switch 나가서 while 문으로 간다. 특정 while 문 반복.
      case "부대":
        alert("부대 선택함. \n 가격은 10000원");
        break;
      case "김치":
        alert("김치 선택함. \n 가격은 9000원");
        break;
      case "종료":
        alert("주문 종료");
        return; // switch, while 모두 나간다. 모든 반복문 종료.
      default:
        alert("입력 오류 \n 메뉴 다시 선택 \n (예)삼겹");
    }
  }
}
