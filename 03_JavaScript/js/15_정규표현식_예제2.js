function checkEmail() {
  const userEmail = document.getElementById("email").value;
  const errorMsg = document.getElementById("error-msg");
  const emailPattern =
    /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-가-힇]+\.[a-zA-Z가-힇{2,}]$/;
  }
  if (emailPattern.test(userEmail)) {
    errorMsg.style.display = "none";
    console.log("유효함");
  } else {
    errorMsg.style.display = "block";
    console.log("유효하지 않음");
  }
  
  const userPhone = document.getElementById("user-phone");
  const errorMsg = document.getElementById("error-msg2");
  const phonePattern = /^ \d{3}+\- \d{4}  +\- \d{4} $/           //d = digit= [0-9]
  function checkPhone(){
    if(phonePattern.test(userPhone.value))
  }