function 밥구매(abc) {
  const price = 밥가격(abc);
  const result = document.getElementById("result");
  if (price > 0) {
    result.innerText = abc + "구매완료. 가격은 " + price + "원";
  } else {
    result.innerText = "재료소진으로 주문불가";
  }
}
function 밥가격(abc) {
  if (abc === "비빔밥") {
    //'' "" 구분없음
    return 8000;
  } else if (abc === "김치찌개") {
    return 7000;
  } else if (abc === "된장찌개") {
    return 7000;
  } else {
    return 0;
  }
}
