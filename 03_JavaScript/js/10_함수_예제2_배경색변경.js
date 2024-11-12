function 색상변경(choice) {
  const bd = document.getElementById("bd");

  switch (choice) {
    case "라이트블루":
      bd.style.backgroundColor = "lightblue";
      break;
    case "라이트코랄":
      bd.style.backgroundColor = "lightcoral";
      break;
    case "라이트옐로":
      bd.style.backgroundColor = "lightyellow";
      break;
    case "라이트그린":
      bd.style.backgroundColor = "lightgreen";
      break;
    case "종료":
      return;
  }
}
