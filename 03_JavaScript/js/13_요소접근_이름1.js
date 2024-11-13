/*
name 으로 요소접금
name 속성값이 "취미" 인 요소 모두 가져와
hobbys 에 저장
radio checkbox 는 2개 이상의 input 작성하고
name 으로 취미나 마케팅 수신동의, 결혼여부 등 각 input 을 묶어준다
hobbys 로 취미 모두 가져오기
선택한 모든 취미 확인하기

alert("1번 hobbys 만 작성 : " + hobbys); // object NodeList 유사배열
  alert("2번 hobbys[0] 만 작성 : " + hobbys[0]); // object HTMLInputElement html input 요소
  alert("3번 hobbys[0].value 모두 작성 : " + hobbys[0].value); // 유사배열에서 0번째에

취미는 게임, 음악감상 2개뿐
index = 0, 1 
length = 2
 
checkbox radio 전용속성 (.checked)
input 요소.checked -> 요소가 체크되어 있으면 true, 아니면 false
input 요소.checked = true -> 요소 체크
input 요소.checked = false -> 요소 미체크

checkbox valueChecked 속성확인

function checkbox valueChecked 속성확인() {
  const hobbys = document.getElementsByName("취미");

  for (let i = 0; i < hobbys.length; i++) {
    console.log(hobbys[i].value);
    console.log("******");
    console.log("input 게임 요소 checked 로 체크유무 확인");
    console.log(hobbys[0].checked);
    console.log("input 음악감상 요소 checked 로 체크유무 확인");
    console.log(hobbys[1].checked);
  }
}

innerText = 태그나 html 에서 작성하는 코드 작동 안함
innerHTML = 태그나 html 에서 작성하는 코드 작동함

document.getElementById(
  "result"
).innerText = `${str} 선택된 취미 개수 : ${count}`;
}

value 값 미지정시 
checkbox radio = on 스위치처럼 체크유무 표시
                value 속성 없으면 기본적으로 on 전송해서 사용할 수 있는 상태임 나타냄
text number = " " (null 값)
*/
function nameBtn() {
  const hobbyList = document.getElementsByName("취미");
  let str = ""; // 체크된 값 누적
  let count = 0; // 체크된 수 총 계산 카운트

  for (let i = 0; i < hobbyList.length; i++) {
    if (hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++; // true 면 숫자 더해짐
    }
    document.getElementById(
      "result"
    ).innerHTML = `${str} <br> 선택된 취미 개수 : ${count}`;
  }
}
