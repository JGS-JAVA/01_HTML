function selectFruit(fruitNumber) {
  const result = document.getElementById("result");
  const fruitNumber = document.getElementById("fruitNumber");

  switch (fruitNumber) {
    case "1":
      result.innerText = "사과";
      break;
    case "2":
      result.innerText = "오렌지";
      break;
    case "3":
      result.innerText = "바나나";
      break;
    case "4":
      result.innerText = "체리";
      break;
    case "5":
      result.innerText = "망고";
      break;
    case "종료":
      return;
  }
}
/*
  result.innerText = "랜덤으로 뽑힌 과일 :" + randomFruit;
  result.innerText = `랜덤으로 뽑힌 과일 : ${randomFruit} `;

  */
