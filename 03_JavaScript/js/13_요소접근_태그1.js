/*
태그명으로 요소접근
html 문서의 모든 li 태그요소 가져와 배열로 묶어 반환
ul 태그 안 li 요소 모두 가져오기
1개 이상 가져온다 1개도 가능
tagList[0].innerText; = "red"
태그 안 요소는 모두 큰따옴표로 감싸져있다(문자열이다)
body 같은 기본태그는 id 나 class 없어도 접근가능
body 태그는 HTMLCollection(배열) 형태로 반환돼서 몇번째인지 [ ]로 적어준다
*/
function tagNameTest() {
  const tagList = document.getElementsByTagName("li");
  alert(tagList[0].innerText);
  tagList[0].style.backgroundColor = "red";
  tagList[1].style.backgroundColor = tagList[1].innerText;
  tagList[2].style.backgroundColor = tagList[2].innerText;
  tagList[3].style.backgroundColor = tagList[3].innerText;
  /*tagList[4].style.backgroundColor = tagList[4].innerText;
  없는 4번째 태그 색 변경해라면 에러나서 그 아래의 모든 코드도 작동정지함
  */
  document.body.style.backgroundColor = "lightblue";
  const bd = document.getElementsByTagName("body")[0];
  bd[0].style.backgroundColor = "lightblue";
}
