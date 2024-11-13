/*
각 스판 요소에 0번부터 접근

*/
function clsTest() {
  const divs = document.getElementsByClassName("cls");
  alert(divs);
  divs[0].style.backgroundColor = "yellowgreen";
  divs[1].style.backgroundColor = "yellow";
  divs[2].style.backgroundColor = "lightblue";

  for (let i = 0; i < divs.length; i++) {
    divs[i].innerText = `${i} 번째 div`;
  }
}
function clsSpn() {
  const spans = document.getElementsByClassName("spn");
  alert(spans);
  spans[0].style.backgroundColor = "red";
  spans[1].style.backgroundColor = "orange";
  spans[2].style.backgroundColor = "yellow";
  spans[3].style.backgroundColor = "green";
  spans[4].style.backgroundColor = "blue";

  for (let i = 0; i < spans.length; i++) {
    spans[i].innerText = `${i} 번째 span`;
  }
}
