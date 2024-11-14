/*
!true = false
!false = true

for 문은 판단 진행중
결과 출력문은 for 문 밖에 아래에 쓰기
*/

function submitForm() {
  const serviceChecked = document.getElementById("serviceChecked");
  const privacyChecked = document.getElementById("privacyChecked");

  if (!serviceChecked || !privacyChecked) {
    // 둘 중 하나가 거짓이면~
    alert("모든 필수 약관에 동의해주세요.");
    return;
  }
  const hchecked = document.querySelectorAll(".hobby");
  let hobbies = " ";
  let count = 0;

  for (let i = 0; i < hchecked.length; i++) {
    if (hchecked[i].checked) {
      hobbies += hchecked[i].value + " "; //선택취미 옆에 이어붙이기
      count++; //취미개수 증가
    }
  }
  const result = document.getElementById("result");
  if (count > 0) {
    result.innerText = `선택된 취미 : ${hobbies} \n 선택된 취미 개수 : ${count}`;
  } else {
    result.innerText = "선택된 취미가 없습니다.";
  }
}
