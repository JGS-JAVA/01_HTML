const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const result = calcResult.getElementById("res");

function add() {
  const value1 = n1.value1;
  const value2 = n2.value2;
  result.innerText = Number(value1) + Number(value2);
}
function mul() {
  const value1 = n1.value1;
  const value2 = n2.value2;
  result.innerText = Number(value1) * Number(value2);
}
function sub() {
  const value1 = n1.value1;
  const value2 = n2.value2;
  result.innerText = Number(value1) - Number(value2);
}

function comp() {
  result.innerText =
    n1.value1 >= n2.value2
      ? "첫 번째 숫자가 더 큽니다."
      : "두 번째 숫자가 더 크거나 같습니다.";
}
function comp() {
  result.color = n1.value1 >= n2.value2 ? "lightblue" : "lightpink";
}

/*function calc(){
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const res = calcResult.getElementById("res");

const comp = (n1>n2) ? "첫 번째 숫자가 더 큽니다." : "두 번째 숫자가 더 크거나 같습니다.";
const add = Number(n1.value) + Number(n2.value);
const mul = n1.value * n2.value;
const sub = n1.value - n2.value;

result.innerText = comp + "\n" 
+"더하기 결과 : " + add + "\n" 
+"곱하기 결과 : " + mul + "\n"
+"빼기 결과 : " + sub;
}
\n 은 줄바꾸는 엔터역할*/
