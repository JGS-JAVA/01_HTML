function 정보확인하기() {
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const number = document.getElementById("user-number").value;

  /*입력한 정보 밑에 작성글자 표기하기
  const = new 새 이름 작성하기 = 이름 들어갈 공간*/
  document.getElementById("info-name").innerText = name;
  document.getElementById("info-email").innerText = email;
  document.getElementById("info-number").innerText = number;
  alert("입력된 정보는" + name + "," + email + "," + number + "입니다.");
}
