/*
랜덤 점심메튜 뽑기위해 배열 index 범위내 랜덤수(난수) 생성
난수: 모호한 수
어지러울 난
셀 수
Math.floor() 주어진 숫자의 소수점을 내림해서 가장 가까운 정수 반환 3.7 -> 3
Math.ceil() 주어진 숫자의 소수점을 올림해서 가장 가까운 정수 반환 3.7 -> 4
Math.round() 주어진 숫자의 소수점을 반올림해서 가장 가까운 정수 반환 3.5 -> 4, 3.4->3

Math.random() 0이상 1미만의 랜덤 소수(실수) 반환
0.0001 ~ 0.9999 사이 실수 * 메뉴갯수 -> 정수.소수
 소수모두버리기((랜덤소수*정수))
 메뉴들.length
 메뉴들[랜덤숫자]: 랜덤 index 수 들어옴
*/
function selectMenu() {
  const menuResult = document.getElementById("menuResult");
  const 메뉴들 = [
    "돈까스",
    "깐풍기",
    "햄버거",
    "멸치국수",
    "마파두부",
    "샌드위치",
    "볶음밥",
    "순대국밥",
  ];
  const 랜덤숫자 = Math.floor(Math.random() * 메뉴들.length);
  console.log("메뉴들 [ " + 랜덤숫자 + "]=" + 메뉴들[랜덤숫자]);
  menuResult.innerText = 메뉴들[랜덤숫자];
}
