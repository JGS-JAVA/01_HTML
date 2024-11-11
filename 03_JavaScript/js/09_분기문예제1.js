function selectMenu() {
  let choice;
  const result = document.getElementById("result");
  /*input은 기본으로 숫자 아닌 글자라 숫자 ""로 감싸기*/
  while (choice !== null) {
    choice = prompt("메뉴 번호 입력\n 1,2,3,종료만 입력가능");
    switch (choice) {
      case "1":
      case "아메리카노":
        result.innerText = "아메리카노 선택";
        console.log("아메리카노 선택함");
        break;
      case "2":
        result.innerText = "카페라떼 선택";
        console.log("카페라떼 선택함");
        break;
      case "3":
        result.innerText = "프라푸치노 선택";
        console.log("프라푸치노 선택함");
        break;
      case "종료":
        result.innerText = "종료합니다";
        return;
      default:
        result.innerText = "입력 오류";
        console.log("입력 오류");
        break;
    }
  }
}
function totalPrice() {
  let coffeePrice = 0;
  function 선택(abc) {
    const price = document.getElementById("price");
    switch (abc) {
      case "아메리카노":
        coffeePrice += 2000;
        break;
      case "카페라떼":
        coffeePrice += 5000;
        break;
      case "프라푸치노":
        coffeePrice += 3000;
        break;
    }
    price.innerText = coffeePrice;
  }
}
/* innerText 마지막에 한번만 작성.
   버튼 누르면 총금액 출력*/
