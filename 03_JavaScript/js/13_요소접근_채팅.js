/*
ocument.querySelector("css속성명")
채팅 입력후 자동으로 빈칸 한번 더 입력됨. 그래서 채팅창이 항상 비어보인다

bg.scrollTop: 스크롤 윗부분 위치
bg.scrollHeight: 채팅 감싸는 div 전체높이
bg.scrollTop = bg.scrollHeight;
값이 너무 크면 스크롤 맨 아래로 이동시킴

입력창에 입력값 없을때
1. 진짜 안적음
2. 공백 적음

문자열.trim() : 문자열의 좌우공백 제거
inputChat.value.trim().length == 0
inputChat.value.      입력값
               trim() 좌우공백제거
.length  글자수
== 0     0일때
if 문 안에 return 써서 if 문 나가서 돌려보냄
input 아이디값이 user-input 인 요소에서
키보드 작동이 감지될시 
올라온 키가 'Enter' 키면 readValue()함수 불러오기

keydown : 키 눌러질 때
keypress : 키 눌러진 상태
keyup : 눌러진 키 다시 올라올 때

addEventListener 로 keyup 이벤트 확인, 그 외 다양한 이벤트 존재
*/

function readValue() {
  const bg = document.querySelector("#chatting-bg");
  const inputChat = document.querySelector("#user-input");
  if (inputChat.value.trim().length == 0) {
    alert("채팅내용 입력하기");
    return;
  }

  bg.innerHTML += ` <p><span>${inputChat.value}</span></p>  `;

  bg.scrollTop = bg.scrollHeight;
  inputChat.value = " ";
}
function 키누르기(event) {
  if (event.key === "Enter") {
    readValue();
  }
}
